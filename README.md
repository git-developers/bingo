LOCALHOST FRONTEND
* http://localhost/bingo/public/

LOCALHOST BACKEND
* http://localhost/bingo/public/index.php/backend
* http://localhost/bingo/public/index.php/user_api/login/60ab2f80c706e


WEBPACK
* https://symfony.com/doc/current/frontend/encore/simple-example.html
POLLO@DESKTOP-NDEREUT MINGW64 /c/xampp/htdocs/bingo
$ yarn add --dev @symfony/webpack-encore
$ yarn encore dev --watch

CopyWebpackPlugin
-----------------
yarn upgrade
yarn add copy-webpack-plugin
https://hugo-soltys.com/blog/how-to-handle-image-assets-with-symfony-4


Images Encore
* https://io.serendipityhq.com/experience/managing-static-images-webpack-encore/
* https://symfonycasts.com/screencast/webpack-encore/copy-files

JQUERY
* https://symfony.com/doc/current/frontend/encore/legacy-applications.html

Permission denied
* php composer.phar require symfony/apache-pack

Fontawesome
* https://fontawesome.com/v4.7.0/icons

Migrations
* https://symfony.com/doc/master/doctrine.html
* php bin/console make:migration

* Step 1: php bin/console doctrine:database:create
* Step 2: php bin/console doctrine:migrations:diff --no-interaction
* Step 3: php bin/console doctrine:migrations:migrate --no-interaction

Maker entity
* php bin/console make:entity
* php bin/console make:entity --regenerate

How to Generate Entities from an Existing Database
* https://symfony.com/doc/current/doctrine/reverse_engineering.html
* php bin/console doctrine:mapping:import "App\Entity" annotation --path=src/Entity
* php bin/console make:entity --regenerate App

Form - create form based on entity
* php bin/console make:form

Crud - create controller based on entity
* php bin/console make:crud

Clear cache
* php bin/console cache:clear --no-warmup --env=dev

DatabaseActivitySubscriber
* https://symfony.com/doc/current/doctrine/events.html

Query
* https://symfony.com/doc/current/doctrine.html

Loading Fixtures
* https://symfony.com/doc/master/bundles/DoctrineFixturesBundle/index.html
* php bin/console doctrine:fixtures:load --no-interaction

Form
* https://ourcodeworld.com/articles/read/221/creating-a-simple-contact-form-with-formtype-in-symfony-3

Login
* http://localhost/bingo/public/index.php/user_api/login/tianos_admin

Example
* https://letsplaybingo.io/