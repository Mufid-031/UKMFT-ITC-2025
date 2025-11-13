<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DivisionUser>
 */
class DivisionUserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'division_id' => 1,
            'user_id' => 1,
            'position_id' => 1
        ];
    }

    public function litbangSekdiv()
    {
        return $this->state([
            'division_id' => 2,
            'user_id' => 1,
            'position_id' => 1
        ]);
    }
}
