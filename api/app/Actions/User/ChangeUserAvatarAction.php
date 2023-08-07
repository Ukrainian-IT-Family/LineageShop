<?php

declare(strict_types=1);

namespace App\Actions\User;

use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Storage;

final class ChangeUserAvatarAction
{
    private UserRepositoryInterface $userRepositoryInterface;

    public function __construct(UserRepositoryInterface $userRepositoryInterface)
    {
        $this->userRepositoryInterface = $userRepositoryInterface;
    }

    public function execute(ChangeUserAvatarRequest $request): ChangeUserAvatarResponse
    {
        $user = $this->userRepositoryInterface->getById($request->getId());

        $filePath = Storage::putFileAs(
            Config::get('filesystems.profile_images_dir'),
            $request->getImage(),
            $request->getImage()->hashName(),
            'public'
        );

        $user->user_photo = Storage::url($filePath);

        $updatedUser = $this->userRepositoryInterface->update($user);

        return new ChangeUserAvatarResponse($updatedUser);
    }
}
