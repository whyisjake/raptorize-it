# Raptorize It

[![WordPress Plugin Version](https://img.shields.io/wordpress/plugin/v/raptorize-it.svg)](https://wordpress.org/plugins/raptorize-it/)
[![WordPress Plugin Downloads](https://img.shields.io/wordpress/plugin/dt/raptorize-it.svg)](https://wordpress.org/plugins/raptorize-it/)
[![WordPress Plugin Rating](https://img.shields.io/wordpress/plugin/rating/raptorize-it.svg)](https://wordpress.org/plugins/raptorize-it/)
[![Deploy to WordPress.org](https://github.com/whyisjake/raptorize-it/actions/workflows/deploy-to-wordpress-org.yml/badge.svg)](https://github.com/whyisjake/raptorize-it/actions/workflows/deploy-to-wordpress-org.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An awesome jQuery plugin that unleashes a Raptor of Jurassic proportions on your WordPress site!

## Description

You're sitting at your desk, coding up a 500 page site, knee-deep in Extreme Cheddar Doritos sipping on a liter of Code Red Mountain Dew when you realize... this page would be so much more awesome with a VELOCIRAPTOR.

## Features

- **Konami Code Activation**: Type ↑ ↑ ↓ ↓ ← → ← → B A to unleash the raptor
- **Click Activation**: Add raptor fun to any button or link
- **Timer Activation**: Automatically trigger after a set delay
- Full audio support with the classic raptor screech

## Installation

1. Upload `raptorize-it` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Visit your site and try the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)
4. Enjoy the raptor!

## Requirements

- WordPress 5.0 or higher
- PHP 8.0 or higher

## Development

### Setup

Install dependencies:

```bash
# Install PHP dependencies
composer install

# Install Node dependencies (if developing JavaScript)
npm install
```

### Linting

Run PHP CodeSniffer to check code standards:

```bash
# Check PHP code
composer lint
# or
npm run lint:php

# Auto-fix PHP code
composer format
# or
npm run format:php

# Check JavaScript code
npm run lint:js

# Check all code
npm run lint
```

### Testing

Open `index.html` in your browser to test the plugin standalone without WordPress.

## Coding Standards

This plugin follows the [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/).

PHP code is checked with:
- WordPress-Core
- WordPress-Docs
- PHPCompatibilityWP (PHP 7.0+)

## Credits

- Original jQuery plugin by [ZURB](http://zurb.com/)
- WordPress plugin by [Jake Spurlock](http://jakespurlock.com/)

## License

MIT License - Free to use under the MIT license.
