<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\GameRepository;
use App\Repository\CardRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * @Route("/api")
 */
class ApiController extends AbstractController
{
    /**
     * @Route("/", name="api")
     */
    public function index()
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    /**
     * @Route("/refresh_cards", name="api_refresh_cards", methods={"GET","POST"})
     */
    public function refreshCards(
        Request $request, GameRepository $gameRepository,
        CardRepository $cardRepository, SessionInterface $session): Response
    {

        $id = $request->get("id");
        $game = $gameRepository->find($id);

        if (!$game) {
            throw new AccessDeniedHttpException('Game participate: AccessDenied');
        }

        $cards = $cardRepository->randCardsHash($game->getMaxCard());

        $cardHash = [];
        $bingoCards = [];
        foreach ($cards as $card) {
            $cardHash[] = $card["card_hash"];
            $bingoCards[$card["card_hash"]] = json_decode($card["json"]);
        }

        $session->set("card_hash", $cardHash);

        return $this->render('api/bingo_cards.html.twig', [
            'id' => $id,
            'bingoCards' => $bingoCards,
        ]);
    }

    /**
     * @Route("/play_board", name="api_play_board", methods={"GET","POST"})
     */
    public function playBoard(
        Request $request, GameRepository $gameRepository,
        CardRepository $cardRepository, SessionInterface $session): Response
    {

        //https://medium.com/@cn007b/super-simple-php-websocket-example-ea2cd5893575
        //http://localhost/bingo/public/index.php/api/refresh_cards

        

        // Send messages into WebSocket in a loop.
        while (true) {
            sleep(1);
            $content = 'Now: ' . time();
            $response = chr(129) . chr(strlen($content)) . $content;
            socket_write($client, $response);
        }
    }
}
