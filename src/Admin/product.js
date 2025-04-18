import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Product(props) {
    return (
        <div className="card m-2 shadow-sm" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.brand_name}</h6>
                <p className="card-text">Units: {props.no_of_units}</p>
                <p className="card-text">Price: ₹{props.price}</p>
                <p className="card-text">Category: {props.category}</p>
                <p className="card-text">Rating: ⭐{props.rating}</p>
                <button type="button" className="btn btn-info">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}

export default Product;
