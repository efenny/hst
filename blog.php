<?php
/**
 * Template Name: Blog
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();
$args = array(
	'posts_per_page' => 6,
	'post_type' => 'post',
);

$context['posts'] = new Timber\PostQuery($args);

Timber::render( 'pages/blog.twig', $context );