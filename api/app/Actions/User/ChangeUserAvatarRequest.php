<?php

declare(strict_types=1);

namespace App\Actions\User;

use Illuminate\Http\UploadedFile;

final class ChangeUserAvatarRequest
{
    private int $id;
    private UploadedFile $image;

    public function __construct(
        int $id,
        UploadedFile $image
    ) {
        $this->id = $id;
        $this->image = $image;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getImage(): UploadedFile
    {
        return $this->image;
    }
}
