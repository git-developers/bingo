<?php

namespace App\Controller;

use App\Entity\Game;
use App\Form\GameType;
use App\Repository\GameRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/gameuser")
 * @IsGranted("ROLE_TIANOS")
 */
class GameUserController extends AbstractController
{
    /**
     * @Route("/", name="game_user_index", methods={"GET"})
     */
    public function index(GameRepository $gameRepository): Response
    {
        return $this->render('game_user/index.html.twig', [
            'games' => $gameRepository->findAllByStatus(Game::STATUS_OPEN),
        ]);
    }

    // https://gist.github.com/oelna/60e6a1e59fe89fccff1e93791e3a086b
    /**
     * @Route("/participate/{id}", name="game_user_participate", methods={"GET"})
     */
    public function participate(GameRepository $gameRepository, $id): Response
    {

        $game = $gameRepository->find($id);

        /*
        DEFINE('BR', "<br />\n");

        $bingo_cards = $this->getBingoCards($game->getMaxCard());

        foreach($bingo_cards as $card) {

            for($k=0; $k<(sizeof($card)/5); $k++) {

                echo(str_pad($card[$k], 2, ' ', STR_PAD_LEFT).' | ');
                echo($card[$k+5].' | ');
                echo($card[$k+10].' | ');
                echo($card[$k+15].' | ');
                echo($card[$k+20].BR);
                if($k < 4) echo(str_repeat('-', 22).BR);
            }
            echo(BR.BR);
        }

        exit;
        */




        return $this->render('game_user/participate.html.twig', [
            'id' => $id,
            'bingoCards' => $this->getBingoCards($game->getMaxCard()),
        ]);
    }

    public function getBingoCards($numberOfCards): array
    {
        $columns = array(
            range(1,15),
            range(16,30),
            range(31,45),
            range(46,60),
            range(61,75)
        );

        $bingoCards = [];
        $cardHashes = [];
        $i = 0;

        while ($i < $numberOfCards) {
            $bingoCard = [];

            for ($j = 0; $j < 5; $j++) {
                $randomKeys = array_rand($columns[$j], 5);
                $randomValues = array_intersect_key($columns[$j], array_flip($randomKeys));
                $bingoCard = array_merge($bingoCard, $randomValues);
            }

            $cardHash = md5(json_encode($bingoCard));

            if(!in_array($cardHash, $cardHashes)) {
                $bingoCards[] = $bingoCard;
                $cardHashes[] = $cardHash;
                $i += 1;
            }
        }

        $out = [];
        foreach ($bingoCards as $key => $value) {
            $out[] = array_chunk($value, 5);
        }

        return $out;
    }
}
