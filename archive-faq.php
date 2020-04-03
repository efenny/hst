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

$terms_array = get_terms('faq_cat');

$terms = array();


$templates = array('pages/faq.twig', 'archive.twig', 'index.twig' );
$context = Timber::context();


foreach ($terms_array as $term) {
  $terms[$term->slug] = $term->name;
}

$args = array(
  'posts_per_page' => -1,
  'post_type' => 'faq',
);

$context['faq_posts'] = new Timber\PostQuery($args);
$context['faq_terms'] = $terms;
$context['posts'] = new Timber\PostQuery();
Timber::render( $templates, $context );
