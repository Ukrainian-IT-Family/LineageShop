<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PropertyDefaultValueSeeder extends Seeder
{
    public function run()
    {
        $raceId = DB::table('properties')->where('name', '=', 'Race')->first()->id;
        $equipmentId = DB::table('properties')->where('name', '=', 'Equipment')->first()->id;
        $categoryId = DB::table('properties')->where('name', '=', 'Category')->first()->id;
        $rankId = DB::table('properties')->where('name', '=', 'Rank')->first()->id;
        $typeId = DB::table('properties')->where('name', '=', 'Type')->first()->id;

        $weaponId = DB::table('properties')->where('name', '=', 'Weapon')->first()->id;
        $armorId = DB::table('properties')->where('name', '=', 'Armor')->first()->id;
        $accessoryId = DB::table('properties')->where('name', '=', 'Accessories')->first()->id;

        // Раса
        DB::table('property_default_values')->insert(['property_id' => $raceId, 'value' => 'Human']);
        DB::table('property_default_values')->insert(['property_id' => $raceId, 'value' => 'Elves']);
        DB::table('property_default_values')->insert(['property_id' => $raceId, 'value' => 'Dark Elves']);
        DB::table('property_default_values')->insert(['property_id' => $raceId, 'value' => 'Orcs']);
        DB::table('property_default_values')->insert(['property_id' => $raceId, 'value' => 'Gnomes']);
        DB::table('property_default_values')->insert(['property_id' => $raceId, 'value' => 'Kamael']);
        DB::table('property_default_values')->insert(['property_id' => $raceId, 'value' => 'Arteya']);

        // Экипировка
        DB::table('property_default_values')->insert(['property_id' => $equipmentId, 'value' => 'Naked']);
        DB::table('property_default_values')->insert(['property_id' => $equipmentId, 'value' => 'Dressed']);

        // Категория
        DB::table('property_default_values')->insert(['property_id' => $categoryId, 'value' => 'Sets']);
        DB::table('property_default_values')->insert(['property_id' => $categoryId, 'value' => 'Supplies']);
        DB::table('property_default_values')->insert(['property_id' => $categoryId, 'value' => 'Pet Items']);
        DB::table('property_default_values')->insert(['property_id' => $categoryId, 'value' => 'Brooches, Lavianrose stones']);
        DB::table('property_default_values')->insert(['property_id' => $categoryId, 'value' => 'Other']);
        DB::table('property_default_values')->insert(['property_id' => $categoryId, 'value' => 'Weapon']);
        DB::table('property_default_values')->insert(['property_id' => $categoryId, 'value' => 'Armor']);
        DB::table('property_default_values')->insert(['property_id' => $categoryId, 'value' => 'Accessories']);

        $weaponCategoryId = DB::table('property_default_values')->where('value', '=', 'Weapon')->first()->id;
        $armorCategoryId = DB::table('property_default_values')->where('value', '=', 'Armor')->first()->id;
        $accessoryCategoryId = DB::table('property_default_values')->where('value', '=', 'Accessories')->first()->id;
        DB::table('properties')->where('name', '=', 'Weapon')->update(['parent_value_id' => $weaponCategoryId]);
        DB::table('properties')->where('name', '=', 'Armor')->update(['parent_value_id' => $armorCategoryId]);
        DB::table('properties')->where('name', '=', 'Accessories')->update(['parent_value_id' => $accessoryCategoryId]);


        // Оружие
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'One handed sword']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'One-Handed Magic sword']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Dagger']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Rapier']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Two-handed sword']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Ancient sword']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Dual swords']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Dual daggers']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'One-Handed Mace']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'One-Handed Magic Mace']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Two-Handed Mace']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Two-handed magic crushing']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Double crushing']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Bow']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Crossbow']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Knuckles']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Polearm']);
        DB::table('property_default_values')->insert(['property_id' => $weaponId, 'value' => 'Other weapons']);

        // Доспехи
        DB::table('property_default_values')->insert(['property_id' => $armorId, 'value' => 'Helmet']);
        DB::table('property_default_values')->insert(['property_id' => $armorId, 'value' => 'Upper part of the armor']);
        DB::table('property_default_values')->insert(['property_id' => $armorId, 'value' => 'Lower part of the armor']);
        DB::table('property_default_values')->insert(['property_id' => $armorId, 'value' => 'Full armor']);
        DB::table('property_default_values')->insert(['property_id' => $armorId, 'value' => 'Gloves']);
        DB::table('property_default_values')->insert(['property_id' => $armorId, 'value' => 'Shoes']);
        DB::table('property_default_values')->insert(['property_id' => $armorId, 'value' => 'Shield']);
        DB::table('property_default_values')->insert(['property_id' => $armorId, 'value' => 'Symbol']);
        DB::table('property_default_values')->insert(['property_id' => $armorId, 'value' => 'Underwear']);
        DB::table('property_default_values')->insert(['property_id' => $armorId, 'value' => 'Cloak']);

        // Аксессуары
        DB::table('property_default_values')->insert(['property_id' => $accessoryId, 'value' => 'Ring']);
        DB::table('property_default_values')->insert(['property_id' => $accessoryId, 'value' => 'Earring']);
        DB::table('property_default_values')->insert(['property_id' => $accessoryId, 'value' => 'Necklace']);
        DB::table('property_default_values')->insert(['property_id' => $accessoryId, 'value' => 'Belt']);
        DB::table('property_default_values')->insert(['property_id' => $accessoryId, 'value' => 'Bracelet']);
        DB::table('property_default_values')->insert(['property_id' => $accessoryId, 'value' => 'Headdress']);

        // Ранг
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value' => 'No rank']);
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value'  => 'D']);
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value'  => 'C']);
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value'  => 'B']);
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value'  => 'A']);
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value'  => 'S']);
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value'  => 'S80']);
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value'  => 'R']);
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value'  => 'R95']);
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value'  => 'R99']);
        DB::table('property_default_values')->insert(['property_id' => $rankId, 'value'  => 'R110']);

        // Тип
        DB::table('property_default_values')->insert(['property_id' => $typeId, 'value'  => 'Quests']);
        DB::table('property_default_values')->insert(['property_id' => $typeId, 'value'  => 'Farm Olympus']);
        DB::table('property_default_values')->insert(['property_id' => $typeId, 'value'  => 'Other']);
    }
}
