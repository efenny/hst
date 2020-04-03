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

$field = get_field_object('field_5e8697a83e596');
$context['field_options'] = $field;

Timber::render( 'pages/resources.twig', $context );