import $ from 'jquery';

export default function scrollToElement() {
    const $trigger = $('.js-scroll');
    let offset = $(window).width() > 768 ? 150 : 0;

    $trigger.on('click', (e) => {
    	e.preventDefault();

    	// if menu item is clicked, close menu first
    	if($(e.currentTarget).closest('li').hasClass('header__menu-item')) {
    		$('#js-toggle-menu').click();
    	}

    	let $target = $($(e.currentTarget).attr('href'));
        if($target != '') {
        	$('html, body').stop().animate({ scrollTop: $target.offset().top - offset }, 1000);
        }
    });
}