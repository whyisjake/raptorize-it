<?php
/**
 * Plugin Name: Raptorize It
 * Plugin URI: http://jakespurlock.com/wordpress/raptor
 * Description: You're sitting at your desk, coding up a 500 page site, knee-deep in Extreme Cheddar Doritos sipping on a liter of Code Red Mountain Dew when you realize...this page would be so much more awesome with a VELOCIRAPTOR. You immediately scramble home to grab your Jurassic Park DVDs so can screencap a Velociraptor attack, but then you realize how hard it would be to make an awesome raptor run across the site you were coding. Plus, how are you going to get that trademark velociraptor screech?
 * Version: 1.0.0
 * Requires at least: 5.0
 * Requires PHP: 7.0
 * Author: Jake Spurlock
 * Author URI: http://jakespurlock.com/
 * License: MIT
 * Text Domain: raptorize-it
 * Domain Path: /languages
 *
 * @package Raptorize_It
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'wp_enqueue_scripts', 'raptor_me' );

/**
 * Enqueue the raptorize script and styles.
 */
function raptor_me() {
	wp_enqueue_script(
		'raptorize',
		plugins_url( 'jquery.raptorize.1.0.js', __FILE__ ),
		array( 'jquery' ),
		'1.0.0',
		true
	);

	wp_localize_script(
		'raptorize',
		'raptorize',
		array(
			'pluginsUrl' => plugins_url( '', __FILE__ ),
		)
	);

	// Add inline script to initialize raptorize.
	$inline_script = "
		jQuery(document).ready(function($) {
			// For the Konami Code version
			$('body').raptorize({
				'enterOn': 'konami-code'
			});
		});
	";

	wp_add_inline_script( 'raptorize', $inline_script );
}
