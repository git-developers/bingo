<?php

namespace App\Entity;

use App\Repository\MoneyHistoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=MoneyHistoryRepository::class)
 */
class MoneyHistory
{
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
     * @ORM\Column(type="integer", nullable=false)
     */
    private $realValue;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    private $nominalValue;
    
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Money", mappedBy="moneyHistory")
     */
    private $money;

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
        $this->money = new ArrayCollection();
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

    /**
     * @return Collection|Money[]
     */
    public function getMoney(): Collection
    {
        return $this->money;
    }

    public function addMoney(Money $money): self
    {
        if (!$this->money->contains($money)) {
            $this->money[] = $money;
            $money->setMoneyHistory($this);
        }

        return $this;
    }

    public function removeMoney(Money $money): self
    {
        if ($this->money->contains($money)) {
            $this->money->removeElement($money);
            // set the owning side to null (unless already changed)
            if ($money->getMoneyHistory() === $this) {
                $money->setMoneyHistory(null);
            }
        }

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
}
