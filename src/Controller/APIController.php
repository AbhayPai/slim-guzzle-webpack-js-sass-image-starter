<?php

namespace App\Controller;

use App\Controller\BaseController;

class APIController extends BaseController
{
    public function status($request, $response)
    {
        return $response->withJson(
            [
                'status' => !empty($this->getPosts()) ? 200 : 400,
            ]
        );
    }

    public function posts($request, $response)
    {
        return $response->withJson($this->getPosts());
    }

    protected function getPosts()
    {
        $data   = [];
        $result = [];
        try {
            $client = $this->container->get('guzzleHttp')(
                [
                    'base_uri'        => 'https://jsonplaceholder.typicode.com/',
                    'timeout'         => 2.0,
                    'connect_timeout' => 5.0,
                ]
            );

            $result = $client->request('GET', 'posts');

            if ($result->getStatusCode() === 200) {
                $data = json_decode($result->getBody());
            }
        } catch (Exception $e) {
            $data['error'] = $e->getMessage();
        }

        return $data;
    }
}
