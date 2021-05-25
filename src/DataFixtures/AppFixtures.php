<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Money;
use App\Entity\Profile;
use App\Entity\Game;
use App\Entity\Card;
use App\Entity\CardPattern;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Util\CardUtil;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        //$money->setRealValue(array_rand(Money::REAL_VALUE, 1));


        $m1 = new Money();
        $m1->setRealValue(Money::REAL_VALUE_1);
        $m1->setCurrency(Money::CURRENCY['PEN']);
        $manager->persist($m1);

        $m2 = new Money();
        $m2->setRealValue(Money::REAL_VALUE_2);
        $m2->setCurrency(Money::CURRENCY['PEN']);
        $manager->persist($m2);

        $m3 = new Money();
        $m3->setRealValue(Money::REAL_VALUE_3);
        $m3->setCurrency(Money::CURRENCY['PEN']);
        $manager->persist($m3);

        $m4 = new Money();
        $m4->setRealValue(Money::REAL_VALUE_4);
        $m4->setCurrency(Money::CURRENCY['PEN']);
        $manager->persist($m4);

        $m5 = new Money();
        $m5->setRealValue(Money::REAL_VALUE_5);
        $m5->setCurrency(Money::CURRENCY['PEN']);
        $manager->persist($m5);

        $m10 = new Money();
        $m10->setRealValue(Money::REAL_VALUE_10);
        $m10->setCurrency(Money::CURRENCY['PEN']);
        $manager->persist($m10);

        $m20 = new Money();
        $m20->setRealValue(Money::REAL_VALUE_20);
        $m20->setCurrency(Money::CURRENCY['PEN']);
        $manager->persist($m20);



        // ===========================
        $cp = new CardPattern();
        $cp->setName("Regular or 4 Corners");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Letter X");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Brackets");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Bow Tie");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Crazy Arrow");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Layer Cake");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Postage Stamps");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Sputnik");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Diamond");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Filled in Diamond");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Blackout");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Crazy L");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Crazy T");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Dog Bone");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("6 Pack");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("8 Pack");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("9 Pack");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Small Frame");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Large Frame");
        $manager->persist($cp);

        $cp = new CardPattern();
        $cp->setName("Crazy Kite ");
        $manager->persist($cp);
        

        // ==================================
        $o1 = new Profile();
        $o1->setCode(Profile::PLAYER);
        $o1->setName(Profile::PLAYER);
        $manager->persist($o1);

        $o2 = new Profile();
        $o2->setCode(Profile::ADMIN);
        $o2->setName(Profile::ADMIN);
        $manager->persist($o2);


        // ==================================
        $roles = [];
        $roles[] = 'ROLE_USER';
        $roles[] = User::ROLE_TIANOS;

        $o = new User();
        $o->setName("Name");
        $o->setLastName("LastName");
        $o->setEmail("tianos_admin@tianos.com");
        $o->setProfile($o2);
        $o->setUsername('tianos_admin');
        $o->setPassword(123456);
        $o->setRoles([
            'ROLE_USER',
            'ROLE_ADMIN',
        ]);
        $o->setMoney($m3);
        $manager->persist($o);

        $o = new User();
        $o->setName("Player 1");
        $o->setLastName("LastName 1");
        $o->setEmail("player-1@tianos.com");
        $o->setProfile($o1);
        $o->setUsername(uniqid());
        $o->setPassword(123456);
        $o->setRoles($roles);
        $o->setMoney($m5);
        $manager->persist($o);

        $o = new User();
        $o->setName("Player 2");
        $o->setLastName("LastName 2");
        $o->setEmail("player-2@tianos.com");
        $o->setProfile($o1);
        $o->setUsername(uniqid());
        $o->setPassword(123456);
        $o->setRoles($roles);
        $o->setMoney($m10);
        $manager->persist($o);

        $o = new User();
        $o->setName("Player 3");
        $o->setLastName("LastName 3");
        $o->setEmail("player-3@tianos.com");
        $o->setProfile($o1);
        $o->setUsername(uniqid());
        $o->setPassword(123456);
        $o->setRoles($roles);
        $o->setMoney($m4);
        $manager->persist($o);

        $o = new User();
        $o->setName("Player 4");
        $o->setLastName("LastName 4");
        $o->setEmail("player-4@tianos.com");
        $o->setProfile($o1);
        $o->setUsername(uniqid());
        $o->setPassword(123456);
        $o->setRoles($roles);
        $o->setMoney($m5);
        $manager->persist($o);


        // ==================================
        $o = new User();
        $o->setName("Staff Member 1");
        $o->setLastName("LastName 1");
        $o->setEmail("staff-member-1@tianos.com");
        $o->setProfile($o2);
        $o->setUsername(uniqid());
        $o->setPassword(123456);
        $o->setRoles($roles);
        $o->setMoney($m20);
        $manager->persist($o);

        $o = new User();
        $o->setName("Staff Member 2");
        $o->setLastName("LastName 2");
        $o->setEmail("staff-member-2@tianos.com");
        $o->setProfile($o2);
        $o->setUsername(uniqid());
        $o->setPassword(123456);
        $o->setRoles($roles);
        $o->setMoney($m4);
        $manager->persist($o);


        // GAME ==================================
        $o = new Game();
        $o->setName("GAME_TEST_01");
        $o->setCardNumber(Game::NUMBERS_75);
        $o->setCardPattern($cp);
        $o->setMaxCard(4);
        $o->setStatus(Game::STATUS_OPEN);
        $manager->persist($o);

        $manager->flush();


        // CARDS ==================================
        $cards = CardUtil::generateBingoCards(2000);

        foreach ($cards as $key => $value) {
            $o = new Card();
            $o->setCardHash($key);
            $o->setJson(json_encode($value));
            $manager->persist($o);
            $manager->flush();
        }
    }
}
