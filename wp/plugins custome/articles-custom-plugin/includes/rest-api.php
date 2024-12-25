<?php
// Empêcher l'accès direct au fichier
if (!defined('ABSPATH')) {
    exit;
}

// Créer un endpoint API pour récupérer les articles
function mon_plugin_register_rest_routes() {
    register_rest_route('ah-togo/v1', '/articles/', array(
        'methods' => 'GET',
        'callback' => 'mon_plugin_get_articles',
    ));

    register_rest_route('ah-togo/v1', '/home/', array(
        'methods' => 'GET',
        'callback' => 'mon_plugin_get_home_page',
    ));

    register_rest_route('ah-togo/v1', '/dons/', array(
        'methods' => 'GET',
        'callback' => 'mon_plugin_get_don',
    ));

    register_rest_route('ah-togo/v1', '/news/', array(
        'methods' => 'GET',
        'callback' => 'mon_plugin_get_news',
    ));
}
add_action('rest_api_init', 'mon_plugin_register_rest_routes');

// Fonction pour récupérer les articles
function mon_plugin_get_articles() {
    $args = array(
        'post_type' => 'custom_article',
        'post_status' => 'publish',
        'posts_per_page' => -1,
    );

    $articles = get_posts($args);
    $data = array();

    foreach ($articles as $article) {
        preg_match('/src="([^"]+)"/', $article->post_content, $matches);

        $data[] = array(
            'id' => $article->ID,
            'title' => $article->post_title,
            'description' => $article->post_excerpt,
            'image' => $matches[1] ?? null,
        );
    }

    return $data;
}

function mon_plugin_get_home_page() {
    $args = array(
        'post_type' => 'page-acceuil-AH-Togo',
        'post_status' => 'publish',
        'posts_per_page' => -1,
    );

    $pages = get_posts($args);
    $data = array();

    foreach ($pages as $page) {
        preg_match_all('/src="([^"]+)"/', $page->post_content, $matches);

        $data[] = array(
            'id' => $page->ID,
            'title' => $page->post_title,
            'description' => $page->post_excerpt,
            'image' => $matches[1] ?? null,
        );
    }

    return $data;
}

function mon_plugin_get_don() {
    $args = array(
        'post_type' => 'page-dons-AH-Togo',
        'post_status' => 'publish',
        'posts_per_page' => -1,
    );

    $pages = get_posts($args);
    $data = array();

    foreach ($pages as $page) {
        preg_match('/src="([^"]+)"/', $page->post_content, $matches);

        $data[] = array(
            'id' => $page->ID,
            'title' => $page->post_title,
            'description' => $page->post_excerpt,
            'image' => $matches[1] ?? null,
        );
    }

    return $data;
}

function mon_plugin_get_news() {
    $args = array(
        'post_type' => 'page-actu-AH-Togo',
        'post_status' => 'publish',
        'posts_per_page' => -1,
    );

    $pages = get_posts($args);
    $data = array();

    foreach ($pages as $page) {
        preg_match_all('/src="([^"]+)"/', $page->post_content, $matches);

        $data[] = array(
            'id' => $page->ID,
            'title' => $page->post_title,
            'description' => $page->post_excerpt,
            'image' => $matches[1] ?? null,
            'dates_post' => $page->post_date,
        );
    }

    return $data;
}
