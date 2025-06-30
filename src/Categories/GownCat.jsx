import React from 'react'
import '../Styles/Category.css'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import img1 from '../images/img6.jpg'
import img2 from '../images/img7.jpg'
import img3 from '../images/img5.jpg'
import img4 from '../images/img3.jpg'
import img5 from '../images/img9.jpg'

const GownCat = () => {
  return (
    <>
      <section>
        <div className='cat-width'>
          <div className='cat-top'>
            <h1>Gown Product Category</h1>
            <div>
              <Link to='/'>Home</Link> <span className='gt'>&gt;</span><span>Gown Product Category</span>
            </div>
          </div>

          <div className='cat-flex'>
            <div className='cat-item'>
              <div>
                <img src={img1} alt="" />
                <h3>Simple and Affordable</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores doloribus</p>
                <h4>₦15,000</h4>
              </div>
              <Link to='/gown1'>View All</Link>
            </div>
            <div className='cat-item'>
              <div>
                <img src={img2} alt="" />
                <h3>Cheap and affordable</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores doloribus</p>
                <h4>₦20,000</h4>
              </div>
              <Link to='/gown2'>View All</Link>
            </div>
            <div className='cat-item'>
              <div>
                <img src={img3} alt="" />
                <h3>Elegant and stylish</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores doloribus</p>
                <h4>₦30,000</h4>
              </div>
              <Link to='/gown3'>View All</Link>
            </div>
            <div className='cat-item'>
              <div>
                <img src={img4} alt="" />
                <h3>Premium and Best</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores doloribus</p>
                <h4>₦40,000</h4>
              </div>
              <Link to='/gown4'>View All</Link>
            </div>
            <div className='cat-item'>
              <div>
                <img src={img5} alt="" />
                <h3>Luxury and Comfort</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores doloribus</p>
                <h4>₦50,000</h4>
              </div>
              <Link to='/gown5'>View All</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default GownCat
