import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ProductDetails.css';
import Footer from '../components/Footer';
import { payWithPaystack } from '../payWithPayStack'; // adjust path if needed

const images = [
    "/images/img1.png",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img7.jpg"
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const PdCap1 = () => {
    const productName = "Alafa01";
    const productPrice = 30000;

    const [bigImage, setBigImage] = useState(images[0]);
    const [selectedSize, setSelectedSize] = useState("XS");
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const resetForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setSelectedSize("XS");
        setShowModal(false);
    };

    const handlePayment = () => {
        if (!name || !email || !phone || !address) {
            alert("Please fill all fields.");
            return;
        }

        payWithPaystack({
            email,
            amount: productPrice,
            productName,
            size: selectedSize,
            customerName: name,
            phone,
            address,
            onSuccess: resetForm
        });
    };

    return (
        <>
            <section>
                <div className='product-details-width'>
                    <div className='product-details-top'>
                        <h1>Cheap and affordable bubu</h1>
                        <div>
                            <Link to='/'>Home</Link> <span className='gt'>&gt;</span><span>Product Details</span>
                        </div>
                    </div>

                    <div className='product-details-flex'>
                        <div className='product-details-images'>
                            <img src={bigImage} className='big-image' alt="" />
                            <div className='thumbs'>
                                {images.slice(1).map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        className={`thumb ${bigImage === img ? "selected" : ""}`}
                                        onClick={() => setBigImage(img)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className='product-details-text'>
                            <h2>{productName}</h2>
                            <h3>₦{productPrice.toLocaleString()}.00</h3>
                            <p>Size: <span>{selectedSize}</span></p>
                            {sizes.map((size, index) => (
                                <span
                                    key={index}
                                    className={`size-box ${selectedSize === size ? "selected" : ""}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </span>
                            ))}
                            <br />
                            <button className='checkout' onClick={() => setShowModal(true)}>Proceed to Checkout</button><br />
                            <Link to='/contact' className='ask-question'><span>?</span>ask a question</Link>
                            <p className='fab'>
                                Clients may bring their own fabric or <br />choose from our luxury in-house collection
              </p>
                            <Link to='' className='guide-line'>Read more on material guidelines</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Form */}
            {showModal && (
                <div className='modal-overlay'>
                    <div className='modal'>
                        <h2>Enter Your Details</h2>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <textarea placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <button onClick={handlePayment}>Pay Now (₦{productPrice.toLocaleString()})</button>
                        <button className='cancel' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default PdCap1;




