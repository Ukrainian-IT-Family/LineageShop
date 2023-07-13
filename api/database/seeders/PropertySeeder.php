<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Constant\PropertyConstant;
use Illuminate\Support\Facades\DB;

class PropertySeeder extends Seeder
{
    public function run()
    {
        $defaultValue = PropertyConstant::DEFAULT_VALUE;
        $variableValue = PropertyConstant::VARIABLE_VALUE;
        $accounts = DB::table('categories')->where('name', '=', 'Accounts')->first()->id;
        $items = DB::table('categories')->where('name', '=', 'Items')->first()->id;
        $other = DB::table('categories')->where('name', '=', 'Other')->first()->id;
        $adena = DB::table('categories')->where('name', '=', 'Adena')->first()->id;
        $characterUpgrade = DB::table('categories')->where('name', '=', 'Leveling')->first()->id;

        DB::table('properties')->insert(['name' => 'Race', 'type' => $defaultValue, 'category_id' => $accounts, 'input_name' => 'race']);
        DB::table('properties')->insert(['name' => 'Equipment', 'type' => $defaultValue, 'category_id' => $accounts, 'input_name' => 'equipment']);
        DB::table('properties')->insert(['name' => 'Level', 'type' => $variableValue, 'category_id' => $accounts, 'input_name' => 'level']);
        DB::table('properties')->insert(['name' => 'Profession', 'type' => $variableValue, 'category_id' => $accounts, 'sortable' => false, 'input_name' => 'profession']);
        DB::table('properties')->insert(['name' => 'Short description', 'type' => $variableValue, 'category_id' => $accounts, 'sortable' => false, 'input_name' => 'shortDescription']);
        DB::table('properties')->insert(['name' => 'Price', 'type' => $variableValue, 'category_id' => $accounts, 'sortable' => false, 'input_name' => 'price', 'display_in_product_list' => 1]);
        DB::table('properties')->insert(['name' => 'Rank', 'type' => $defaultValue, 'category_id' => $items, 'input_name' => 'rank']);
        DB::table('properties')->insert(['name' => 'Type', 'type' => $defaultValue, 'category_id' => $other, 'input_name' => 'type']);
        DB::table('properties')->insert(['name' => 'Category', 'type' => $defaultValue, 'category_id' => $items, 'input_name' => 'property']);
        DB::table('properties')->insert(['name' => 'Name', 'type' => $variableValue, 'category_id' => $items, 'sortable' => false, 'input_name' => 'title']);
        DB::table('properties')->insert(['name' => 'Short description', 'type' => $variableValue, 'category_id' => $other, 'sortable' => false, 'input_name' => 'shortDescription']);
        DB::table('properties')->insert(['name' => 'Detailed description', 'type' => $variableValue, 'category_id' => $other, 'sortable' => false, 'input_name' => 'description']);
        DB::table('properties')->insert(['name' => 'Short description', 'type' => $variableValue, 'category_id' => $characterUpgrade, 'sortable' => false, 'input_name' => 'shortDescription']);
        DB::table('properties')->insert(['name' => 'Detailed description', 'type' => $variableValue, 'category_id' => $characterUpgrade, 'sortable' => false, 'input_name' => 'description']);
        DB::table('properties')->insert(['name' => 'Price', 'type' => $variableValue, 'category_id' => $characterUpgrade, 'sortable' => false, 'input_name' => 'price', 'display_in_product_list' => 1]);
        DB::table('properties')->insert(['name' => 'Price', 'type' => $variableValue, 'category_id' => $items, 'sortable' => false, 'input_name' => 'price', 'display_in_product_list' => 1]);
        DB::table('properties')->insert(['name' => 'Price', 'type' => $variableValue, 'category_id' => $other, 'sortable' => false, 'input_name' => 'price', 'display_in_product_list' => 1]);
        DB::table('properties')->insert(['name' => 'Availability', 'type' => $variableValue, 'category_id' => $items, 'sortable' => false, 'input_name' => 'availability', 'display_in_product_list' => 1]);
        DB::table('properties')->insert(['name' => 'Price', 'type' => $variableValue, 'category_id' => $adena, 'sortable' => false, 'input_name' => 'price', 'display_in_product_list' => 1]);
        DB::table('properties')->insert(['name' => 'Availability', 'type' => $variableValue, 'category_id' => $adena, 'sortable' => false, 'input_name' => 'availability', 'display_in_product_list' => 1]);

        $propertyCategoryId = DB::table('properties')->where('name', '=', 'Category')->first()->id;

        DB::table('properties')->insert(['name' => 'Weapon', 'type' => $defaultValue, 'parent_id' => $propertyCategoryId, 'input_name' => 'subProperty', 'parent_value_id' => null]);
        DB::table('properties')->insert(['name' => 'Armor', 'type' => $defaultValue, 'parent_id' => $propertyCategoryId, 'input_name' => 'subProperty', 'parent_value_id' => null]);
        DB::table('properties')->insert(['name' => 'Accessories', 'type' => $defaultValue, 'parent_id' => $propertyCategoryId, 'input_name' => 'subProperty', 'parent_value_id' => null]);
    }
}
