<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserLoginType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;
use Symfony\Component\Security\Core\Authentication\Token\AnonymousToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

// https://silex.symfony.com/doc/2.0/cookbook/json_request_body.html

/**
 * @Route("/user_api")
 */
class UserApiController extends AbstractController
{

    /**
     * @Route("/new", name="user_api_new", methods={"POST"})
     */
    public function new(Request $request, UserRepository $userRepository, UserPasswordEncoderInterface $encoder): Response
    {

        if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
            $data = json_decode($request->getContent(), true);
        }

        $user = new User();
        $form = $this->createForm(UserLoginType::class, $user);

        if (!$request->isMethod('POST')) {
            return $this->json([
                'error' => 'NOT_POST'
            ]);
        }

        $form->submit($data, false);

        $errors = [];
        $userByEmail = $userRepository->loadUserByUsername($data['email']);
        $userByUsername = $userRepository->loadUserByUsername($data['username']);

        if (isset($userByEmail)) {
            $errors[] = "E-Mail adress has already been registered";
        }

        if (isset($userByUsername)) {
            $errors[] = "Username has already been registered";
        }

        foreach ($form->getErrors() as $key => $error) {
            if ($form->isRoot()) {
                $errors[$error->getOrigin()->getName()][] = $error->getMessage();
            } else {
                $errors[$error->getOrigin()->getName()] = $error->getMessage();
            }
        }

        if (count($errors) > 0) {
            return $this->json($errors);
        }

        if ($form->isSubmitted() && $form->isValid()) {

            /*
            if ($data['username'] == 'tianos_admin') {
                $user->setRoles([User::ROLE_ADMIN]);
            } else {
                $user->setRoles([User::ROLE_TIANOS]);
            }
            */
            
            $encoded = $encoder->encodePassword($user, $data['password']);
            $user->setPassword($encoded);

            $user->setRoles([User::ROLE_TIANOS]);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
        }

        return $this->json([
            'id' => $user->getId(),
        ]);
    }

    /**
     * @Route("/login/{username}", name="user_api_login", methods={"GET"})
     */
    public function login(Request $request, UserRepository $userRepository, $username): Response
    {

        $user = $userRepository->loadUserByUsername($username);

        if (!$user) {
            return $this->json([
                'error' => 'User does not exist'
            ]);
        }

        $token = new UsernamePasswordToken($user, $user->getPassword(), "public", $user->getRoles());
        $this->get("security.token_storage")->setToken($token);

        /*
        if (in_array(User::ROLE_ADMIN, $user->getRoles())) {
            return $this->redirectToRoute('homepage');
        }

        if (in_array(User::ROLE_TIANOS, $user->getRoles())) {
            return $this->redirectToRoute('game_user_index');
        }
        */

        return $this->redirectToRoute('backend');


        // Fire the login event
        // Logging the user in above the way we do it doesn't do this automatically
        /*
        $user = $this->get('security.token_storage')->getToken()->getUser();
         *
        $event = new InteractiveLoginEvent($request, $token);
        $this->get("event_dispatcher")->dispatch("security.interactive_login", $event);
        */
    }

    /**
     * @Route("/logout", name="user_api_logout", methods={"GET"})
     */
    public function logout(Request $request, UserRepository $userRepository): Response
    {

        $providerKey = 'default';
        $token = new AnonymousToken($providerKey, 'anon.');
        $this->get("security.token_storage")->setToken($token);
        $request->getSession()->invalidate();

        return $this->json([
            'msg' => 'All good logout'
        ]);
    }



}
