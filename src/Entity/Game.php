<?php

namespace App\Entity;

use App\Repository\GameRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Validator as AcmeAssert;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=GameRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Game
{
    const STATUS_CREATED = "CREATED";
    const STATUS_OPEN = "OPEN";
    const STATUS_CLOSED = "CLOSED";
    const STATUS_DELETED = "DELETED";
    const NUMBERS_75 = 75;

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
     * @ORM\Column(type="integer", nullable=false)
     */
    private $cardNumber;

    /**
     * @ORM\Column(type="integer", nullable=false)
     */
    private $maxCard;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", inversedBy="games")
     */
    private $usersGame;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\CardPattern", inversedBy="gameCardPattern")
     */
    private $cardPattern;
    
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
        $this->usersGame = new ArrayCollection();
    }

    public function __toString() {
        return $this->name;
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

    public function getCardNumber(): ?int
    {
        return $this->cardNumber;
    }

    public function setCardNumber(int $cardNumber): self
    {
        $this->cardNumber = $cardNumber;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsersGame(): Collection
    {
        return $this->usersGame;
    }

    public function addUsersGame(User $usersGame): self
    {
        if (!$this->usersGame->contains($usersGame)) {
            $this->usersGame[] = $usersGame;
        }

        return $this;
    }

    public function removeUsersGame(User $usersGame): self
    {
        if ($this->usersGame->contains($usersGame)) {
            $this->usersGame->removeElement($usersGame);
        }

        return $this;
    }

    public function getCardPattern(): ?CardPattern
    {
        return $this->cardPattern;
    }

    public function setCardPattern(?CardPattern $cardPattern): self
    {
        $this->cardPattern = $cardPattern;

        return $this;
    }

    public function getMaxCard(): ?int
    {
        return $this->maxCard;
    }

    public function setMaxCard(int $maxCard): self
    {
        $this->maxCard = $maxCard;

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
