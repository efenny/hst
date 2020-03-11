<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */

$templates = array('pages/education-methods.twig', 'archive.twig', 'index.twig' );
$context = Timber::context();
$context['posts'] = new Timber\PostQuery();

$args = array(
  'posts_per_page' => -1,
  'post_type' => 'education_methods',
);

$context['education_methods'] = new Timber\PostQuery($args);

Timber::render( $templates, $context );
