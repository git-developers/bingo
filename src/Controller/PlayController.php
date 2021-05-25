<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/play")
 * @IsGranted("ROLE_TIANOS")
 */
class PlayController extends AbstractController
{
    /**
     * @Route("/", name="play_index", methods={"GET"})
     */
    public function index()
    {
        $playBoard = [
            "B" => [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            "I" => [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
            "N" => [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
            "G" => [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
            "O" => [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
        ];
        
        return $this->render('play/index.html.twig', [
            'controller_name' => 'PlayController',
            'play_board' => $playBoard,
        ]);
    }
}
