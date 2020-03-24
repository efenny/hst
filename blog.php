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
$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$args = array(
	'posts_per_page' => 6,
	'post_type' => 'post',
	'paged' => $paged
);

$context['posts'] = new Timber\PostQuery($args);
$context['cats'] = get_categories( array(
	'orderby' => 'name',
	'order'   => 'ASC'
) );

Timber::render( 'pages/blog.twig', $context );