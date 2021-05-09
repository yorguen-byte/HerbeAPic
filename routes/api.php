<?php

use App\Models\Adress;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("adress", function (Request $data) {
    return Adress::all();
});

Route::get("products", function (Request $data) {  // axios.get('api/product')
    return Product::all();
});

Route::get("products/{id}", function (Request $data, $unid) { // axios .get("/api/product/123) 123 = id
    return Product::findOrFail($unid);
});
