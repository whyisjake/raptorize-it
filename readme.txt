=== Raptorize It ===
Contributors: whyisjake
Donate link: http://jakespurlock.com/donate/
Tags: awesome, images, jquery, raptor, surprise, Konami code
Requires at least: 5.0
Requires PHP: 7.0
Tested up to: 6.7
Stable tag: 1.1.0
License: MIT
License URI: https://opensource.org/licenses/MIT

An awesome jQuery plugin that unleahes a Raptor of Jurassic proportions.

== Description ==

## We’ve all been here before...

You’re sitting at your desk, coding up a 500 page site, knee-deep in Extreme Cheddar Doritos sipping on a liter of Code Red Mountain Dew when you realize… this page would be som much more awesome with a VELOCIRAPTOR. You immediately scramble home to grab your Jurassic Park DVDs so can screencap a Velociraptor attack, but then you realize how hard it would be to make an awesome raptor run across the site you were coding. Plus, how are you going to get that trademark velociraptor screech? How about we let you in on a little secret?

### We already did it.

Well, the guys at [Zurb.com](http://zurb.com/ "Zurb.com") did it. And I made it into a WordPress plugin.

### The Options

What's that? You want to be able to control the entrance handler? You can! Raptorize can be activated on a click event (that is the default and what we have hooked up above), a timer which just fires after the page is loaded, or the legendary Konami-Code. Our personal favorite is the Konami-Code (but it only works once per page load).

Go ahead, try the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)

== Installation ==

1. Upload `raptorize-it` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Visit your site and try the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)
1. Enjoy the raptor!

== Frequently Asked Questions ==

= Is this awesome? =

Yes.

= What if I have LazyLoader running? =

This might cause the image to not show up, only unleashing the raptor scream instead.

== Screenshots ==

1. Raptor in action!

== Changelog ==

= 1.1.0 =

* Added Gutenberg blocks support
* New "Invisible Raptor" block with configurable Konami Code and Timer triggers
* New "Raptorize Button" block variation for core Button block
* Added wp-env configuration for local development
* Upgraded build toolchain to @wordpress/scripts v27 for modern Node.js compatibility
* Added automated GitHub Actions workflow for WordPress.org deployment
* Improved script enqueuing and initialization
* Fixed block registration and editor integration

= 1.0.0 =

* Modernized for current WordPress versions (5.0+)
* Replaced deprecated `WP_PLUGIN_URL` constant with `plugins_url()`
* Moved script enqueuing from `init` to `wp_enqueue_scripts` hook
* Replaced inline scripts in `wp_head` with `wp_add_inline_script()`
* Updated jQuery code to use `.on()` and `.off()` instead of deprecated `.bind()` and `.unbind()`
* Fixed hardcoded plugin paths in JavaScript
* Added proper text domain for internationalization
* Added ABSPATH security check
* Updated plugin header with modern WordPress requirements
* Changed default behavior to Konami Code activation

= 0.5.3 =

* Little bit of cleanup.

= 0.5.2 =

* Major update to WordPress 5.5

= 0.5.1 =

* Updates

= 0.5 =

* Initial release

== Upgrade Notice ==

None
