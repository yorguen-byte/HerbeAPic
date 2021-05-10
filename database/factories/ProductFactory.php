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

    protected $storage_url = [
        'biovene.png', 'herbe_a_pic.jpg', 'rumago.png'
    ];

    private $web_url = [
        "https://phytobokaz.fr/images/content/produits/medium/illustration-rumago-avec-reflet.png", "https://phytobokaz.fr/images/content/produits/medium/illustration-bioven-avec-reflet.png", "https://www.christiandemontaguere.com/3837-thickbox_default/phytobokaz-virapic-60ml.jpg"
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
            "product_short_description" => $this->faker->text(30),
            "product_storage_url" => Arr::random($this->storage_url),
            "product_web_url" => Arr::random($this->web_url)
        ];
    }
}
