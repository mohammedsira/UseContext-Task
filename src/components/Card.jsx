import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

function Card() {
    const { product, setProduct } = useContext(UserContext);
    const [quantities, setQuantities] = useState(Array(product.length).fill(1));

    const addQuantity = (index) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] += 1;
        setQuantities(updatedQuantities);
    };

    const removeQuantity = (index) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] -= 1;
        if (updatedQuantities[index] < 1) {
            updatedQuantities[index] = 1;
        }
        setQuantities(updatedQuantities);
    };

    const handleDelete = (id) => {
        const updatedProduct = product.filter((item) => item.id !== id);
        setProduct(updatedProduct);
        const updatedQuantities = [...quantities];
        updatedQuantities.splice(id - 1, 1); // Remove quantity corresponding to the deleted item
        setQuantities(updatedQuantities);
    };

    // Calculate total quantity
    const totalQuantity = quantities.reduce((total, quantity) => total + quantity, 0);

    // Calculate total amount
    const totalAmount = product.reduce((total, item, index) => {
        return total + (item.price * quantities[index]);
    }, 0);

    return (
        <div className="container">
            {product.map((e, i) => (
                <div key={i} className="card mb-5">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={e.image} className="img-fluid rounded-start cardImage" alt="Product" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <div className="top">
                                    <div className="top-header d-flex justify-content-between align-items-center">
                                        <h5 className="card-title">{e.title}</h5>
                                        <h4 className="card-title">${e.price}</h4>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="card-text">Brand: {e.brand}</p>
                                            <p className="card-text text-success">Discount Offer: {e.discountPercentage}%</p>
                                        </div>
                                    </div>
                                    <p className="card-text">{e.description}</p>
                                    <p className="card-text">Rating: {e.rating}/5</p>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <div className="quantity-btn">
                                            <button type="button" className="btn btn-outline-danger" onClick={() => removeQuantity(i)}>-</button>
                                            <div className="py-1 quantityText">&nbsp;&nbsp;{quantities[i]}&nbsp;&nbsp;</div>
                                            <button type="button" className="btn btn-outline-success" onClick={() => addQuantity(i)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <button type="button" className="btn btn-danger" id="remove" onClick={() => { handleDelete(e.id) }}>
                                    <b>Remove from Cart</b>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
            {/* Display total quantity and total amount  */}
            <div className="total" style={{ position: 'fixed', top: 0, right: 0, padding: '10px', zIndex: 1 }}>
                <button className="total-button" style={{ fontSize: '16px', color: 'white', backgroundColor: '#007bff', border: 'none', padding: '10px 20px', marginRight: '10px', borderRadius: '5px' }}>Total Quantity: {totalQuantity}</button>
                <button className="total-button" style={{ fontSize: '16px', color: 'white', backgroundColor: 'red', border: 'none', padding: '10px 20px', marginRight: '10px', borderRadius: '5px' }}>Total Amount: ${totalAmount}</button>
            </div>


        </div>
    );
}

export default Card;