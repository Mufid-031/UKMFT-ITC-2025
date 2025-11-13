<?php

namespace Database\Seeders;

use App\Models\DivisionUser;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DivisionUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $divisions = [
            'Main' => 1,
            'Litbang' => 2,
            'Pengkaderan' => 3,
            'PSDM' => 4,
            'Humas' => 5,
            'P&K' => 6,
            'Infokom' => 7,
        ];

        $positions = [
            'Ketua Umum' => 1,
            'Wakil Ketua Umum' => 2,
            'Sekretaris Umum 1' => 3,
            'Sekretaris Umum 2' => 4,
            'Bendahara Umum 1' => 5,
            'Bendahara Umum 2' => 6,
            'Ketua Divisi' => 7,
            'Sekretaris Divisi' => 8,
            'Anggota' => 9,
        ];

        $mufid = User::first();

        DivisionUser::create([
            'user_id' => $mufid->id,
            'division_id' => $divisions['Litbang'],
            'position_id' => $positions['Sekretaris Divisi'],
        ]);
    }
}
