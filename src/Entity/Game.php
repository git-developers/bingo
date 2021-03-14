<?php

namespace App\Entity;

use App\Repository\GameRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

/**
 * @ORM\Entity(repositoryClass=GameRepository::class)
 */
class Game
{
    const STATUS_OPEN = "OPEN";
    const STATUS_CLOSED = "CLOSED";
    const STATUS_DELETED = "DELETED";

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
     * @ORM\OneToMany(targetEntity="App\Entity\User", mappedBy="games")
     */
    private $usersGame;

    public function __construct()
    {
        $this->usersGame = new ArrayCollection();
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
            $usersGame->setGames($this);
        }

        return $this;
    }

    public function removeUsersGame(User $usersGame): self
    {
        if ($this->usersGame->contains($usersGame)) {
            $this->usersGame->removeElement($usersGame);
            // set the owning side to null (unless already changed)
            if ($usersGame->getGames() === $this) {
                $usersGame->setGames(null);
            }
        }

        return $this;
    }


}
