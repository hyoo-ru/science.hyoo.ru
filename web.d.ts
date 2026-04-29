declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $ {

	type $mol_book2_sub__1 = $mol_type_enforce<
		ReturnType< $mol_book2['pages'] >[number]
		,
		$mol_view
	>
	type $mol_book2_sub__2 = $mol_type_enforce<
		ReturnType< $mol_book2['placeholders'] >[number]
		,
		$mol_view
	>
	type $mol_view__title_mol_book2_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages_deep( ): readonly($mol_view)[]
		pages( ): ReturnType< $mol_book2['pages_deep'] >
		Placeholder( ): $mol_view
		placeholders( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): readonly($mol_view)[]
		minimal_width( ): number
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $ {

	export class $mol_follower extends $mol_ghost {
		transform( ): string
		Anchor( ): $mol_view
		align( ): readonly(number)[]
		offset( ): readonly(number)[]
		style( ): ({ 
			'transform': ReturnType< $mol_follower['transform'] >,
		})  & ReturnType< $mol_ghost['style'] >
	}
	
}

//# sourceMappingURL=follower.view.tree.d.ts.map
declare namespace $ {

	type $mol_pop_bubble__content_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	type $mol_follower__offset_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_offset'] >
		,
		ReturnType< $mol_follower['offset'] >
	>
	type $mol_follower__align_mol_pop_4 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_align'] >
		,
		ReturnType< $mol_follower['align'] >
	>
	type $mol_follower__Anchor_mol_pop_5 = $mol_type_enforce<
		ReturnType< $mol_pop['Anchor'] >
		,
		ReturnType< $mol_follower['Anchor'] >
	>
	type $mol_follower__Sub_mol_pop_6 = $mol_type_enforce<
		ReturnType< $mol_pop['Bubble'] >
		,
		ReturnType< $mol_follower['Sub'] >
	>
	export class $mol_pop extends $mol_view {
		bubble( ): any
		Anchor( ): any
		bubble_offset( ): readonly(number)[]
		bubble_align( ): readonly(number)[]
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		Follower( ): $mol_follower
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		align( ): string
		prefer( ): string
		auto( ): readonly(any)[]
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'tabindex': number,
			'popover': string,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_search_12 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_14 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_17 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__18 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_21 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__enabled_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__event_click_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_10 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_15 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		enabled( ): boolean
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
		trigger_enabled( ): ReturnType< $mol_select['enabled'] >
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_lock extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=lock.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_lock_open extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=open.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_lock_open_variant extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=variant.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_lock_open_variant_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_hint extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=hint.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_brightness_4 extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=4.view.tree.d.ts.map
declare namespace $ {

	export class $mol_lights_toggle extends $mol_check_icon {
		Lights_icon( ): $mol_icon_brightness_4
		lights( next?: boolean ): boolean
		Icon( ): ReturnType< $mol_lights_toggle['Lights_icon'] >
		hint( ): string
		checked( next?: ReturnType< $mol_lights_toggle['lights'] > ): ReturnType< $mol_lights_toggle['lights'] >
	}
	
}

//# sourceMappingURL=toggle.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_page_next extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=next.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_page_next_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_hyoo_science_article_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__needle_hyoo_science_article_2 = $mol_type_enforce<
		ReturnType< $hyoo_science_article['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_hyoo_science_article_3 = $mol_type_enforce<
		ReturnType< $hyoo_science_article['title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_hyoo_science_article_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__uri_hyoo_science_article_5 = $mol_type_enforce<
		ReturnType< $hyoo_science_article['uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_science_article_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub_hyoo_science_article_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_science_article_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__arg_hyoo_science_article_9 = $mol_type_enforce<
		({ 
			'doi': ReturnType< $hyoo_science_article['doi'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_science_article_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $hyoo_science_article extends $mol_view {
		uri( ): string
		open_icon( ): string
		Open( ): $mol_view
		highlight( ): string
		title( ): string
		Title( ): $mol_dimmer
		rank_view( ): string
		Rank( ): $mol_view
		Link( ): $mol_link
		journal_title( ): string
		Journal( ): $mol_view
		date_view( ): string
		Date( ): $mol_view
		doi( ): string | null
		Details_icon( ): $mol_icon_page_next_outline
		Details( ): $mol_link
		open( ): boolean
		date( ): $mol_time_moment | null
		rank( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=article.view.tree.d.ts.map
declare namespace $ {

	export class $mol_chip extends $mol_view {
		hint( ): string
		minimal_height( ): number
		attr( ): ({ 
			'title': ReturnType< $mol_chip['hint'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chip.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_blob__mol_button_copy_1 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__mol_button_copy_2 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {

	export class $mol_status extends $mol_view {
		message( ): string
		status( ): ReturnType< $mol_status['title'] >
		minimal_height( ): number
		minimal_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_form_field_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $ {

	type $mol_list__sub_mol_form_1 = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type __mol_form_2 = $mol_type_enforce<
		Parameters< $mol_form['submit_activate'] >[0]
		,
		Parameters< ReturnType< $mol_form['Submit'] >['activate'] >[0]
	>
	type $mol_button_major__title_mol_form_3 = $mol_type_enforce<
		ReturnType< $mol_form['submit_title'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__hint_mol_form_4 = $mol_type_enforce<
		ReturnType< $mol_form['submit_hint'] >
		,
		ReturnType< $mol_button_major['hint'] >
	>
	type $mol_button_major__click_mol_form_5 = $mol_type_enforce<
		ReturnType< $mol_form['submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_status__message_mol_form_6 = $mol_type_enforce<
		ReturnType< $mol_form['result'] >
		,
		ReturnType< $mol_status['message'] >
	>
	type $mol_row__sub_mol_form_7 = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_invalid( ): string
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		submit_title( ): string
		submit_hint( ): string
		submit_activate( next?: ReturnType< ReturnType< $mol_form['Submit'] >['activate'] > ): ReturnType< ReturnType< $mol_form['Submit'] >['activate'] >
		submit( next?: any ): any
		Submit( ): $mol_button_major
		result( next?: any ): any
		Result( ): $mol_status
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		save( next?: any ): any
		message_done( ): string
		errors( ): Record<string, string>
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $ {

	export class $mol_form_group extends $mol_view {
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_copy__hint_hyoo_science_details_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text_hyoo_science_details_2 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['cite'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_link__arg_hyoo_science_details_3 = $mol_type_enforce<
		({ 
			'doi': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_science_details_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__uri_hyoo_science_details_5 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title_hyoo_science_details_6 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['doi'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_8 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Doi'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_paragraph__title_hyoo_science_details_9 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['rank_view'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_11 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Rank'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_form_group__sub_hyoo_science_details_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_paragraph__title_hyoo_science_details_13 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['journal'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_14 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_15 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Journal'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_paragraph__title_hyoo_science_details_16 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['published'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_17 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_18 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Published'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_form_group__sub_hyoo_science_details_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_paragraph__title_hyoo_science_details_20 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['abstract'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_22 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Abstract'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_paragraph__title_hyoo_science_details_23 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['authors'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_25 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Authors'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_list__rows_hyoo_science_details_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_science_details extends $mol_page {
		cite( ): string
		Cite( ): $mol_button_copy
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		link( ): string
		doi( ): string
		Doi( ): $mol_link
		Doi_labeler( ): $mol_labeler
		rank_view( ): string
		Rank( ): $mol_paragraph
		Rank_labeler( ): $mol_labeler
		Main( ): $mol_form_group
		journal( ): string
		Journal( ): $mol_paragraph
		Journal_labeler( ): $mol_labeler
		published( ): string
		Published( ): $mol_paragraph
		Published_labeler( ): $mol_labeler
		Publication( ): $mol_form_group
		abstract( ): string
		Abstract( ): $mol_paragraph
		Abstract_labeler( ): $mol_labeler
		authors( ): string
		Authors( ): $mol_paragraph
		Authors_labeler( ): $mol_labeler
		Content( ): $mol_list
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=details.view.tree.d.ts.map
declare namespace $ {

	export class $mol_theme_auto extends $mol_plugin {
		dark( ): string
		theme( ): ReturnType< $mol_theme_auto['dark'] >
		light( ): string
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_theme_auto['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=auto.view.tree.d.ts.map
declare namespace $ {

	type $mol_search__hint_hyoo_science_app_1 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['title'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__query_hyoo_science_app_2 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['query_changed'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__submit_hyoo_science_app_3 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['search'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_select__hint_hyoo_science_app_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__dictionary_hyoo_science_app_5 = $mol_type_enforce<
		({ 
			'sciencedirect': string,
			'scopus': string,
			'crossref': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__value_hyoo_science_app_6 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['service'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__hint_hyoo_science_app_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__dictionary_hyoo_science_app_8 = $mol_type_enforce<
		({ 
			'': string,
			'AGRI': string,
			'ARTS': string,
			'BIOC': string,
			'BUSI': string,
			'CENG': string,
			'CHEM': string,
			'COMP': string,
			'DECI': string,
			'DENT': string,
			'EART': string,
			'ECON': string,
			'ENER': string,
			'ENGI': string,
			'ENVI': string,
			'HEAL': string,
			'IMMU': string,
			'MATE': string,
			'MATH': string,
			'MEDI': string,
			'NEUR': string,
			'NURS': string,
			'PHAR': string,
			'PHYS': string,
			'PSYC': string,
			'SOCI': string,
			'VETE': string,
			'MULT': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__value_hyoo_science_app_9 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['area'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__enabled_hyoo_science_app_10 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['area_supported'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_view__sub_hyoo_science_app_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_select__hint_hyoo_science_app_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__dictionary_hyoo_science_app_13 = $mol_type_enforce<
		({ 
			'': string,
			'TITLE': string,
			'TITLE-ABS-KEY': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__value_hyoo_science_app_14 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['place'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__enabled_hyoo_science_app_15 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['place_supported'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_check_icon__hint_hyoo_science_app_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon_hyoo_science_app_17 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['Open_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked_hyoo_science_app_18 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['open'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__enabled_hyoo_science_app_19 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['open_supported'] >
		,
		ReturnType< $mol_check_icon['enabled'] >
	>
	type $mol_select__hint_hyoo_science_app_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__dictionary_hyoo_science_app_21 = $mol_type_enforce<
		({ 
			'': string,
			'refs': string,
			'date': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__value_hyoo_science_app_22 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__enabled_hyoo_science_app_23 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['sort_supported'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_link__hint_hyoo_science_app_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__uri_hyoo_science_app_25 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['help'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_science_app_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link_source__uri_hyoo_science_app_27 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $hyoo_science_article__open_hyoo_science_app_28 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_open'] >
		,
		ReturnType< $hyoo_science_article['open'] >
	>
	type $hyoo_science_article__highlight_hyoo_science_app_29 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['query'] >
		,
		ReturnType< $hyoo_science_article['highlight'] >
	>
	type $hyoo_science_article__title_hyoo_science_app_30 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_title'] >
		,
		ReturnType< $hyoo_science_article['title'] >
	>
	type $hyoo_science_article__doi_hyoo_science_app_31 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_doi'] >
		,
		ReturnType< $hyoo_science_article['doi'] >
	>
	type $hyoo_science_article__uri_hyoo_science_app_32 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_link'] >
		,
		ReturnType< $hyoo_science_article['uri'] >
	>
	type $hyoo_science_article__rank_hyoo_science_app_33 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_rank'] >
		,
		ReturnType< $hyoo_science_article['rank'] >
	>
	type $hyoo_science_article__date_hyoo_science_app_34 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_date'] >
		,
		ReturnType< $hyoo_science_article['date'] >
	>
	type $hyoo_science_article__journal_title_hyoo_science_app_35 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_journal'] >
		,
		ReturnType< $hyoo_science_article['journal_title'] >
	>
	type $mol_chip__title_hyoo_science_app_36 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_list__rows_hyoo_science_app_37 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__Empty_hyoo_science_app_38 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['Found_none'] >
		,
		ReturnType< $mol_list['Empty'] >
	>
	type $mol_view__sub_hyoo_science_app_39 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page__Title_hyoo_science_app_40 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['Query'] >
		,
		ReturnType< $mol_page['Title'] >
	>
	type $mol_page__head_hyoo_science_app_41 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__tools_hyoo_science_app_42 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body_hyoo_science_app_43 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $hyoo_science_details__doi_hyoo_science_app_44 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['doi'] >
		,
		ReturnType< $hyoo_science_details['doi'] >
	>
	export class $hyoo_science_app extends $mol_book2 {
		Search_tools( ): ReturnType< ReturnType< $hyoo_science_app['Search'] >['Tools'] >
		title( ): string
		query( ): string
		query_changed( next?: ReturnType< $hyoo_science_app['query'] > ): ReturnType< $hyoo_science_app['query'] >
		search( next?: any ): any
		Query( ): $mol_search
		service( next?: string ): string
		Service( ): $mol_select
		area( next?: string ): string
		area_supported( ): boolean
		Area( ): $mol_select
		Zone( ): $mol_view
		place( next?: string ): string
		place_supported( ): boolean
		Place( ): $mol_select
		Open_icon( ): $mol_icon_lock_open_variant_outline
		open( next?: boolean ): boolean
		open_supported( ): boolean
		Open( ): $mol_check_icon
		sort( next?: string ): string
		sort_supported( ): boolean
		Sort( ): $mol_select
		help( ): string
		Help_icon( ): $mol_icon_hint
		Help( ): $mol_link
		Lights( ): $mol_lights_toggle
		Source( ): $mol_link_source
		found_open( id: any): boolean
		found_title( id: any): string
		found_doi( id: any): string | null
		found_link( id: any): string
		found_rank( id: any): number
		found_date( id: any): $mol_time_moment | null
		found_journal( id: any): string
		Found_row( id: any): $hyoo_science_article
		found_rows( ): readonly(any)[]
		Found_none( ): $mol_chip
		Found_rows( ): $mol_list
		request( ): string
		Request( ): $mol_view
		Search( ): $mol_page
		doi( ): string
		Details( ): $hyoo_science_details
		Theme( ): $mol_theme_auto
		pages( ): readonly(any)[]
		plugins( ): readonly(any)[]
		Placeholder( ): any
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map
