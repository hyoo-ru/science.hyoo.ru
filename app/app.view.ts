namespace $.$$ {
	export class $hyoo_science_app extends $.$hyoo_science_app {
		
		@ $mol_mem
		service( next?: string ) {
			return this.$.$mol_state_arg.value( 'service', next ) ?? super.service()
		}

		@ $mol_mem
		query() {
			return this.$.$mol_state_arg.value( 'query' ) ?? ''
		}

		@ $mol_mem
		doi() {
			return this.$.$mol_state_arg.value( 'doi' ) ?? ''
		}

		@ $mol_mem
		title() {
			return this.query().trim() || super.title()
		}

		@ $mol_mem
		area( next?: string ) {
			if( !this.area_supported() ) return ''
			return this.$.$mol_state_arg.value( 'area', next ) ?? super.area()
		}
		
		area_supported() {
			return [ 'scopus' ].includes( this.service() )
		}

		@ $mol_mem
		place( next?: string ) {
			if( !this.place_supported() ) return ''
			return this.$.$mol_state_arg.value( 'place', next ) ?? super.place()
		}

		place_supported() {
			return [ 'scopus', 'sciencedirect' ].includes( this.service() )
		}

		@ $mol_mem
		open( next?: boolean ) {
			if( !this.open_supported() ) return false
			return this.$.$mol_state_arg.value( 'open', next?.toString() ) !== 'false'
		}

		open_supported() {
			return [ 'scopus', 'sciencedirect', 'crossref' ].includes( this.service() )
		}

		@ $mol_mem
		pages() {
			return [
				this.Search(),
				... this.doi() ? [ this.Details() ] : [],
			]
		}

		@ $mol_mem
		sort( next?: string ) {
			if( !this.sort_supported() ) return ''
			return this.$.$mol_state_arg.value( 'sort', next ) ?? super.sort()
		}

		sort_supported() {
			return [ 'scopus', 'crossref' ].includes( this.service() )
		}

		@ $mol_mem
		request() {
			let request = this.query()
			switch( this.service() ) {
				
				case 'scopus': {
					if( request.trim() && this.place() ) request = `${ this.place() }(${ request })`
					if( this.open() ) request += ` openaccess(1)` 
					if( this.area() ) request += ` SUBJAREA(${ this.area() })` 
					break
				}
				
				case 'sciencedirect': {
					if( request.trim() && this.place() ) request = `${ this.place() }(${ request })`
					if( this.open() ) request += ` openaccess(1)` 
					break
				}
				
			}
			return request
		}

		@ $mol_mem
		help() {
			return {
				crossref: 'https://github.com/CrossRef/rest-api-doc',
				sciencedirect: 'https://dev.elsevier.com/tips/ScienceDirectQueryTips.htm',
				scopus: 'https://schema.elsevier.com/dtds/document/bkapi/search/SCOPUSSearchTips.htm',
			}[ this.service() ] ?? ''
		}

		@ $mol_action
		search() {
			
			const query = this.query_changed().trim()
			
			if( /^[\w.]+\/[\w.]+$/.test( query ) ) {
				
				this.$.$mol_state_arg.go({
					doi: query,
				})
				return
				
			}
			
			this.$.$mol_state_arg.go({
				area: this.area(),
				query,
				place: this.place(),
				open: this.open().toString(),
			})
			
		}

		@ $mol_mem
		search_data() {
			const self = this
			return {
				get crossref() {
					return self.$.$hyoo_science_crossref_search(
						self.request(),
						self.open(),
						{
							refs: 'is-referenced-by-count',
							date: 'published',
						}[ self.sort() ] ?? '',
					)
				},
				get sciencedirect() {
					return self.$.$hyoo_science_elsevier_search( 
						self.service(),
						self.request(),
						'',
					)
				},
				get scopus() {
					return self.$.$hyoo_science_elsevier_search(
						self.service(),
						self.request(),
						{
							refs: 'citedby-count',
							date: 'coverDate',
						}[ self.sort() ] ?? '',
					)
				},
			}[ this.service() ]!
		}

		@ $mol_mem
		found_rows() {
			return this.search_data().article.map( (_,i)=> this.Found_row( i ) )
		}

		found_open( index: number ) {
			return this.search_data().article[ index ].open
		}
		
		found_title( index: number ) {
			return this.search_data().article[ index ].title
		}
		
		found_doi( index: number ) {
			return this.search_data().article[ index ].doi
		}
		
		found_link( index: number ) {
			return this.search_data().article[ index ].link
		}
		
		found_rank( index: number ) {
			return this.search_data().article[ index ].rank
		}
		
		found_date( index: number ) {
			return this.search_data().article[ index ].date
		}
		
		found_journal( index: number ) {
			return this.search_data().article[ index ].journal
		}

	}
}
