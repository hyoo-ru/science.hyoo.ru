namespace $.$$ {
	export class $hyoo_science_article extends $.$hyoo_science_article {
		
		open_icon() {
			return this.open() ? '📄 ' : '🔒 '
		}
		
		date_view() {
			return this.date().toString()
		}
		
	}
}
