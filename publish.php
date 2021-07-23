<?php
ini_set('display_startup_errors', 1);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);
require_once ($_SERVER['DOCUMENT_ROOT'].'/../node_modules/@aliconnect/api/php/publish.php');
require_once ($_SERVER['DOCUMENT_ROOT'].'/../node_modules/@aliconnect/api/php/aim.php');
$filename = 'index.html';
$html = file_get_contents($filename);
$html = str_replace(['https://aliconnect.github.io','_debug'],['/v1',''],$html);
die($html);
