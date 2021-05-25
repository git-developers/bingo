<?php

namespace App\Controller;

use App\Entity\CardPattern;
use App\Form\CardPatternType;
use App\Repository\CardPatternRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/card_pattern")
 */
class CardPatternController extends AbstractController
{
    /**
     * @Route("/", name="card_pattern_index", methods={"GET"})
     */
    public function index(CardPatternRepository $cardPatternRepository): Response
    {
        return $this->render('card_pattern/index.html.twig', [
            'card_patterns' => $cardPatternRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="card_pattern_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $cardPattern = new CardPattern();
        $form = $this->createForm(CardPatternType::class, $cardPattern);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($cardPattern);
            $entityManager->flush();

            return $this->redirectToRoute('card_pattern_index');
        }

        return $this->render('card_pattern/new.html.twig', [
            'card_pattern' => $cardPattern,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="card_pattern_show", methods={"GET"})
     */
    public function show(CardPattern $cardPattern): Response
    {
        return $this->render('card_pattern/show.html.twig', [
            'card_pattern' => $cardPattern,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="card_pattern_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, CardPattern $cardPattern): Response
    {
        $form = $this->createForm(CardPatternType::class, $cardPattern);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('card_pattern_index');
        }

        return $this->render('card_pattern/edit.html.twig', [
            'card_pattern' => $cardPattern,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="card_pattern_delete", methods={"DELETE"})
     */
    public function delete(Request $request, CardPattern $cardPattern): Response
    {
        if ($this->isCsrfTokenValid('delete'.$cardPattern->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($cardPattern);
            $entityManager->flush();
        }

        return $this->redirectToRoute('card_pattern_index');
    }
}
