<?php

namespace App\Controller;

use App\Controller\BaseController;

class IndexController extends BaseController
{
    public function __invoke($request, $response)
    {
        $data = [
            'pagetitle' => 'API List',
            'content'   => 'API is Working',
        ];

        return $this->view->render($response, 'index.html.twig', $data);
    }
}
