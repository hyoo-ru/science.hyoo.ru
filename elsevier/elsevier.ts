namespace $ {

	const moment = $mol_data_pipe( $mol_data_string, $mol_time_moment )

	enum Link_type {
		'scidir' = 'scidir',
		'self' = 'self',
		'scopus' = 'scopus',
		'scopus-citedby' = 'scopus-citedby',
		'full-text' = 'full-text',
		'author-affiliation' = 'author-affiliation',
	}

	export let $hyoo_science_elsevier_link = $mol_data_record({
		'@ref': $mol_data_enum( 'Link_type', Link_type ),
		'@href': $mol_data_string,
	})

	export let $hyoo_science_elsevier_error = $mol_data_record({
		error: $mol_data_string,
	})

	export let $hyoo_science_elsevier_entry = $mol_data_record({
		// 'pii': $mol_data_string,
		// 'load-date': moment,
		'openaccess': $mol_data_pipe( ( v: any )=> Number( v ), ( v: number )=> Boolean( v ) ),
		'citedby-count': $mol_data_optional( $mol_data_string ),
		'dc:creator': $mol_data_optional( $mol_data_string ),
		'dc:identifier': $mol_data_string,
		'dc:title': $mol_data_string,
		'prism:coverDate': moment,
		'prism:doi': $mol_data_optional( $mol_data_string ),
		'prism:publicationName': $mol_data_string,
		'prism:startingPage': parseInt,
		'prism:url': $mol_data_string,
		'prism:volume': parseInt,
		'link': $mol_data_array( $hyoo_science_elsevier_link ),
	})
	
	export let $hyoo_science_elsevier_response = $mol_data_record({
		'search-results': $mol_data_record({
			'opensearch:totalResults': parseInt,
			'opensearch:startIndex': parseInt,
			'opensearch:itemsPerPage': parseInt,
			'entry': $mol_data_variant(
				$mol_data_array( $hyoo_science_elsevier_entry ),
				$mol_data_array( $hyoo_science_elsevier_error ),
			),
		}),
	})

	export function $hyoo_science_elsevier_search( this: $, service: string, query: string ) {

		const endpoint = `https://api.elsevier.com/content/search/${service}`

		const uri = new URL( '?' + new URLSearchParams({
			start: '0',
			count: {
				sciencedirect: '100',
				scopus: '25',
			}[ service ] ?? '20',
			query: query,
			sort: 'citedby-count',
			// apiKey: , // 
			apiKey: {
				sciencedirect: '7f59af901d2d86f78a1fd60c1bf9426a',
				scopus: 'd5bc1fbad583a2e8c0145f6552bbb5bd',
			}[ service ] ?? '',
		}), endpoint )

		const resp = $hyoo_science_elsevier_response( this.$mol_fetch.json( uri.toString() ) as any )["search-results"]

		return {
			total: resp["opensearch:totalResults"],
			article: ( resp.entry as typeof $hyoo_science_elsevier_entry.Value[] )
			.filter( entry => !( 'error' in entry ) )
			.map( entry => ({
				// pii: entry.pii,
				link: entry["prism:doi"]
					? `https://doi.org/${ entry["prism:doi"] }`
					: entry.link.filter( l => [ 'scidir', 'scopus' ].includes( l["@ref"] ) )[0]["@href"],
				doi: entry["prism:doi"] ?? null,
				title: entry["dc:title"],
				// author: entry["dc:creator"] ?? '🥷',
				journal: entry["prism:publicationName"],
				date: entry["prism:coverDate"],
				open: entry.openaccess,
				rank: Number( entry["citedby-count"] ),
			}) ),
		}

	}
	
}
