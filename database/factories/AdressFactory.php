<?php

namespace Database\Factories;

use App\Models\Adress;
use Illuminate\Database\Eloquent\Factories\Factory;

class AdressFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Adress::class;
   
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition() //fonction qui transmet de fausse données test
    {
        return [
            "prenom"=>$this->faker->firstName,
            "nom"=>$this->faker->lastName,
            "adresse"=>$this->faker->address,
        ];
    }
}
