<?php

use Slim\Http\Request;
use Slim\Http\Response;

//login
$app->get('/[{name}]', function (Request $request, Response $response, array $arg){
    $this->logger->info("Slim-Skeleton '/'")
})