import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import GownData4 from '../GownData/GownData4';
import "../Styles/Skirt.css"
import Footer from '../components/Footer';


const Gown4 = () => {
  const [page, setPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const perPage = 8;

  // Filter skirts by price and search
  const filteredSkirts = GownData4.filter((skirt) => {
    const matchesPrice = maxPrice ? skirt.price <= maxPrice : true;
    const matchesSearch = skirt.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPrice && matchesSearch;
  });

  const totalPages = Math.ceil(filteredSkirts.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentSkirts = filteredSkirts.slice(start, end);

  return (
    <>
      <section className='product-top'>
        <h1>Gown Products</h1>
        <div>
          <Link to='/'>Home</Link> <span className='gt'>&gt;</span><span>Products</span>
        </div>
      </section>
      {/* Filter Controls */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
        <div className='filter filter1'>
          <label>Max Price (₦): </label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <div className='filter'>
          <label>Search: </label>
          <input
            type="text"
            placeholder="e.g. plain, stripe"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* Product List */}
      <div className="skirt-list">
        {currentSkirts.map((item, index) => (
          <div className="skirt-item" key={index}>
            <Link to={item.link}><img src={item.image} alt={item.name} /></Link>
            <h3>{item.name}</h3>
            <p>₦{item.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {filteredSkirts.length === 0 ? (
          <p>No skirts found.</p>
        ) : (
          [...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Gown4
