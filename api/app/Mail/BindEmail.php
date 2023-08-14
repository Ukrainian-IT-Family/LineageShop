<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class BindEmail extends Mailable implements ShouldQueue
{
    use Queueable;
    use SerializesModels;

    private string $email;
    private string $verifyRoute;

    public function __construct(
        string $verifyRoute,
        string $email
    ) {
        $this->email = $email;
        $this->verifyRoute = $verifyRoute;
    }

    public function build()
    {
        $this->to($this->email);
        $verifyRoute = $this->verifyRoute;

        return (new MailMessage())
            ->subject('Email change request')
            ->action('Click to confirm email change', $verifyRoute);
    }
}
