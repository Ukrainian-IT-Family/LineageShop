<?php

namespace App\Constant;

class SupportRequestConstant
{
    public const SUPPORT_EMAIL = 'admin@admin.com';
    public const SUBJECTS = [
        0 => 'No topic',
        1 => 'I paid for the order, but the seller does not answer me',
        2 => 'I\'m not satisfied with the order, I want to report the seller',
        3 => 'Payment from my bank card is blocked',
        4 => 'My BucksTrade account has been suspended',
        5 => 'Customer forgot to confirm order',
        6 => 'I have a problem with a customer',
        7 => 'Report Chat Policy Violations',
        8 => 'Report a rule violation in the offer table',
        9 => 'Problem with payment or withdrawal',
        10 => 'Restore access to your BucksTrade account',
        11 => 'Send photos to disable delay',
        12 => 'Other',
    ];
    public const OPEN = 1;
    public const CLOSED = 2;
    public const UNREAD = 3;
    public const READ = 4;
    public const StatusNames = [
        '1' => 'Open',
        '2' => 'Closed',
        '3' => 'Unread',
        '4' => 'Read'
    ];
    public const DEFAULT_ORDER_TYPE = 'id';
    public const DEFAULT_ORDER_DIRECTION = 'DESC';


}
