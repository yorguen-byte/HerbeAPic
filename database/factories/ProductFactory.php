<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;



class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;
    protected $productsN = [
        'Zeb a pik', 'banuline', 'biovene'
    ];
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "product_name" => Arr::random($this->productsN) . ' ' . random_int(1, 100),
            "product_description" => $this->faker->text(),
            "product_price" => random_int(1, 100),
            "product_short_description" => $this->faker->text(30)
        ];
    }
}
