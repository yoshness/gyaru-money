import $ from 'jquery';

export default function showOnScroll() {
    const BREAKPOINT_MOBILE = 768;
    // show element on scroll
    $(window).on('load, scroll', () => {
        $('.js-show').each((i, e) => {
        	let target = e, offset = 0;
            
        	if($(target).data('offset') != undefined) {
        		offset = $(target).data('offset');
    	    }
        	else {
        		offset = 200;
        	}

            let top_of_object = $(target).offset().top + offset;
            let bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > top_of_object ){
                $(target).addClass('is-shown');
            }
        }); 
    });
}