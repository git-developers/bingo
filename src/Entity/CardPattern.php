<?php

namespace App\Entity;

use App\Repository\CardPatternRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=CardPatternRepository::class)
 */
class CardPattern
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
     * @ORM\OneToMany(targetEntity="App\Entity\Game", mappedBy="cardPattern")
     */
    private $gameCardPattern;

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
        $this->gameCardPattern = new ArrayCollection();
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
     * @return Collection|Game[]
     */
    public function getGameCardPattern(): Collection
    {
        return $this->gameCardPattern;
    }

    public function addGameCardPattern(Game $gameCardPattern): self
    {
        if (!$this->gameCardPattern->contains($gameCardPattern)) {
            $this->gameCardPattern[] = $gameCardPattern;
            $gameCardPattern->setCardPattern($this);
        }

        return $this;
    }

    public function removeGameCardPattern(Game $gameCardPattern): self
    {
        if ($this->gameCardPattern->contains($gameCardPattern)) {
            $this->gameCardPattern->removeElement($gameCardPattern);
            // set the owning side to null (unless already changed)
            if ($gameCardPattern->getCardPattern() === $this) {
                $gameCardPattern->setCardPattern(null);
            }
        }

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
