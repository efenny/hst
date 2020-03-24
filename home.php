<?php
/**
 * Template Name: Homepage
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
	'category_name' => 'stories'
);

$context['stories'] = new Timber\PostQuery($args);
Timber::render( 'index.twig', $context );