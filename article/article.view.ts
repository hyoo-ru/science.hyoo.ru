namespace $.$$ {
	export class $hyoo_science_article extends $.$hyoo_science_article {
		
		open_icon() {
			return this.open() ? '📄 ' : '🔒 '
		}
		
		rank_view() {
			return this.rank() ? `🔊${ this.rank() }` : ''
		}
		
		date_view() {
			return ` ${ this.date() }`
		}
		
	}
}
