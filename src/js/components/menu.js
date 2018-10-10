export default function menu() {
	$('.js-menu, .js-menu-close').click(function(){
		$('.small-menu').toggleClass('is-active')
	})
}