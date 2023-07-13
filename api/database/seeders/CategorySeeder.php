<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run()
    {
        Category::factory(1)->create([
            'name' => 'Adena', 'slug' => 'adena',
            'has_nickname_in_order' => true,
            'has_amount_currency_in_order' => true,
            'has_availability' => true,
            'sell_button_name' => 'Sell game currency',
        ]);
        Category::factory(1)->create([
            'name' => 'Accounts',
            'slug' => 'accounts',
            'sell_button_name' => 'Sell accounts',
        ]);
        Category::factory(1)->create([
            'name' => 'Items',
            'slug' => 'items',
            'has_nickname_in_order' => true,
            'has_availability' => true,
            'sell_button_name' => 'Sell Items',
        ]);
        Category::factory(1)->create([
            'name' => 'Leveling',
            'slug' => 'character-upgrade',
            'sell_button_name' => 'Character upgrade',
        ]);
        Category::factory(1)->create([
            'name' => 'Other',
            'slug' => 'other',
            'sell_button_name' => 'Sell Other',
        ]);
    }
}
