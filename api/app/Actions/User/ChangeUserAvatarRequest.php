<?php

declare(strict_types=1);

namespace App\Actions\User;

use Illuminate\Http\UploadedFile;

final class ChangeUserAvatarRequest
{
    private UploadedFile $image;

    public function __construct(
        UploadedFile $image
    ) {
        $this->image = $image;
    }

    public function getImage(): UploadedFile
    {
        return $this->image;
    }
}
