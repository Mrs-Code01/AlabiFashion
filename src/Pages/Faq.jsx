import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Faq.css'
import Footer from '../components/Footer';

const faqs = [
    { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase with a receipt.' },
    { question: 'How long does shipping take?', answer: 'Shipping takes 3-5 business days within Nigeria.' },
    { question: 'Do you ship internationally?', answer: 'Yes, we ship to selected countries outside Nigeria.' },
    { question: 'How can I track my order?', answer: 'Once your order ships, you’ll receive a tracking number via email.' },
    { question: 'What payment methods are accepted?', answer: 'We accept Paystack, Flutterwave, bank transfers, and cards.' },
    { question: 'How can I contact customer support?', answer: 'You can reach us via email or our live chat on the website.' }
];


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0); // One open by default

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <section>
                <div className='faq-width'>
                    <div className='faq-top'>
                        <h1>FAQ's</h1>
                        <div>
                            <Link to='/'>Home</Link> <span className='gt'>&gt;</span><span>Frequently asked questions</span>
                        </div>
                    </div>

                    <div className="faq-container">
                        <h2>Frequently Asked Questions</h2>
                        {faqs.map((item, index) => (
                            <div key={index} className="faq-item">
                                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                    <span>{item.question}</span>
                                    <span className={`arrow ${index === activeIndex ? 'open' : ''}`}>&#9660;</span>
                                </div>
                                {index === activeIndex && <div className="faq-answer"><h3>{item.answer}</h3></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );

}

export default Faq

