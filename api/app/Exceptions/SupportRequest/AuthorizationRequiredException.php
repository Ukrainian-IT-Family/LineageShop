<?php

declare(strict_types=1);

namespace App\Exceptions\SupportRequest;

use Throwable;
use App\Exceptions\BaseException;

final class AuthorizationRequiredException extends BaseException
{
    public function __construct($message = 'Authorization required', $code = 422, Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
