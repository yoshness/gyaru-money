import $ from 'jquery';

export default function heroAnimation() {
    const IS_SHOWN = 'is-shown',
          $heroWrapper = $('#js-hero'),
          $heroDecors = $('#js-hero-decors'),
          $heroLogo = $('#js-hero-logo'),
          $heroTitle = $('#js-hero-title'),
          $heroCurved = $('#js-hero-curved'),
          $heroSupport = $('#js-hero-support');

    // fade-in-up on scroll
    $(window).on('load', () => {
        $heroWrapper.addClass(IS_SHOWN).delay(1000).queue((next) => {
            $heroDecors.addClass(IS_SHOWN).delay(700).queue((next) => {
                $heroLogo.addClass(IS_SHOWN).delay(700).queue((next) => {
                    $heroTitle.addClass(IS_SHOWN).delay(700).queue((next) => {
                      $heroCurved.addClass(IS_SHOWN).delay(700).queue((next) => {
                        $heroSupport.addClass(IS_SHOWN);
                      });
                    });
                });
            });
        });
    });
}