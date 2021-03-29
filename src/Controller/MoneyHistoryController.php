<?php

namespace App\Controller;

use App\Entity\MoneyHistory;
use App\Form\MoneyHistoryType;
use App\Repository\MoneyHistoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/moneyhistory")
 * @IsGranted("ROLE_TIANOS")
 */
class MoneyHistoryController extends AbstractController
{
    /**
     * @Route("/", name="money_history_index", methods={"GET"})
     */
    public function index(MoneyHistoryRepository $moneyHistoryRepository): Response
    {
        return $this->render('money_history/index.html.twig', [
            'money_histories' => $moneyHistoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="money_history_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $moneyHistory = new MoneyHistory();
        $form = $this->createForm(MoneyHistoryType::class, $moneyHistory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($moneyHistory);
            $entityManager->flush();

            return $this->redirectToRoute('money_history_index');
        }

        return $this->render('money_history/new.html.twig', [
            'money_history' => $moneyHistory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="money_history_show", methods={"GET"})
     */
    public function show(MoneyHistory $moneyHistory): Response
    {
        return $this->render('money_history/show.html.twig', [
            'money_history' => $moneyHistory,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="money_history_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, MoneyHistory $moneyHistory): Response
    {
        $form = $this->createForm(MoneyHistoryType::class, $moneyHistory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('money_history_index');
        }

        return $this->render('money_history/edit.html.twig', [
            'money_history' => $moneyHistory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="money_history_delete", methods={"DELETE"})
     */
    public function delete(Request $request, MoneyHistory $moneyHistory): Response
    {
        if ($this->isCsrfTokenValid('delete'.$moneyHistory->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($moneyHistory);
            $entityManager->flush();
        }

        return $this->redirectToRoute('money_history_index');
    }
}
