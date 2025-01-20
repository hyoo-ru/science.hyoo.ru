namespace $ {

	export let $hyoo_science_crossref_ref = $mol_data_record({
		'DOI': $mol_data_optional( $mol_data_string ),
		'key': $mol_data_string,
	})

	export let $hyoo_science_crossref_date = $mol_data_record({
		'date-parts': $mol_data_array( $mol_data_array( $mol_data_integer ) ),
		'date-time': $mol_data_optional( $mol_data_string ),
	})

	export let $hyoo_science_crossref_person = $mol_data_record({
		'ORCID': $mol_data_optional( $mol_data_string ),
		'given': $mol_data_optional( $mol_data_string ),
		'family': $mol_data_optional( $mol_data_string ),
		'name': $mol_data_optional( $mol_data_string ),
	})

	export let $hyoo_science_crossref_entry = $mol_data_record({
		'DOI': $mol_data_string,
		'ISSN': $mol_data_optional( $mol_data_array( $mol_data_string ) ),
		'URL': $mol_data_string,
		'abstract': $mol_data_optional( $mol_data_string ),
		'container-title': $mol_data_array( $mol_data_string ),
		'is-referenced-by-count': $mol_data_integer,
		// 'reference-count': $mol_data_integer,
		'title': $mol_data_array( $mol_data_string ),
		'subtitle': $mol_data_optional( $mol_data_array( $mol_data_string ) ),
		'reference': $mol_data_optional( $mol_data_array( $hyoo_science_crossref_ref ) ),
		'author': $mol_data_optional( $mol_data_array( $hyoo_science_crossref_person ) ),
		'published': $hyoo_science_crossref_date,
		'published-print': $mol_data_optional( $hyoo_science_crossref_date ),
		'published-online': $mol_data_optional( $hyoo_science_crossref_date ),
		'page': $mol_data_optional( $mol_data_string ),
		'volume': $mol_data_optional( $mol_data_string ),
	})
	
	export let $hyoo_science_crossref_search_response = $mol_data_record({
		'message': $mol_data_record({
			'total-results': $mol_data_integer,
			'items': $mol_data_array( $hyoo_science_crossref_entry ),
		}),
	})

	export let $hyoo_science_crossref_details_response = $mol_data_record({
		'message': $hyoo_science_crossref_entry,
	})

	function html2text( html: string ) {
		return $mol_html_decode( html.replace( /<.*?>/g, ' ' ) )
	}

	function date2moment( date: typeof $hyoo_science_crossref_date.Value | undefined ) {
		if( !date ) return null
		return new $mol_time_moment({
			year: date["date-parts"][0][0],
			month: date["date-parts"][0][1],
		})
	}
	
	export function $hyoo_science_crossref_search( this: $, query: string, open: boolean, sort: string ) {

		const endpoint = `https://api.crossref.org/types/journal-article/works`

		const uri = new URL( '?' + new URLSearchParams({
			offset: '0',
			rows: '100',
			query: query,
			... sort ? { sort } : {},
			filter: [
				'type:journal-article',
				... open ? [ 'from-online-pub-date:1000-01-01' ] : [],
			].join( ',' ),
			select: [
				'title',
				'subtitle',
				'DOI',
				'URL',
				'container-title',
				'published',
				'published-print',
				'published-online',
				'is-referenced-by-count',
			].join( ',' ),
			mailto: 'webmaster@hyoo.ru',
		}), endpoint )

		const resp = $hyoo_science_crossref_search_response( this.$mol_fetch.json( uri.toString() ) as any )["message"]

		return {
			total: resp["total-results"],
			article: resp.items
			// .filter( entry => entry.title && entry["container-title"] )
			.map( entry => ({
				link: entry.URL,
				doi: entry.DOI,
				title: html2text( entry.title?.[0] ?? '' ) + ( entry.subtitle ? `: ${ html2text( entry.subtitle[0] ) }` : '' ),
				// author: entry.author?.[0] ? ( `${ entry.author?.[0].given } ${ entry.author?.[0].family }` ) : '🐱‍👤',
				journal: html2text( entry["container-title"]![0] ),
				date: date2moment( entry["published"] ),
				open: Boolean( entry["published-online"] ),
				rank: entry["is-referenced-by-count"],
			}) ),
		}

	}

	export function $hyoo_science_crossref_details( this: $, doi: string ) {

		const entry = $hyoo_science_crossref_details_response(
			this.$$.$mol_fetch.json( `https://api.crossref.org/works/${doi}?mailto=webmaster@hyoo.ru` ) as any
		).message

		return {
			doi: entry.DOI,
			link: entry.URL,
			title: html2text( entry.title?.[0] ?? '' ),
			title_sub: html2text( entry.subtitle?.[0] ?? '' ),
			authors: entry.author?.map( person => person.name || `${ person.given ?? '' } ${ person.family ?? '' }` ) ?? [],
			journal: html2text( entry["container-title"]?.[0] ?? '' ),
			abstract: html2text( entry.abstract ?? '' ),
			rank: entry["is-referenced-by-count"],
			published: date2moment( entry['published'] ),
			print_location: [
				entry['volume'],
				entry['page'],
			].filter( Boolean ).join( ', ' ),
		}

	}

}
