import React, { useState } from "react";
// import Navbar from "./Navbar";
function Card({setCartValue}) {
    
    let [toggle, setToggle] = useState(true);
    return (
        <>
            <div className="col mb-5">
                <div className="card h-100">
                    {/* <!-- Product image--> */}
                    <img
                        className="card-img-top"
                        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                        alt="..."
                    />
                    {/* <!-- Product details--> */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* <!-- Product name--> */}
                            <h5 className="fw-bolder">Fancy Product</h5>
                            {/* <!-- Product price--> */}
                            $40.00 - $80.00
                        </div>
                    </div>
                    {/* <!-- Product actions--> */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            {toggle ?
                                <button
                                    className="btn btn-outline-dark mt-auto"
                                    onClick={() => {
                                        setCartValue(value=>value+1)
                                        setToggle(false);
                                    }}
                                >
                                    Add to Cart
                                </button>
                            : 
                                <button
                                    className="btn btn-outline-dark mt-auto"
                                    onClick={() => {
                                        setCartValue(value=>value-1)
                                        setToggle(true);
                                    }}
                                >
                                    {" "}
                                    Remove{" "}
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
