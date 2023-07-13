<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'sort',
        'slug'
    ];

    public function getID(): int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getSort(): ?int
    {
        return $this->sort;
    }

    public function getCreated(): Carbon
    {
        return $this->created_at;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }
}
