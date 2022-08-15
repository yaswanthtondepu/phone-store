import React from 'react'
import { Link } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom';


export default function CartTotal({ value }) {
    let navigate = useNavigate();
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end">
                        <Link to="/">
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button' onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal:
                            </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>

                        <h5>
                            <span className="text-title">
                                tax:
                            </span>
                            <strong>$ {cartTax}</strong>
                        </h5>

                        <h5>
                            <span className="text-title">
                                total:
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        {/* <PayPalScriptProvider options={{ "client-id": "test" }}>
                            <PayPalButtons />
                        </PayPalScriptProvider> */}

                        <PayPalScriptProvider options={{ "client-id": "test" }}>
                            <PayPalButtons
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value:cartTotal,
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then((details) => {
                                        const name = details.payer.name.given_name;
                                        clearCart();
                                        navigate("/");
                                        alert(`Order was placed successfully by ${name}`);
                                    });
                                }}
                                onCancel={() => {
                                    alert(`Order was cancelled by user`);
                                }}
                                onError={() => {
                                    alert(`Something went wrong. Please try again.`);
                                }}
                            />
                        </PayPalScriptProvider>
                    </div>
                </div>
            </div>
        </>
    )
}
