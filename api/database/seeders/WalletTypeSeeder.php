<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WalletTypeSeeder extends Seeder
{
    public function run()
    {
        DB::table('wallet_types')->insert(['name' => 'PayPal', 'wallet_symbol' => '$']);
        DB::table('wallet_types')->insert(['name' => 'Payoneer', 'wallet_symbol' => '$']);
        DB::table('wallet_types')->insert(['name' => 'Bank card', 'wallet_symbol' => '$']);
        DB::table('wallet_types')->insert(['name' => 'Personal balance', 'wallet_symbol' => '$']);
    }
}
