<?php

namespace Database\Seeders;

use App\Models\Division;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DivisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $divisions = [
            'Main',
            'Litbang',
            'Pengkaderan',
            'PSDM',
            'Humas',
            'P&K',
            'Infokom',
        ];

        foreach ($divisions as $division) {
            Division::create([
                'name' => $division,
                'description' => fake()->text(),
            ]);
        }
    }
}
