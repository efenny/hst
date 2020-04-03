<?php
/**
 * Template Name: Resources
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();

$field = get_field_object(get_field('tag_field_key'));
$context['field_options'] = $field;

Timber::render( 'pages/resources.twig', $context );