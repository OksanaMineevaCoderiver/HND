export default function dropDown() {
	$('.js-drop-down').click(function(){
		$('.js-drop-down').removeClass('is-active')
		$(this).addClass('is-active')
		let data = $(this).attr('data-drop-down')
		$('.nav__item-drop[data-drop-down="'+data+'"]').addClass('is-active')
	})

	$('.js-small-drop-down').click(function(){
		if ($('.js-small-drop-down').hasClass('is-active')) {
			$('.js-small-drop-down').removeClass('is-active')
			$('.small-menu__item-drop').removeClass('is-active')
		} else {
			
			$(this).addClass('is-active')
			let data = $(this).attr('data-small-drop-down')
			$('.small-menu__item-drop[data-small-drop-down="'+data+'"]').addClass('is-active')
		}
	})

	$(document).click(e => {
		console.log(e)
		if (!$('.js-drop-down').has(e.target).length) {
			$('.nav__item-drop').removeClass('is-active');
			$('.js-drop-down').removeClass('is-active')
	}
	});

}