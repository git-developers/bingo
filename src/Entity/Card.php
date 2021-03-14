<?php

namespace App\Entity;

use App\Repository\CardRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CardRepository::class)
 */
class Card
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
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $code;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\User", mappedBy="cards")
     */
    private $usersCard;

    public function __construct()
    {
        $this->usersCard = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsersCard(): Collection
    {
        return $this->usersCard;
    }

    public function addUsersCard(User $usersCard): self
    {
        if (!$this->usersCard->contains($usersCard)) {
            $this->usersCard[] = $usersCard;
            $usersCard->setCards($this);
        }

        return $this;
    }

    public function removeUsersCard(User $usersCard): self
    {
        if ($this->usersCard->contains($usersCard)) {
            $this->usersCard->removeElement($usersCard);
            // set the owning side to null (unless already changed)
            if ($usersCard->getCards() === $this) {
                $usersCard->setCards(null);
            }
        }

        return $this;
    }
}
