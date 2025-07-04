import React from 'react'
import { Link } from 'react-router-dom';
import img9 from '../images/img9.jpg'
import Footer from '../components/Footer'
import '../Styles/AboutUs.css'


const AboutUs = () => {
    return (
        <>
            <section>
                <div className='aboutus-width'>
                    <div className='aboutus-top'>
                        <h1>About Us</h1>
                        <div>
                            <Link to='/'>Home</Link> <span className='gt'>&gt;</span><span>About Us</span>
                        </div>
                    </div>
                    <div className='aboutus-flex'>
                        <img src={img9} alt="" />
                        <div>
                            <p>CEO ALABI FASHION</p>
                            <h3>Prince Olawusiyinka</h3>
                            <p>
                                My name is Alabi, a passionate fashion designer and the founder of AlabiFashion.
My journey in fashion began in 2008, but I paused that same year due to fear and uncertainty about life. In 2009, I found the courage to start again, and I’ve been pushing forward ever since.<br />
                                I started my fashion career in Ibadan. In 2011, I moved to work with my older brother, who also happened to be a fashion designer. When he opened his own shop, I joined him and continued growing my skills. The income I earned working under him helped me fund my education. I stayed loyal, took my time to learn, and after graduating in 2019, I moved to Lagos to expand my experience.<br />
                                Relocating to Lagos wasn’t easy, but in 2020, I realized that fashion was deeper than just sewing. I returned to Edo State to sort out my school results and used that period to upgrade my skills. I enrolled in online courses and also learned how to sew women’s clothing something I hadn’t done before moving to Lagos. I studied the business side of fashion seriously and came back to Lagos in 2022 with a renewed focus.<br />
                                I worked with Zurik.official for one year, and after gaining more industry experience, I finally opened my own fashion shop. It hasn’t been easy, but every designer has to start somewhere.<br />
                                At AlabiFashion, our goal is to take African fashion to the world. We don’t just want to sell in Africa we want to go global. Without fashion designers, looking good wouldn’t be possible, and we’re here to make sure you always look your best. We’re committed to giving you quality products and versatile designs.<br />
                                You don’t have to wear suits every day. African clothing is stylish, elegant, and powerful. We can create amazing styles for you using traditional fabrics with a modern touch.<br />Trust us! Whatever you need in fashion, we’ve got you covered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutUs
