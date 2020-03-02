import $ from 'jquery';
import CircleType from 'circletype';

export default function curvedText() {
    let $text = $('.js-curved-text');

    $text.each((index, value) => {
        const circleType = new CircleType(value);
        let rad = $(value).data('radius');

        circleType.radius(rad);
        circleType.forceWidth(true);
    });
}