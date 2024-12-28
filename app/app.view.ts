namespace $.$$ {
	export class $hyoo_science_app extends $.$hyoo_science_app {
		
		@ $mol_mem
		query() {
			return this.$.$mol_state_arg.value( 'query' ) ?? ''
		}

		@ $mol_action
		search() {
			this.$.$mol_state_arg.go({
				query: this.query_changed(),
			})
		}

		@ $mol_mem
		data() {
			return this.$.$hyoo_science_elsevier_search( this.query() )
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
			return this.data().article[ index ].uri
		}
		
		found_journal( index: number ) {
			return this.data().article[ index ].journal
		}
		
	}
}
