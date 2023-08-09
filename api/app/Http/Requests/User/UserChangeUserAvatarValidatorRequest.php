<?php

namespace App\Http\Requests\User;

use App\Http\Requests\ApiFormRequest;

class UserChangeUserAvatarValidatorRequest extends ApiFormRequest
{
    public function rules(): array
    {
        return [
            'image' => 'required|image|max:5120'
        ];
    }
}
