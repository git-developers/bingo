<?php

namespace App\Entity;

use App\Repository\MoneyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=MoneyRepository::class)
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
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $code;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $currency;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    private $realValue;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    private $nominalValue;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\User", mappedBy="money")
     */
    private $users;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\MoneyHistory", inversedBy="money")
     */
    private $moneyHistory;

    /**
     * @Assert\Type("\DateTimeInterface")
     * @ORM\Column(type="datetime", options={"default": "CURRENT_TIMESTAMP"})
     */
    private $createdAt;

    /**
     * @Assert\Type("\DateTimeInterface")
     * @ORM\Column(type="datetime", options={"default": "CURRENT_TIMESTAMP"})
     */
    private $updatedAt;

    public function __construct()
    {
        $this->users = new ArrayCollection();
    }

    public function __toString() {
        return $this->name;
    }

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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

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

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->setMoney($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            // set the owning side to null (unless already changed)
            if ($user->getMoney() === $this) {
                $user->setMoney(null);
            }
        }

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

    public function getCurrency(): ?string
    {
        return $this->currency;
    }

    public function setCurrency(string $currency): self
    {
        $this->currency = $currency;

        return $this;
    }
}
