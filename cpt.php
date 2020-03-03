<?php // Register Custom Post Type
function education_method() {

    $labels = array(
        'name'                  => _x( 'Education Methods', 'Post Type General Name', 'website' ),
        'singular_name'         => _x( 'Education Method', 'Post Type Singular Name', 'website' ),
        'menu_name'             => __( 'Education Methods', 'website' ),
        'name_admin_bar'        => __( 'Education Methods', 'website' ),
        'archives'              => __( 'Education Methods Archives', 'website' ),
        'attributes'            => __( 'Education Methods Attributes', 'website' ),
        'parent_item_colon'     => __( 'Parent Education Method:', 'website' ),
        'all_items'             => __( 'All Education Methods', 'website' ),
        'add_new_item'          => __( 'Add New Education Method', 'website' ),
        'add_new'               => __( 'Add New', 'website' ),
        'new_item'              => __( 'New Education Method', 'website' ),
        'edit_item'             => __( 'Edit Education Method', 'website' ),
        'update_item'           => __( 'Update Education Method', 'website' ),
        'view_item'             => __( 'View Education Method', 'website' ),
        'view_items'            => __( 'View Education Methods', 'website' ),
        'search_items'          => __( 'Search Education Methods', 'website' ),
        'not_found'             => __( 'Not found', 'website' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'website' ),
        'featured_image'        => __( 'Featured Image', 'website' ),
        'set_featured_image'    => __( 'Set featured image', 'website' ),
        'remove_featured_image' => __( 'Remove featured image', 'website' ),
        'use_featured_image'    => __( 'Use as featured image', 'website' ),
        'insert_into_item'      => __( 'Insert into Education Method', 'website' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Education Method', 'website' ),
        'items_list'            => __( 'Education Methods list', 'website' ),
        'items_list_navigation' => __( 'Education Methods list navigation', 'website' ),
        'filter_items_list'     => __( 'Filter Education Methods list', 'website' ),
    );
    $args = array(
        'label'                 => __( 'Education Methods', 'website' ),
        'description'           => __( 'Education Methods part of The Website' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
        'taxonomies'            => array( 'method_cat' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 7,
        'menu_icon'             => 'dashicons-book-alt',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true, 
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
    ); 
    register_post_type( 'education_method', $args );

}
add_action( 'init', 'education_method', 0 );

function method_cat() {
  // create a new taxonomy
  register_taxonomy(
      'method_cat',
      'education_method',
      array(
          'label' => __( 'Method Categories' ),
          
      )
  );
}
add_action( 'init', 'method_cat' );
 

function faq() {

  $labels = array(
      'name'                  => _x( 'FAQs', 'Post Type General Name', 'website' ),
      'singular_name'         => _x( 'FAQ', 'Post Type Singular Name', 'website' ),
      'menu_name'             => __( 'FAQs', 'website' ),
      'name_admin_bar'        => __( 'FAQs', 'website' ),
      'archives'              => __( 'FAQs Archives', 'website' ),
      'attributes'            => __( 'FAQs Attributes', 'website' ),
      'parent_item_colon'     => __( 'Parent FAQ:', 'website' ),
      'all_items'             => __( 'All FAQs', 'website' ),
      'add_new_item'          => __( 'Add New FAQ', 'website' ),
      'add_new'               => __( 'Add New', 'website' ),
      'new_item'              => __( 'New FAQ', 'website' ),
      'edit_item'             => __( 'Edit FAQ', 'website' ),
      'update_item'           => __( 'Update FAQ', 'website' ),
      'view_item'             => __( 'View FAQ', 'website' ),
      'view_items'            => __( 'View FAQs', 'website' ),
      'search_items'          => __( 'Search FAQs', 'website' ),
      'not_found'             => __( 'Not found', 'website' ),
      'not_found_in_trash'    => __( 'Not found in Trash', 'website' ),
      'featured_image'        => __( 'Featured Image', 'website' ),
      'set_featured_image'    => __( 'Set featured image', 'website' ),
      'remove_featured_image' => __( 'Remove featured image', 'website' ),
      'use_featured_image'    => __( 'Use as featured image', 'website' ),
      'insert_into_item'      => __( 'Insert into FAQ', 'website' ),
      'uploaded_to_this_item' => __( 'Uploaded to this FAQ', 'website' ),
      'items_list'            => __( 'FAQs list', 'website' ),
      'items_list_navigation' => __( 'FAQs list navigation', 'website' ),
      'filter_items_list'     => __( 'Filter FAQs list', 'website' ),
  );
  $args = array(
      'label'                 => __( 'FAQs', 'website' ),
      'description'           => __( 'FAQs part of The Website' ),
      'labels'                => $labels,
      'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
      'taxonomies'          => array( 'faq_cat' ),
      'hierarchical'          => false,
      'public'                => true,
      'show_ui'               => true,
      'show_in_menu'          => true,
      'menu_position'         => 8,
      'menu_icon'             => 'dashicons-format-chat',
      'show_in_admin_bar'     => true,
      'show_in_nav_menus'     => true,
      'can_export'            => true, 
      'has_archive'           => true,
      'exclude_from_search'   => false,
      'publicly_queryable'    => true,
      'capability_type'       => 'page',
  ); 
  register_post_type( 'faq', $args );
  
  }
  add_action( 'init', 'faq', 0 );


function faq_cat() {
  // create a new taxonomy
  register_taxonomy(
      'faq_cat',
      'faq',
      array(
          'label' => __( 'FAQ Categories' ),
          
      )
  );
}
add_action( 'init', 'faq_cat' );



// function stories() {

//   $labels = array(
//       'name'                  => _x( 'Stories', 'Post Type General Name', 'website' ),
//       'singular_name'         => _x( 'Story', 'Post Type Singular Name', 'website' ),
//       'menu_name'             => __( 'Stories', 'website' ),
//       'name_admin_bar'        => __( 'Stories', 'website' ),
//       'archives'              => __( 'Stories Archives', 'website' ),
//       'attributes'            => __( 'Stories Attributes', 'website' ),
//       'parent_item_colon'     => __( 'Parent Story:', 'website' ),
//       'all_items'             => __( 'All Stories', 'website' ),
//       'add_new_item'          => __( 'Add New Story', 'website' ),
//       'add_new'               => __( 'Add New', 'website' ),
//       'new_item'              => __( 'New Story', 'website' ),
//       'edit_item'             => __( 'Edit Story', 'website' ),
//       'update_item'           => __( 'Update Story', 'website' ),
//       'view_item'             => __( 'View Story', 'website' ),
//       'view_items'            => __( 'View Stories', 'website' ),
//       'search_items'          => __( 'Search Stories', 'website' ),
//       'not_found'             => __( 'Not found', 'website' ),
//       'not_found_in_trash'    => __( 'Not found in Trash', 'website' ),
//       'featured_image'        => __( 'Featured Image', 'website' ),
//       'set_featured_image'    => __( 'Set featured image', 'website' ),
//       'remove_featured_image' => __( 'Remove featured image', 'website' ),
//       'use_featured_image'    => __( 'Use as featured image', 'website' ),
//       'insert_into_item'      => __( 'Insert into Story', 'website' ),
//       'uploaded_to_this_item' => __( 'Uploaded to this Story', 'website' ),
//       'items_list'            => __( 'Stories list', 'website' ),
//       'items_list_navigation' => __( 'Stories list navigation', 'website' ),
//       'filter_items_list'     => __( 'Filter Stories list', 'website' ),
//   );
//   $args = array(
//       'label'                 => __( 'Stories', 'website' ),
//       'description'           => __( 'Stories part of The Website' ),
//       'labels'                => $labels,
//       'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
//       'taxonomies'          => array( 'faq_cat' ),
//       'hierarchical'          => false,
//       'public'                => true,
//       'show_ui'               => true,
//       'show_in_menu'          => true,
//       'menu_position'         => 8,
//       'menu_icon'             => 'dashicons-format-status',
//       'show_in_admin_bar'     => true,
//       'show_in_nav_menus'     => true,
//       'can_export'            => true, 
//       'has_archive'           => true,
//       'exclude_from_search'   => false,
//       'publicly_queryable'    => true,
//       'capability_type'       => 'page',
//   ); 
//   register_post_type( 'stories', $args );
  
//   }
//   add_action( 'init', 'stories', 0 );
?>