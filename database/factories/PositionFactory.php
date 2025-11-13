<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Position>
 */
class PositionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'description' => $this->faker->text(),
        ];
    }

    public function sekdiv()
    {
        return $this->state(fn (array $attributes) => [
            'name' => 'Sekretaris Divisi',
            'description' => 'Sekretaris Divisi',
        ]);
    }
}
