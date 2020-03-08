<?php
/**
 * Template Name: Getting Started
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();
Timber::render( 'pages/getting-started.twig', $context );