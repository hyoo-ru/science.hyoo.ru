namespace $ {

	export let $hyoo_science_crossref_ref = $mol_data_record({
		'DOI': $mol_data_optional( $mol_data_string ),
		'key': $mol_data_string,
	})

	export let $hyoo_science_crossref_moment = $mol_data_record({
		'date-time': $mol_data_string,
	})

	export let $hyoo_science_crossref_person = $mol_data_record({
		'ORCID': $mol_data_optional( $mol_data_string ),
		'given': $mol_data_string,
		'family': $mol_data_string,
	})

	export let $hyoo_science_crossref_entry = $mol_data_record({
		'DOI': $mol_data_string,
		'ISSN': $mol_data_optional( $mol_data_array( $mol_data_string ) ),
		'URL': $mol_data_string,
		// 'publisher': $mol_data_string,
		'abstract': $mol_data_optional( $mol_data_string ),
		'container-title': $mol_data_array( $mol_data_string ),
		'is-referenced-by-count': $mol_data_integer,
		// 'reference-count': $mol_data_integer,
		'title': $mol_data_array( $mol_data_string ),
		'subtitle': $mol_data_optional( $mol_data_array( $mol_data_string ) ),
		'reference': $mol_data_optional( $mol_data_array( $hyoo_science_crossref_ref ) ),
		// 'author': $mol_data_optional( $mol_data_array( $hyoo_science_crossref_person ) ),
		'deposited': $hyoo_science_crossref_moment,
	})
	
	export let $hyoo_science_crossref_response = $mol_data_record({
		'message': $mol_data_record({
			'total-results': $mol_data_integer,
			'items': $mol_data_array( $hyoo_science_crossref_entry ),
		}),
	})

	export function $hyoo_science_crossref_search( this: $, query: string ) {

		const endpoint = `https://api.crossref.org/types/journal-article/works`

		const uri = new URL( '?' + new URLSearchParams({
			offset: '0',
			rows: '100',
			query: query,
			sort: 'is-referenced-by-count',
			select: 'title,subtitle,DOI,URL,container-title,deposited,is-referenced-by-count',
		}), endpoint )

		const resp = $hyoo_science_crossref_response( this.$mol_fetch.json( uri.toString() ) as any )["message"]

		return {
			total: resp["total-results"],
			article: resp.items
			// .filter( entry => entry.title && entry["container-title"] )
			.map( entry => ({
				link: entry.URL,
				doi: entry.DOI,
				title: entry.title![0] + ( entry.subtitle ? `: ${ entry.subtitle[0] }` : '' ),
				// author: entry.author?.[0] ? ( `${ entry.author?.[0].given } ${ entry.author?.[0].family }` ) : '🐱‍👤',
				journal: entry["container-title"]![0],
				date: new $mol_time_moment( entry.deposited["date-time"] ).mask( '0000-00-00' ),
				open: true,
				rank: entry["is-referenced-by-count"],
			}) ),
		}

	}
	
}
