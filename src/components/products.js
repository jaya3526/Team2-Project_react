import React from "react";
import Product from "./product";
import 'bootstrap/dist/css/bootstrap.min.css';

function Products() {
    var data = [
        {
            "product_id": 1,
            "name": "Watch",
            "brand_name": "Fast",
            "no_of_units": 2,
            "price": 10000,
            "category": "Watch",
            "rating": 4.2
        },
        {
            "product_id": 2,
            "name": "Smartphone",
            "brand_name": "TechPro",
            "no_of_units": 5,
            "price": 25000,
            "category": "Electronics",
            "rating": 4.5
        },
        {
            "product_id": 3,
            "name": "Running Shoes",
            "brand_name": "Stride",
            "no_of_units": 10,
            "price": 4500,
            "category": "Footwear",
            "rating": 4.0
        },
        {
            "product_id": 4,
            "name": "Bluetooth Speaker",
            "brand_name": "SoundMax",
            "no_of_units": 7,
            "price": 3200,
            "category": "Electronics",
            "rating": 4.3
        },
        {
            "product_id": 5,
            "name": "T-shirt",
            "brand_name": "CottonEase",
            "no_of_units": 20,
            "price": 800,
            "category": "Clothing",
            "rating": 4.1
        },
        {
            "product_id": 6,
            "name": "Microwave Oven",
            "brand_name": "CookQuick",
            "no_of_units": 3,
            "price": 12000,
            "category": "Home Appliances",
            "rating": 4.6
        },
        {
            "product_id": 7,
            "name": "Backpack",
            "brand_name": "UrbanPack",
            "no_of_units": 12,
            "price": 1500,
            "category": "Accessories",
            "rating": 4.0
        },
        {
            "product_id": 8,
            "name": "Laptop",
            "brand_name": "CompEdge",
            "no_of_units": 4,
            "price": 55000,
            "category": "Electronics",
            "rating": 4.7
        },
        {
            "product_id": 9,
            "name": "Refrigerator",
            "brand_name": "CoolMax",
            "no_of_units": 2,
            "price": 30000,
            "category": "Home Appliances",
            "rating": 4.4
        },
        {
            "product_id": 10,
            "name": "Jeans",
            "brand_name": "DenimZone",
            "no_of_units": 15,
            "price": 2000,
            "category": "Clothing",
            "rating": 4.2
        }
    ];

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Products Available</h1>
            <div className="mb-4">
                <input type="text" className="form-control" placeholder="Search product..." />
            </div>
            <div className="row">
                {data.map((e) => (
                    <div key={e.product_id} className="col-sm-6 col-md-4 col-lg-3 d-flex">
                        <Product {...e} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
