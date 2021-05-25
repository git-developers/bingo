<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

/**
 * Game
 *
 * @ORM\Table(name="game", indexes={@ORM\Index(name="IDX_232B318C9B463F01", columns={"card_pattern_id"})})
 * @ORM\Entity
 */
class Game
{

    const STATUS_CREATED = "CREATED";
    const STATUS_OPEN = "OPEN";
    const STATUS_CLOSED = "CLOSED";
    const STATUS_DELETED = "DELETED";
    const NUMBERS_75 = 75;

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
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="code", type="string", length=255, nullable=false)
     */
    private $code;

    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=255, nullable=false)
     */
    private $status;

    /**
     * @var int
     *
     * @ORM\Column(name="card_number", type="integer", nullable=false)
     */
    private $cardNumber;

    /**
     * @var int
     *
     * @ORM\Column(name="max_card", type="integer", nullable=false)
     */
    private $maxCard;

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
     * @var \CardPattern
     *
     * @ORM\ManyToOne(targetEntity="CardPattern")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="card_pattern_id", referencedColumnName="id")
     * })
     */
    private $cardPattern;

    /**
     * @var \User
     */
    private $users;

    public function __construct()
    {
        $this->users = new ArrayCollection();
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

    public function getCardPattern(): ?CardPattern
    {
        return $this->cardPattern;
    }

    public function setCardPattern(?CardPattern $cardPattern): self
    {
        $this->cardPattern = $cardPattern;

        return $this;
    }


    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {

        if (is_null($this->users)) {
            $this->users = new ArrayCollection();
        }

        return $this->users;
    }

    public function addUsers(User $users): self
    {
        if (!$this->users->contains($users)) {
            $this->users[] = $users;
        }

        return $this;
    }

    public function removeUsers(User $users): self
    {
        if ($this->users->contains($users)) {
            $this->users->removeElement($users);
        }

        return $this;
    }
}
