<?php

namespace Database\Seeders;

use App\Models\Position;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $positions = [
            'Ketua Umum',
            'Wakil Ketua Umum',
            'Sekretaris Umum 1',
            'Sekretaris Umum 2',
            'Bendahara Umum 1',
            'Bendahara Umum 2',
            'Ketua Divisi',
            'Sekretaris Divisi',
            'Anggota',
        ];

        foreach ($positions as $position) {
            Position::create([
                'name' => $position,
                'description' => fake()->text(),
            ]);
        }
    }
}
