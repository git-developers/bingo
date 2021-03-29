<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class AppExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('price', [$this, 'formatPrice']),
            new TwigFilter('cardLetter', [$this, 'cardLetterFunction']),
        ];
    }

    public function formatPrice($number, $decimals = 0, $decPoint = '.', $thousandsSep = ',')
    {
        $price = number_format($number, $decimals, $decPoint, $thousandsSep);
        $price = '$'.$price;

        return $price;
    }

    public function cardLetterFunction($i)
    {
        $out = "";

        switch ($i) {
            case 0:
                $out = "B";
                break;
            case 1:
                $out = "I";
                break;
            case 2:
                $out = "N";
                break;
            case 3:
                $out = "G";
                break;
            case 4:
                $out = "O";
                break;
        }

        return $out;
    }
}