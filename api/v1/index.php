<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include '../../incorporate/db_connect.php';
include '../../incorporate/functions.php';
include '../../incorporate/queryintojson.php';
include '../Mandrill.php';

sec_session_start();
date_default_timezone_set('America/Mexico_City');
setlocale(LC_MONETARY, 'en_US');

/**
 *
 * [Initial V 1.0]
 *
 */
require '../Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim(array(
    'mode' => 'development',
    'cookies.httponly' => true
));


// Only invoked if mode is "production"
$app->configureMode('production', function () use ($app) {
    $app->config(array(
        'log.enable' => true,
        'debug' => false
    ));
});

// Only invoked if mode is "development"
$app->configureMode('development', function () use ($app) {
    $app->config(array(
        'log.enable' => false,
        'debug' => true
    ));
});


/**
 * [Routes Deep V 1.0]
 */


// POST route


// INSERT
$app->post('/new/table', /*'mw1',*/ 'addTable');

// UPDATE
$app->post('/set/table/:idTable', /*'mw1',*/ 'setTable');


// GET route

// SELECT
$app->get('/get/table', /*'mw1',*/ 'getTable');

// DELETE
$app->get('/del/table/:idTable', /*'mw1',*/ 'delTable');


// SINGLE PROJECTS
//$app->get('/get/portfolio', /*'mw1',*/ 'getProjects');
//$app->get('/get/portfolio/:id_project', /*'mw1',*/ 'getProjectsByProject');

$app->run();


//TEST

function getTest() {
    $today = date('o-m-d H:i:s');
    $array = array('date' => $today);
    echo changeArrayIntoJSON('propa', $array);
}

function postTest() {
    $array = array('process' => 'ok');
    //echo changeArrayIntoJSON('propa', $array);
    echo "string";
}


/*
  ----------------------------------------------------------------------------
  General Helper Methods
  ----------------------------------------------------------------------------
 */


function requestBody() {
    $app = \Slim\Slim::getInstance();
    $request = $app->request();
    return json_decode($request->getBody());
}

function mw1() {
    $app = \Slim\Slim::getInstance();
    $db = getConnection();
    if (login_check($db) == true) {
        return true;
    } else {
        $app->halt(401, 'Token Requerido');
    }
}


/*
  ----------------------------------------------------------------------------
  General Post Methods
  ----------------------------------------------------------------------------
*/


    // INSERT


    function addTable() {
        $property = requestBody();
        $sql = "INSERT INTO proTable(TAB_Field)
                VALUES(:field)";
        $structure = array();
        $params = array(
            'field' => trim($property->field),
        );
        echo changeQueryIntoJSON('propa', $structure, getConnection(), $sql, $params, 1, PDO::FETCH_ASSOC);
    }

    // UPDATE

    function setTable($idTable) {
        $property = requestBody();
        $sql = "UPDATE proTable
                SET TAB_Field = :field
                WHERE TAB_Id = :tabId";
        $structure = array();
        $params = array(
            'tabId' => $idTable,
            'field' => trim($property->field)
        );
        echo changeQueryIntoJSON('propa', $structure, getConnection(), $sql, $params, 2, PDO::FETCH_ASSOC);
    }


/*
  ----------------------------------------------------------------------------
  General Get Methods
  ----------------------------------------------------------------------------
*/

    // JSON
    /*function getProjects() {
        $structure = array(
            'id' => '1',
            'nombre' => 'Ford CAVSA',
            'descripcion' => 'Ford CAVSA es una de las principales concesionarias Ford en Jalisco, Medigraf los apoya para que esto tambien se vea reflejado en internet, posicion&aacute;ndolos en las b&uacute;squedas y generando mayor engagement en Redes Sociales, estos son algunos de los servicios proporcionados:',
            'servicios' => array(
                'ads' => 'Ads (Facebook, AdWords, Remarketing).',
                'sm' => 'Social Media'
            ),
            'sitio' => 'http://fordcavsa.mx/'
        );
        echo changeArrayIntoJSON('medigraf', $structure);
    }*/


    // SELECT

    function getTable() {
        $sql = "SELECT * FROM proTable tab";
        $structure = array(
            'alias' => 'TAB_Field'
        );
        $params = array();
        echo changeQueryIntoJSON('propa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }


    // DELETE

    function delTable($idTable) {
        $sql = "DELETE FROM proTable WHERE TAB_Id = :tabId";
        $structure = array();
        $params = array(
            'tabId' => $idTable
        );
        echo changeQueryIntoJSON('propa', $structure, getConnection(), $sql, $params, 3, PDO::FETCH_ASSOC);
    }
