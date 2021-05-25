<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Money
 *
 * @ORM\Table(name="money", indexes={@ORM\Index(name="IDX_B7DF13E431B6CFB2", columns={"money_history_id"})})
 * @ORM\Entity
 */
class Money
{
    const REAL_VALUE_1 = 1;
    const REAL_VALUE_2 = 2;
    const REAL_VALUE_3 = 3;
    const REAL_VALUE_4 = 4;
    const REAL_VALUE_5 = 5;
    const REAL_VALUE_10 = 10;
    const REAL_VALUE_20 = 20;

    const REAL_VALUE =
        [
            '1' => 1,
            '2' => 2,
            '3' => 3,
            '4' => 4,
            '5' => 5,
            '10' => 10,
            '20' => 20,
        ];

    const CURRENCY =
        [
            'PEN' => 'PEN',
            'USD' => 'USD',
            'EUR' => 'EUR',
        ];

    const NOMINAL_VALUE_X = 5;

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="code", type="string", length=255, nullable=false)
     */
    private $code;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="currency", type="string", length=255, nullable=false)
     */
    private $currency;

    /**
     * @var int
     *
     * @ORM\Column(name="real_value", type="integer", nullable=false)
     */
    private $realValue;

    /**
     * @var int
     *
     * @ORM\Column(name="nominal_value", type="integer", nullable=false)
     */
    private $nominalValue;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=false, options={"default"="CURRENT_TIMESTAMP"})
     */
    private $createdAt = 'CURRENT_TIMESTAMP';

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="updated_at", type="datetime", nullable=false, options={"default"="CURRENT_TIMESTAMP"})
     */
    private $updatedAt = 'CURRENT_TIMESTAMP';

    /**
     * @var \MoneyHistory
     *
     * @ORM\ManyToOne(targetEntity="MoneyHistory")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="money_history_id", referencedColumnName="id")
     * })
     */
    private $moneyHistory;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCurrency(): ?string
    {
        return $this->currency;
    }

    public function setCurrency(string $currency): self
    {
        $this->currency = $currency;

        return $this;
    }

    public function getRealValue(): ?int
    {
        return $this->realValue;
    }

    public function setRealValue(int $realValue): self
    {
        $this->realValue = $realValue;

        return $this;
    }

    public function getNominalValue(): ?int
    {
        return $this->nominalValue;
    }

    public function setNominalValue(int $nominalValue): self
    {
        $this->nominalValue = $nominalValue;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getMoneyHistory(): ?MoneyHistory
    {
        return $this->moneyHistory;
    }

    public function setMoneyHistory(?MoneyHistory $moneyHistory): self
    {
        $this->moneyHistory = $moneyHistory;

        return $this;
    }


}
