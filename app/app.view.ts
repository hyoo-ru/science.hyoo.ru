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
		title() {
			return this.query().trim() || super.title()
		}

		@ $mol_mem
		area( next?: string ) {
			return this.$.$mol_state_arg.value( 'area', next ) ?? super.area()
		}

		@ $mol_mem
		place( next?: string ) {
			return this.$.$mol_state_arg.value( 'place', next ) ?? super.place()
		}

		@ $mol_mem
		open( next?: boolean ) {
			return this.$.$mol_state_arg.value( 'open', next?.toString() ) !== 'false'
		}

		@ $mol_mem
		request() {
			let request = this.query()
			if( request.trim() && this.place() ) request = `${ this.place() }(${ request })`
			if( this.open() ) request += ` openaccess(1)` 
			if( this.area() ) request += ` SUBJAREA(${ this.area() })` 
			return super.request().replace( '{request}', request )
		}

		@ $mol_mem
		help() {
			return {
				sciencedirect: 'https://dev.elsevier.com/tips/ScienceDirectQueryTips.htm',
				scopus: 'https://schema.elsevier.com/dtds/document/bkapi/search/SCOPUSSearchTips.htm',
			}[ this.service() ] ?? ''
		}

		@ $mol_action
		search() {
			this.$.$mol_state_arg.go({
				area: this.area(),
				query: this.query_changed(),
				open: this.open().toString(),
			})
		}

		@ $mol_mem
		data() {
			return this.$.$hyoo_science_elsevier_search( this.service(), this.request() )
		}

		@ $mol_mem
		found_rows() {
			return this.data().article.map( (_,i)=> this.Found_row( i ) )
		}

		found_open( index: number ) {
			return this.data().article[ index ].open
		}
		
		found_title( index: number ) {
			return this.data().article[ index ].title
		}
		
		found_link( index: number ) {
			return this.data().article[ index ].link
		}
		
		found_date( index: number ) {
			return this.data().article[ index ].date
		}
		
		found_journal( index: number ) {
			return this.data().article[ index ].journal
		}
		
	}
}
