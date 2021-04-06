<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wp-vue' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'SQ(~Ax8`JQx0^L<s7Bge#trDuw8@0iXZxBm?#hA}I3RST#&+ea|KR<kU#Y-6q.%2' );
define( 'SECURE_AUTH_KEY',  'tl%>kv):]h-&O}dVjFtj{3g)?hriW? kMkr&l{;o`d(*$INidQ^4Y>5~&.!jZcD@' );
define( 'LOGGED_IN_KEY',    '>7Z)[hn3xj?q3zQ#k*Xp=~+{GDfM?{`qSA!Kl9f=!kzjgy,$7=[H:aNIt!hmg|ux' );
define( 'NONCE_KEY',        'V7t$c:#Q8gk}k^=VOHTT=bd4Z<7n`v,k$w03CAF[}0MnW3b/7N^An|FllSf$msya' );
define( 'AUTH_SALT',        '@O)wNffL}XuHY:0%7MLUf((.0mF=IP/860i. cse6aedA[@iK37}}I/uT~[i-[m~' );
define( 'SECURE_AUTH_SALT', 'h_7B*R5D4^|F3eSduf&4:Amz|+k.KihuP  OzC#2WI=h.6nQLcM !o,X~XBSAOx ' );
define( 'LOGGED_IN_SALT',   'n0)9jEi|20BvCp6gd=AFJOS&XW1$UHtS3Rg0f*K]Zn+6R{WlZ{=z};<1;;pGrgQb' );
define( 'NONCE_SALT',       'F`Hs]D;c;)]=Q/~]gr soZM,4c4Py72xhs=Z=6+sWS~J^u.r#VPfoY:9F3QG^tZk' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
