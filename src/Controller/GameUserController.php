<?php

namespace App\Controller;

use App\Entity\Game;
use App\Entity\GameUserCard;
use App\Form\GameType;
use App\Repository\GameRepository;
use App\Repository\CardRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use App\Util\CardUtil;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * @Route("/game_user")
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
    public function participate(
        GameRepository $gameRepository, CardRepository $cardRepository, SessionInterface $session, $id
    ): Response
    {

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

        return $this->render('game_user/participate.html.twig', [
            'gameId' => $id,
            'bingoCards' => $bingoCards,
        ]);
    }

    /**
     * @Route("/participate2/{id}", name="game_user_participate2", methods={"GET"})
     */
    public function participate2(
        GameRepository $gameRepository, CardRepository $cardRepository, SessionInterface $session, $id
    ): Response
    {

        $cardHashes = $session->get("card_hash");
        $game = $gameRepository->find($id);

        if (!$game) {
            throw new AccessDeniedHttpException('Game participate: AccessDenied');
        }

        $entityManager = $this->getDoctrine()->getManager();

        foreach ($cardHashes as $cardHash) {
            $o = new GameUserCard();
            $o->setGame($game);
            $o->setUser($this->getUser());
            
            $card = $cardRepository->findByCardHash($cardHash);
            $o->setCard($card);
            $entityManager->persist($o);
            $entityManager->flush();
        }

        return $this->redirectToRoute('play_index');
    }

}
