<?php
/**
 * Plugin Name: Raptorize It
 * Plugin URI: http://jakespurlock.com/wordpress/raptor
 * Description: You're sitting at your desk, coding up a 500 page site, knee-deep in Extreme Cheddar Doritos sipping on a liter of Code Red Mountain Dew when you realize...this page would be so much more awesome with a VELOCIRAPTOR. You immediately scramble home to grab your Jurassic Park DVDs so can screencap a Velociraptor attack, but then you realize how hard it would be to make an awesome raptor run across the site you were coding. Plus, how are you going to get that trademark velociraptor screech?
 * Version: 1.1.2
 * Requires at least: 5.0
 * Requires PHP: 8.0
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

add_action( 'init', 'raptorize_register_blocks' );
add_action( 'wp_enqueue_scripts', 'raptorize_enqueue_scripts' );

/**
 * Register Gutenberg blocks.
 */
function raptorize_register_blocks() {
	// Get asset file for editor script dependencies.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	// Register block editor script.
	wp_register_script(
		'raptorize-blocks-editor',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	// Register block editor styles.
	wp_register_style(
		'raptorize-blocks-editor',
		plugins_url( 'build/index.css', __FILE__ ),
		array(),
		$asset_file['version']
	);

	// Register invisible raptor block.
	register_block_type(
		__DIR__ . '/build/blocks/invisible-raptor',
		array(
			'editor_script'     => 'raptorize-blocks-editor',
			'editor_style'      => 'raptorize-blocks-editor',
			'render_callback'   => 'raptorize_render_invisible_block',
		)
	);
}

/**
 * Render callback for invisible raptor block.
 *
 * @param array $attributes Block attributes.
 * @return string
 */
function raptorize_render_invisible_block( $attributes ) {
	$enable_konami = isset( $attributes['enableKonamiCode'] ) ? $attributes['enableKonamiCode'] : true;
	$enable_timer  = isset( $attributes['enableTimer'] ) ? $attributes['enableTimer'] : false;
	$timer_delay   = isset( $attributes['timerDelay'] ) ? $attributes['timerDelay'] : 5000;

	if ( ! $enable_konami && ! $enable_timer ) {
		return '';
	}

	// Ensure the raptorize script is enqueued.
	wp_enqueue_script( 'raptorize' );

	// Add inline script via wp_footer to ensure it runs after scripts are loaded.
	add_action(
		'wp_footer',
		function () use ( $enable_konami, $enable_timer, $timer_delay ) {
			?>
			<script type="text/javascript">
			jQuery(document).ready(function($) {
				<?php if ( $enable_konami ) : ?>
				$('body').raptorize({
					'enterOn': 'konami-code'
				});
				<?php endif; ?>
				<?php if ( $enable_timer ) : ?>
				$('body').raptorize({
					'enterOn': 'timer',
					'delayTime': <?php echo intval( $timer_delay ); ?>
				});
				<?php endif; ?>
			});
			</script>
			<?php
		},
		20
	);

	return '';
}

/**
 * Enqueue the raptorize script and styles.
 */
function raptorize_enqueue_scripts() {
	// Enqueue base raptorize script.
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

	// Enqueue frontend script for buttons.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/frontend.asset.php';
	wp_enqueue_script(
		'raptorize-frontend',
		plugins_url( 'build/frontend.js', __FILE__ ),
		array_merge( array( 'jquery', 'raptorize' ), $asset_file['dependencies'] ),
		$asset_file['version'],
		true
	);
}
