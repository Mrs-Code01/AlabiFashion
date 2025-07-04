import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
import img1 from '../images/img1.png'
import img2 from '../images/img3.jpg'
import img3 from '../images/img4.jpg'
import img4 from '../images/img5.jpg'
import img5 from '../images/img6.jpg'
import img6 from '../images/img7.jpg'
import img7 from '../images/img8.jpg'
import img8 from '../images/img9.jpg'
import img9 from '../images/img10.jpg'
import img10 from '../images/img1.png'
import img11 from '../images/img4.jpg'
import img12 from '../images/img8.jpg'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <main>
        <div>
          <p>Welcome to</p>
          <h1>ALABI FASHION</h1>
          <a href="#shopping">Shop Now</a>
        </div>
      </main>

      <section className='by-categories' id='shopping'>
        <h2>Shop by Categories</h2>
        <div className='category-flex'>
          <Link to='/agbadacat'>
            <div>
              <img src={img1} alt="" />
              <h3>Agbada</h3>
            </div>
          </Link>
          <Link to='/bubucat'>
            <div>
              <img src={img2} alt="" />
              <h3>Bubus</h3>
            </div>
          </Link>
          <Link to='/capcat'>
            <div>
              <img src={img3} alt="" />
              <h3>Cap</h3>
            </div>
          </Link>
          <Link to='/gowncat'>
            <div>
              <img src={img5} alt="" />
              <h3>Gowns</h3>
            </div>
          </Link>
          <Link to='/jacketcat'>
            <div>
              <img src={img6} alt="" />
              <h3>Jackets</h3>
            </div>
          </Link>
          <Link to='mennativecat'>
            <div>
              <img src={img7} alt="" />
              <h3>Men Native</h3>
            </div>
          </Link>
          <Link to='/shirtcat'>
            <div>
              <img src={img8} alt="" />
              <h3>Shirts</h3>
            </div>
          </Link>
          <Link to='/shorttrousercat'>
            <div>
              <img src={img9} alt="" />
              <h3>Short Trousers</h3>
            </div>
          </Link>
          <Link to='/skirtcat'>
            <div>
              <img src={img10} alt="" />
              <h3>Skirts</h3>
            </div>
          </Link>
          <Link to='/trousercat'>
            <div>
              <img src={img11} alt="" />
              <h3>Trousers</h3>
            </div>
          </Link>
          <Link to='/twopaircat'>
            <div>
              <img src={img12} alt="" />
              <h3>Two Pair Wears</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className='size-check'>
        <img src={img5} alt="" />
        <div>
          <h2>Check Out Our Size Guide</h2>
          <p>
            Our size guide is here to help you find the perfect fit. Whether you like it snug or loose.<br />
            Check out our full size chart for exact measurements in inches.
          </p>
          <Link to='/sizeguide'>Check Now</Link>
        </div>
      </section>

      <section className='best-seller'>
        <h2>Best Sellers</h2>
        <div className='best-seller-flex'>
          <Link to=''>
            <div>
              <img src={img1} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img2} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img3} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img4} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img5} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img6} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img7} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img8} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img9} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img10} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img11} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
          <Link to=''>
            <div>
              <img src={img12} alt="" />
              <div className='bs-inner'>
                <h3>Agbada</h3>
                <p>&#8358;50,000</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className='about-intro'>
        <img src={img8} alt="" />
        <div>
          <p>CEO ALABI FASHION</p>
          <h3>Prince Olawusiyinka</h3>
          <p>
            My name is Alabi, a passionate fashion designer and the founder of AlabiFashion.
  My journey in fashion began in 2008, but I paused that same year due to fear and uncertainty about life. In 2009, I found the courage to start again, and I’ve been pushing forward ever since.
  I started my fashion career in Ibadan. In 2011, I moved to work with my older brother, who also happened to be a fashion designer. When he opened his own shop...
          </p>
          <Link to='/aboutus'>Read more about us</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
