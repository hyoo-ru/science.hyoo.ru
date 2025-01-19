namespace $.$$ {
	export class $hyoo_science_details extends $.$hyoo_science_details {
		
		@ $mol_mem
		data() {
			return this.$.$hyoo_science_crossref_details( this.doi() )
		}

		@ $mol_mem
		title() {
			const { title, title_sub } = this.data()
			return title + ( title_sub ? ': ' + title_sub : '' )
		}
		
		rank_view() {
			return `「${ this.data().rank }」`
		}
		
		journal() {
			return this.data().journal
		}
		
		authors() {
			return this.data().authors.join( ', ')
		}

		abstract() {
			return this.data().abstract || super.abstract()
		}

		link() {
			return this.data().link
		}

		published() {
			return this.data().published?.toString() ?? super.published()
		}

		print_location() {
			return this.data().print_location
		}

		@ $mol_mem
		cite() {
			return `${ this.authors() }, "${ this.title() }", ${ this.journal() }, ${ this.print_location() }, ${ this.link() }`
		}
		
	}
}
