<?php

/**
 * Plugin Name: Gestion_articles_AHTOGO
 * Description: Permet la gestion du site Ah-togo
 * Version: 1.0
 * Author: Emmanuel EBERST
 */

// Empêcher l'accès direct au fichie

// Inclure les fichiers nécessaires
require_once plugin_dir_path(__FILE__) . 'includes/rest-api.php';          // API REST

add_action('template_redirect', 'redirect_root_to_admin_plugin');

function redirect_root_to_admin_plugin() {
    if (is_front_page() && !is_admin()) {
        wp_redirect(admin_url());
        exit;
    }
}

// Créer un Custom Post Type
function create_custom_article_post_type() {
    register_post_type('custom_article',
        array(
            'labels'      => array(
                'name'          => __('Artciles AHTOGO'),
                'singular_name' => __('Artciles AHTOGO'),
            ),
            'public'      => true,
            'has_archive' => true,
            'supports'    => array('title', 'editor', 'thumbnail', 'excerpt'),
        )
    );

    register_post_type('page-acceuil-AH-Togo',
        array(
            'labels'      => array(
                'name'          => __('Pages d\'accueil AHTOGO'),
                'singular_name' => __('Pages d\'accueil AHTOGO'),
            ),
            'public'      => true,
            'has_archive' => true,
            'supports'    => array('title', 'editor','thumbnail', 'excerpt'),
        )
    );

    register_post_type('page-dons-AH-Togo',
        array(
            'labels'      => array(
                'name'          => __('Pages dons AHTOGO'),
                'singular_name' => __('Pages dons AHTOGO'),
            ),
            'public'      => true,
            'has_archive' => true,
            'supports'    => array('title', 'editor','thumbnail', 'excerpt'),
        )
    );

    register_post_type('page-actu-AH-Togo',
        array(
            'labels'      => array(
                'name'          => __('Actualités AHTOGO'),
                'singular_name' => __('Actualités AHTOGO'),
            ),
            'public'      => true,
            'has_archive' => true,
            'supports'    => array('title', 'editor','thumbnail', 'excerpt'),
        )
    );
}
add_action('init', 'create_custom_article_post_type');


// Ajouter des colonnes personnalisées dans l'admin pour le CPT
function set_custom_article_columns($columns) {
    unset($columns['date']);
    $columns['image'] = __('Image');
    $columns['description'] = __('Description');
    return $columns;
}
add_filter('manage_custom_article_posts_columns', 'set_custom_article_columns');

function custom_article_column_content($column, $post_id) {
    switch ($column) {
        case 'image':
            echo get_the_post_thumbnail($post_id, array(50, 50)); // Affiche la miniature
            break;

        case 'description':
            echo get_the_excerpt($post_id); // Affiche l'extrait
            break;
    }
}
add_action('manage_custom_article_posts_custom_column', 'custom_article_column_content', 10, 2);

// Shortcode pour afficher les articles personnalisés
function custom_articles_shortcode() {
    $args = array(
        'post_type' => 'custom_article',
        'posts_per_page' => 50
    );
    $output = '<div class="custom-articles">';
    $the_query = new WP_Query($args);

    if ($the_query->have_posts()) :
        while ($the_query->have_posts()) : $the_query->the_post();
            $output .= '<div class="article">';
            $output .= '<h2>' . get_the_title() . '</h2>';
            $output .= '<div class="article-thumbnail">' . get_the_post_thumbnail(null, 'medium') . '</div>';
            $output .= '<p>' . get_the_excerpt() . '</p>';
            $output .= '</div>';
        endwhile;
        wp_reset_postdata();
    endif;

    $output .= '</div>';
    return $output;
}
add_shortcode('custom_articles', 'custom_articles_shortcode');

// Shortcode pour afficher les articles personnalisés
function custom_pages_shortcode_home_pages() {
    $args = array(
        'post_type' => 'page-AHTOOGO',
        'posts_per_page' => 50
    );
    $output = '<div class="page-AHTOOGO">';
    $the_query = new WP_Query($args);

    if ($the_query->have_posts()) :
        while ($the_query->have_posts()) : $the_query->the_post();
            $output .= '<div class="article">';
            $output .= '<h2>' . get_the_title() . '</h2>';
            $output .= '<div class="article-thumbnail">' . get_the_post_thumbnail(null, 'medium') . '</div>';
            $output .= '<p>' . get_the_excerpt() . '</p>';
            $output .= '</div>';
        endwhile;
        wp_reset_postdata();
    endif;

    $output .= '</div>';
    return $output;
}
add_shortcode('page-AHTOOGO', 'custom_pages_shortcode_home_pages');

add_filter('admin_bar_menu', 'custom_admin_visit_site_url', 100);
//Redirection en cliquant sur le logo
function custom_admin_visit_site_url($wp_admin_bar) {

    $node = $wp_admin_bar->get_node('site-name');
     // Vérifie si le nœud existe et modifie son URL
    if ($node) {
        $node->href = 'https://www.ah-togo.fr/';
        $wp_admin_bar->add_node($node); // Applique les modifications
    }
}

add_action('admin_menu', 'remove_admin_menu_items');

function remove_admin_menu_items() {
    // Supprimer "Articles"
    remove_menu_page('edit.php');

    // Supprimer "Pages"
    remove_menu_page('edit.php?post_type=page');

    // Supprimer "Commentaires"
    remove_menu_page('edit-comments.php');

    remove_menu_page('themes.php');

    remove_menu_page('options-general.php');

    remove_menu_page('tools.php');

    // Supprimer d'autres éléments si nécessaire
    // Exemple : remove_menu_page('plugins.php'); // Supprime "Extensions"
}

add_action('wp_dashboard_setup', 'remove_default_dashboard_widgets');

function remove_default_dashboard_widgets() {
    // Supprimer "Bienvenue"
    remove_action('welcome_panel', 'wp_welcome_panel');

    // Supprimer "Activité"
    remove_meta_box('dashboard_activity', 'dashboard', 'normal');

    // Supprimer "Rapide brouillon"
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');

    // Supprimer "Événements WordPress"
    remove_meta_box('dashboard_primary', 'dashboard', 'side');

    // Supprimer "Santé du site"
    remove_meta_box('dashboard_site_health', 'dashboard', 'normal');

    // Supprimer "coup d'oeil"
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
}

add_action('wp_dashboard_setup', 'add_custom_dashboard_widget');

function add_custom_dashboard_widget() {
    wp_add_dashboard_widget(
        'custom_dashboard_widget', // ID unique
        'Tableau de bord AH-Togo', // Titre
        'custom_dashboard_widget_content' // Fonction pour afficher le contenu
    );
}

function custom_dashboard_widget_content() {
    echo '<h3>Bienvenue tableau de bord AHTOGO</h3>';
    echo '<p>Voici quelques raccourcis utiles :</p>';
    echo '<ul>
            <li><a href="https://www.ah-togo.fr/">Lien du site Ah-Togo.fr</a></li>
            <li><a href="' . admin_url('edit.php?post_type=custom_article') . '">les des articles</a></li>
            <li><a href="' . admin_url('edit.php?post_type=page-actu-ah-togo') . '">les actualités</a></li>
          </ul>';
}

add_action('wp_dashboard_setup', 'rearrange_dashboard_widgets');

function rearrange_dashboard_widgets() {
    // Supprimer un widget
    remove_meta_box('dashboard_activity', 'dashboard', 'normal');

}