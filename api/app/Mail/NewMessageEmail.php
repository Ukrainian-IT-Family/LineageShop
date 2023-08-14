<?php

namespace App\Mail;

use App\Models\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NewMessageEmail extends Mailable implements ShouldQueue
{
    use Queueable;
    use SerializesModels;

    public Message $message;

    public function __construct(Message $message)
    {
        $this->message = $message;
    }

    /**
     * Build the message.
     *
     * @return MailMessage
     */
    public function build()
    {
        return (new MailMessage())
            ->subject('You have a new message!')
            ->line('You have a new message!');
    }
}
