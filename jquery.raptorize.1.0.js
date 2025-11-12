/*
 * jQuery Raptorize Plugin 1.0
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

( function ( $ ) {
	$.fn.raptorize = function ( options ) {
		// Yo' defaults.
		var defaults = {
			enterOn: 'click', // Timer, konami-code, click.
			delayTime: 5000, // Time before raptor attacks on timer mode.
		};

		// Extend those options.
		var options = $.extend( defaults, options );

		return this.each( function () {
			var _this = $( this );
			var audioSupported = true;

			// Raptor Vars.
			var raptorImageMarkup = `<img id="elRaptor" style="display: none" src="${ raptorize.pluginsUrl }/raptor.png" />`;
			var raptorAudioMarkup = `<audio id="elRaptorShriek" preload="auto"><source src="${ raptorize.pluginsUrl }/raptor-sound.mp3" /><source src="${ raptorize.pluginsUrl }/raptor-sound.ogg" /></audio>`;
			var locked = false;

			// Append Raptor and style.
			$( 'body' ).append( raptorImageMarkup );
			if ( audioSupported ) {
				$( 'body' ).append( raptorAudioMarkup );
			}
			var raptor = $( '#elRaptor' ).css( {
				position: 'fixed',
				bottom: '-700px',
				right: '0',
				display: 'block',
			} );

			// Animating code
			function init() {
				locked = true;

				// Sound hilarity
				if ( audioSupported ) {
					function playSound() {
						document.getElementById( 'elRaptorShriek' ).play();
					}
					playSound();
				}

				// Movement hilarity
				raptor.animate(
					{
						bottom: '0',
					},
					function () {
						$( this ).animate(
							{
								bottom: '-130px',
							},
							100,
							function () {
								var offset = $( this ).position().left + 400;
								$( this )
									.delay( 300 )
									.animate(
										{
											right: offset,
										},
										2200,
										function () {
											raptor = $( '#elRaptor' ).css( {
												bottom: '-700px',
												right: '0',
											} );
											locked = false;
										}
									);
							}
						);
					}
				);
			}

			// Determine entrance
			if ( options.enterOn == 'timer' ) {
				setTimeout( init, options.delayTime );
			} else if ( options.enterOn == 'click' ) {
				_this.on( 'click', function ( e ) {
					e.preventDefault();
					if ( ! locked ) {
						init();
					}
				} );
			} else if ( options.enterOn == 'konami-code' ) {
				var kkeys = [],
					konami = '38,38,40,40,37,39,37,39,66,65';
				$( window ).on(
					'keydown.raptorz',
					function ( e ) {
						kkeys.push( e.keyCode );
						if ( kkeys.toString().indexOf( konami ) >= 0 ) {
							init();
							$( window ).off( 'keydown.raptorz' );
						}
					}
				);
			}
		} );
	};
} )( jQuery );
