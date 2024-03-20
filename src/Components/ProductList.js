// ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId)
        let result = await fetch(`http://localhost:6062/products?userId=${userId}`);
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:6062/products/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {products.map((item, index) => (
                <ul key={item._id}>
                    <li>{index + 1}</li>
                    <li>{item.name}</li>
                    <li>${item.price}</li>
                    <li>{item.category}</li>
                    <li>
                        <button onClick={() => deleteProduct(item._id)} className='delete'>Delete</button>
                        <button style={{ color: "white" }} className='delete'>
                            <Link className="inbt" to={"/update/" + item._id}>Update</Link>
                        </button>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default ProductList;
