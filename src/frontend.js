/**
 * Frontend JavaScript for Raptorize blocks
 */
( function () {
	// Wait for DOM and jQuery to be ready
	document.addEventListener( 'DOMContentLoaded', function () {
		if ( typeof jQuery === 'undefined' || typeof jQuery.fn.raptorize === 'undefined' ) {
			return;
		}

		const $ = jQuery;

		// Handle raptorize button clicks
		$( '.raptorize-button' ).on( 'click', function ( e ) {
			e.preventDefault();
			$( this ).raptorize( {
				enterOn: 'click',
			} );
			// Trigger immediately since we're already clicked
			$( this ).trigger( 'click.raptorize' );
		} );
	} );
} )();
