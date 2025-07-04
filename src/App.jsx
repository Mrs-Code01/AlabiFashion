import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import SizeGuide from './Pages/SizeGuide';
import Faq from './Pages/Faq';
import AboutUs from './Pages/AboutUs'
import Agbada1 from './Products/Agbada1';
import Agbada2 from './Products/Agbada2';
import Agbada3 from './Products/Agbada3';
import Bubu1 from './Products/Bubu1';
import Bubu2 from './Products/Bubu2';
import Bubu3 from './Products/Bubu3';
import Bubu4 from './Products/Bubu4';
import Gown1 from './Products/Gown1';
import Gown2 from './Products/Gown2';
import Gown3 from './Products/Gown3';
import Gown4 from './Products/Gown4';
import Gown5 from './Products/Gown5';
import MNative1 from './Products/MNative1';
import MNative2 from './Products/MNative2';
import MNative3 from './Products/MNative3';
import MNative4 from './Products/MNative4';
import TwoPair1 from './Products/TwoPair1'
import TwoPair2 from './Products/TwoPair2'
import TwoPair3 from './Products/TwoPair3'
import TwoPair4 from './Products/TwoPair4'
import Jacket1 from './Products/Jacket1'
import Jacket2 from './Products/Jacket2'
import Jacket3 from './Products/Jacket3'
import Trouser1 from './Products/Trouser1'
import Trouser2 from './Products/Trouser2'
import Trouser3 from './Products/Trouser3'
import Cap1 from './Products/Cap1'
import Cap2 from './Products/Cap2'
import Cap3 from './Products/Cap3'
import Skirt1 from './Products/Skirt1'
import Skirt2 from './Products/Skirt2'
import Skirt3 from './Products/Skirt3'
import Shirt1 from './Products/Shirt1'
import Shirt2 from './Products/Shirt2'
import ShortT1 from './Products/ShortT1'
import ShortT2 from './Products/ShortT2'
import AgbadaCat from './Categories/AgbadaCat';
import BubuCat from './Categories/BubuCat';
import GownCat from './Categories/GownCat';
import MNativeCat from './Categories/MNativeCat';
import TwoPairCat from './Categories/TwoPairCat'
import JacketCat from './Categories/JacketCat'
import TrouserCat from './Categories/TrouserCat'
import CapCat from './Categories/CapCat'
import SkirtCat from './Categories/SkirtCat'
import ShirtCat from './Categories/ShirtCat'
import ShortTCat from './Categories/ShortTCat'
import PdAgbada1 from './ProductDetailsAgbada/PdAgbada1';
import PdAgbada2 from './ProductDetailsAgbada/PdAgbada2';
import PdAgbada3 from './ProductDetailsAgbada/PdAgbada3';
import PdAgbada2_1 from './ProductDetailsAgbada2/PdAgbada1';
import PdAgbada2_2 from './ProductDetailsAgbada2/PdAgbada2';
import PdAgbada2_3 from './ProductDetailsAgbada2/PdAgbada3';
import PdAgbada3_1 from './ProductDetailsAgbada3/PdAgbada1';
import PdAgbada3_2 from './ProductDetailsAgbada3/PdAgbada2';
import PdAgbada3_3 from './ProductDetailsAgbada3/PdAgbada3';
import PdBubu1 from './ProductDetailsBubu/PdBubu1';
import PdBubu2 from './ProductDetailsBubu/PdBubu2';
import PdBubu3 from './ProductDetailsBubu/PdBubu3';
import PdBubu2_1 from './ProductDetailsBubu2/PdBubu1';
import PdBubu2_2 from './ProductDetailsBubu2/PdBubu2';
import PdBubu2_3 from './ProductDetailsBubu2/PdBubu3';
import PdBubu3_1 from './ProductDetailsBubu3/PdBubu1';
import PdBubu3_2 from './ProductDetailsBubu3/PdBubu2';
import PdBubu3_3 from './ProductDetailsBubu3/PdBubu3';
import PdBubu4_1 from './ProductDetailsBubu4/PdBubu1';
import PdBubu4_2 from './ProductDetailsBubu4/PdBubu2';
import PdBubu4_3 from './ProductDetailsBubu4/PdBubu3';
import PdGown1 from './ProductDetailsGown/PdGown1';
import PdGown2 from './ProductDetailsGown/PdGown2';
import PdGown3 from './ProductDetailsGown/PdGown3';
import PdGown2_1 from './ProductDetailsGown2/PdGown1';
import PdGown2_2 from './ProductDetailsGown2/PdGown2';
import PdGown2_3 from './ProductDetailsGown2/PdGown3';
import PdGown3_1 from './ProductDetailsGown3/PdGown1';
import PdGown3_2 from './ProductDetailsGown3/PdGown2';
import PdGown3_3 from './ProductDetailsGown3/PdGown3';
import PdGown4_1 from './ProductDetailsGown4/PdGown1';
import PdGown4_2 from './ProductDetailsGown4/PdGown2';
import PdGown4_3 from './ProductDetailsGown4/PdGown3';
import PdGown5_1 from './ProductDetailsGown5/PdGown1';
import PdGown5_2 from './ProductDetailsGown5/PdGown2';
import PdGown5_3 from './ProductDetailsGown5/PdGown3';
import PdMNative1 from './ProductDetailsMNative/PdMNative1';
import PdMNative2 from './ProductDetailsMNative/PdMNative2';
import PdMNative3 from './ProductDetailsMNative/PdMNative3';
import PdMNative2_1 from './ProductDetailsMNative2/PdMNative1';
import PdMNative2_2 from './ProductDetailsMNative2/PdMNative2';
import PdMNative2_3 from './ProductDetailsMNative2/PdMNative3';
import PdMNative3_1 from './ProductDetailsMNative3/PdMNative1';
import PdMNative3_2 from './ProductDetailsMNative3/PdMNative2';
import PdMNative3_3 from './ProductDetailsMNative3/PdMNative3';
import PdMNative4_1 from './ProductDetailsMNative4/PdMNative1';
import PdMNative4_2 from './ProductDetailsMNative4/PdMNative2';
import PdMNative4_3 from './ProductDetailsMNative4/PdMNative3';
import Pd2Pair1 from './ProductDetails2Pair/Pd2Pair1';
import Pd2Pair2 from './ProductDetails2Pair/Pd2Pair2';
import Pd2Pair3 from './ProductDetails2Pair/Pd2Pair3';
import Pd2Pair2_1 from './ProductDetails2Pair2/Pd2Pair1';
import Pd2Pair2_2 from './ProductDetails2Pair2/Pd2Pair2';
import Pd2Pair2_3 from './ProductDetails2Pair2/Pd2Pair3';
import Pd2Pair3_1 from './ProductDetails2Pair3/Pd2Pair1';
import Pd2Pair3_2 from './ProductDetails2Pair3/Pd2Pair2';
import Pd2Pair3_3 from './ProductDetails2Pair3/Pd2Pair3';
import Pd2Pair4_1 from './ProductDetails2Pair4/Pd2Pair1';
import Pd2Pair4_2 from './ProductDetails2Pair4/Pd2pair2';
import Pd2Pair4_3 from './ProductDetails2Pair4/Pd2Pair3';
import PdJacket1 from './ProductDetailsJacket/PdJacket1'
import PdJacket2 from './ProductDetailsJacket/PdJacket2'
import PdJacket3 from './ProductDetailsJacket/PdJacket3'
import PdJacket2_1 from './ProductDetailsJacket2/PdJacket1'
import PdJacket2_2 from './ProductDetailsJacket2/PdJacket2'
import PdJacket2_3 from './ProductDetailsJacket2/PdJacket3'
import PdJacket3_1 from './ProductDetailsJacket3/PdJacket1'
import PdJacket3_2 from './ProductDetailsJacket3/PdJacket2'
import PdJacket3_3 from './ProductDetailsJacket3/PdJacket3'
import PdTrouser1 from './ProductDetailsTrouser/PdTrouser1'
import PdTrouser2 from './ProductDetailsTrouser/PdTrouser2'
import PdTrouser3 from './ProductDetailsTrouser/PdTrouser3'
import PdTrouser2_1 from './ProductDetailsTrouser2/PdTrouser1'
import PdTrouser2_2 from './ProductDetailsTrouser2/PdTrouser2'
import PdTrouser2_3 from './ProductDetailsTrouser2/PdTrouser3'
import PdTrouser3_1 from './ProductDetailsTrouser3/PdTrouser1'
import PdTrouser3_2 from './ProductDetailsTrouser3/PdTrouser2'
import PdTrouser3_3 from './ProductDetailsTrouser3/PdTrouser3'
import PdCap1 from './ProductDetailsCap/PdCap1'
import PdCap2 from './ProductDetailsCap/PdCap2'
import PdCap3 from './ProductDetailsCap/PdCap3'
import PdCap2_1 from './ProductDetailsCap2/PdCap1'
import PdCap2_2 from './ProductDetailsCap2/PdCap2'
import PdCap2_3 from './ProductDetailsCap2/PdCap3'
import PdCap3_1 from './ProductDetailsCap3/PdCap1'
import PdCap3_2 from './ProductDetailsCap3/PdCap2'
import PdCap3_3 from './ProductDetailsCap3/PdCap3'
import PdSkirt1 from './ProductDetailsSkirt/PdSkirt1'
import PdSkirt2 from './ProductDetailsSkirt/PdSkirt2'
import PdSkirt3 from './ProductDetailsSkirt/PdSkirt3'
import PdSkirt2_1 from './ProductDetailsSkirt2/PdSkirt1'
import PdSkirt2_2 from './ProductDetailsSkirt2/PdSkirt2'
import PdSkirt2_3 from './ProductDetailsSkirt2/PdSkirt3'
import PdSkirt3_1 from './ProductDetailsSkirt3/PdSkirt1'
import PdSkirt3_2 from './ProductDetailsSkirt3/PdSkirt2'
import PdSkirt3_3 from './ProductDetailsSkirt3/PdSkirt3'
import PdShirt1 from './ProductDetailsShirt/PdShirt1'
import PdShirt2 from './ProductDetailsShirt/PdShirt2'
import PdShirt3 from './ProductDetailsShirt/PdShirt3'
import PdShirt2_1 from './ProductDetailsShirt2/PdShirt1'
import PdShirt2_2 from './ProductDetailsShirt2/PdShirt2'
import PdShirt2_3 from './ProductDetailsShirt2/PdShirt3'
import PdShortT1 from './ProductDetailsShortT/PdShortT1'
import PdShortT2 from './ProductDetailsShortT/PdShortT2'
import PdShortT3 from './ProductDetailsShortT/PdShortT3'
import PdShortT2_1 from './ProductDetailsShortT2/PdShortT1'
import PdShortT2_2 from './ProductDetailsShortT2/PdShortT2'
import PdShortT2_3 from './ProductDetailsShortT2/PdShortT3'




const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sizeguide' element={<SizeGuide />} />
          <Route path='/faqs' element={<Faq />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/agbada1' element={<Agbada1 />} />
          <Route path='/agbada2' element={<Agbada2 />} />
          <Route path='/agbada3' element={<Agbada3 />} />
          <Route path='/bubu1' element={<Bubu1 />} />
          <Route path='/bubu2' element={<Bubu2 />} />
          <Route path='/bubu3' element={<Bubu3 />} />
          <Route path='/bubu4' element={<Bubu4 />} />
          <Route path='/gown1' element={<Gown1 />} />
          <Route path='/gown2' element={<Gown2 />} />
          <Route path='/gown3' element={<Gown3 />} />
          <Route path='/gown4' element={<Gown4 />} />
          <Route path='/gown5' element={<Gown5 />} />
          <Route path='/mennative1' element={<MNative1 />} />
          <Route path='/mennative2' element={<MNative2 />} />
          <Route path='/mennative3' element={<MNative3 />} />
          <Route path='/twopair1' element={<TwoPair1 />} />
          <Route path='/twopair2' element={<TwoPair2 />} />
          <Route path='/twopair3' element={<TwoPair3 />} />
          <Route path='/twopair4' element={<TwoPair4 />} />
          <Route path='/mennative4' element={<MNative4 />} />
          <Route path='/jacket1' element={<Jacket1 />} />
          <Route path='/jacket2' element={<Jacket2 />} />
          <Route path='/jacket3' element={<Jacket3 />} />
          <Route path='/trouser1' element={<Trouser1 />} />
          <Route path='/trouser2' element={<Trouser2 />} />
          <Route path='/trouser3' element={<Trouser3 />} />
          <Route path='/cap1' element={<Cap1 />} />
          <Route path='/cap2' element={<Cap2 />} />
          <Route path='/cap3' element={<Cap3 />} />
          <Route path='/skirt1' element={<Skirt1 />} />
          <Route path='/skirt2' element={<Skirt2 />} />
          <Route path='/skirt3' element={<Skirt3 />} />
          <Route path='/shirt1' element={<Shirt1 />} />
          <Route path='/shirt2' element={<Shirt2 />} />
          <Route path='/shorttrouser1' element={<ShortT1 />} />
          <Route path='/shorttrouser2' element={<ShortT2 />} />
          <Route path='/agbadacat' element={<AgbadaCat />} />
          <Route path='/bubucat' element={<BubuCat />} />
          <Route path='/gowncat' element={<GownCat />} />
          <Route path='/mennativecat' element={<MNativeCat />} />
          <Route path='/twopaircat' element={<TwoPairCat />} />
          <Route path='/jacketcat' element={<JacketCat />} />
          <Route path='/trousercat' element={<TrouserCat />} />
          <Route path='/capcat' element={<CapCat />} />
          <Route path='/skirtcat' element={<SkirtCat />} />
          <Route path='/shirtcat' element={<ShirtCat />} />
          <Route path='/shorttrousercat' element={<ShortTCat />} />
          <Route path='/productagbada1' element={<PdAgbada1 />} />
          <Route path='/productagbada2' element={<PdAgbada2 />} />
          <Route path='/productagbada3' element={<PdAgbada3 />} />
          <Route path='/productagbada2_1' element={<PdAgbada2_1 />} />
          <Route path='/productagbada2_2' element={<PdAgbada2_2 />} />
          <Route path='/productagbada2_3' element={<PdAgbada2_3 />} />
          <Route path='/productagbada3_1' element={<PdAgbada3_1 />} />
          <Route path='/productagbada3_2' element={<PdAgbada3_2 />} />
          <Route path='/productagbada3_3' element={<PdAgbada3_3 />} />
          <Route path='/productbubu1' element={<PdBubu1 />} />
          <Route path='/productbubu2' element={<PdBubu2 />} />
          <Route path='/productbubu3' element={<PdBubu3 />} />
          <Route path='/productbubu2_1' element={<PdBubu2_1 />} />
          <Route path='/productbubu2_2' element={<PdBubu2_2 />} />
          <Route path='/productbubu2_3' element={<PdBubu2_3 />} />
          <Route path='/productbubu3_1' element={<PdBubu3_1 />} />
          <Route path='/productbubu3_2' element={<PdBubu3_2 />} />
          <Route path='/productbubu3_3' element={<PdBubu3_3 />} />
          <Route path='/productbubu4_1' element={<PdBubu4_1 />} />
          <Route path='/productbubu4_2' element={<PdBubu4_2 />} />
          <Route path='/productbubu4_3' element={<PdBubu4_3 />} />
          <Route path='/productgown1' element={<PdGown1 />} />
          <Route path='/productgown2' element={<PdGown2 />} />
          <Route path='/productgown3' element={<PdGown3 />} />
          <Route path='/productgown2_1' element={<PdGown2_1 />} />
          <Route path='/productgown2_2' element={<PdGown2_2 />} />
          <Route path='/productgown2_3' element={<PdGown2_3 />} />
          <Route path='/productgown3_1' element={<PdGown3_1 />} />
          <Route path='/productgown3_2' element={<PdGown3_2 />} />
          <Route path='/productgown3_3' element={<PdGown3_3 />} />
          <Route path='/productgown4_1' element={<PdGown4_1 />} />
          <Route path='/productgown4_2' element={<PdGown4_2 />} />
          <Route path='/productgown4_3' element={<PdGown4_3 />} />
          <Route path='/productgown5_1' element={<PdGown5_1 />} />
          <Route path='/productgown5_2' element={<PdGown5_2 />} />
          <Route path='/productgown5_3' element={<PdGown5_3 />} />
          <Route path='/productmennative1' element={<PdMNative1 />} />
          <Route path='/productmennative2' element={<PdMNative2 />} />
          <Route path='/productmennative3' element={<PdMNative3 />} />
          <Route path='/productmennative2_1' element={<PdMNative2_1 />} />
          <Route path='/productmennative2_2' element={<PdMNative2_2 />} />
          <Route path='/productmennative2_3' element={<PdMNative2_3 />} />
          <Route path='/productmennative3_1' element={<PdMNative3_1 />} />
          <Route path='/productmennative3_2' element={<PdMNative3_2 />} />
          <Route path='/productmennative3_3' element={<PdMNative3_3 />} />
          <Route path='/productmennative4_1' element={<PdMNative4_1 />} />
          <Route path='/productmennative4_2' element={<PdMNative4_2 />} />
          <Route path='/productmennative4_3' element={<PdMNative4_3 />} />
          <Route path='/producttwopair1' element={<Pd2Pair1 />} />
          <Route path='/producttwopair2' element={<Pd2Pair2 />} />
          <Route path='/producttwopair3' element={<Pd2Pair3 />} />
          <Route path='/producttwopair2_1' element={<Pd2Pair2_1 />} />
          <Route path='/producttwopair2_2' element={<Pd2Pair2_2 />} />
          <Route path='/producttwopair2_3' element={<Pd2Pair2_3 />} />
          <Route path='/producttwopair3_1' element={<Pd2Pair3_1 />} />
          <Route path='/producttwopair3_2' element={<Pd2Pair3_2 />} />
          <Route path='/producttwopair3_3' element={<Pd2Pair3_3 />} />
          <Route path='/producttwopair4_1' element={<Pd2Pair4_1 />} />
          <Route path='/producttwopair4_2' element={<Pd2Pair4_2 />} />
          <Route path='/producttwopair4_3' element={<Pd2Pair4_3 />} />
          <Route path='/productjacket1' element={<PdJacket1 />} />
          <Route path='/productjacket2' element={<PdJacket2 />} />
          <Route path='/productjacket3' element={<PdJacket3 />} />
          <Route path='/productjacket2_1' element={<PdJacket2_1 />} />
          <Route path='/productjacket2_2' element={<PdJacket2_2 />} />
          <Route path='/productjacket2_3' element={<PdJacket2_3 />} />
          <Route path='/productjacket3_1' element={<PdJacket3_1 />} />
          <Route path='/productjacket3_2' element={<PdJacket3_2 />} />
          <Route path='/productjacket3_3' element={<PdJacket3_3 />} />
          <Route path='/producttrouser1' element={<PdTrouser1 />} />
          <Route path='/producttrouser2' element={<PdTrouser2 />} />
          <Route path='/producttrouser3' element={<PdTrouser3 />} />
          <Route path='/producttrouser2_1' element={<PdTrouser2_1 />} />
          <Route path='/producttrouser2_2' element={<PdTrouser2_2 />} />
          <Route path='/producttrouser2_3' element={<PdTrouser2_3 />} />
          <Route path='/producttrouser3_1' element={<PdTrouser3_1 />} />
          <Route path='/producttrouser3_2' element={<PdTrouser3_2 />} />
          <Route path='/producttrouser3_3' element={<PdTrouser3_3 />} />
          <Route path='/productcap1' element={<PdCap1 />} />
          <Route path='/productcap2' element={<PdCap2 />} />
          <Route path='/productcap3' element={<PdCap3 />} />
          <Route path='/productcap2_1' element={<PdCap2_1 />} />
          <Route path='/productcap2_2' element={<PdCap2_2 />} />
          <Route path='/productcap2_3' element={<PdCap2_3 />} />
          <Route path='/productcap3_1' element={<PdCap3_1 />} />
          <Route path='/productcap3_2' element={<PdCap3_2 />} />
          <Route path='/productcap3_3' element={<PdCap3_3 />} />
          <Route path='/productskirt1' element={<PdSkirt1 />} />
          <Route path='/productskirt2' element={<PdSkirt2 />} />
          <Route path='/productskirt3' element={<PdSkirt3 />} />
          <Route path='/productskirt2_1' element={<PdSkirt2_1 />} />
          <Route path='/productskirt2_2' element={<PdSkirt2_2 />} />
          <Route path='/productskirt2_3' element={<PdSkirt2_3 />} />
          <Route path='/productskirt3_1' element={<PdSkirt3_1 />} />
          <Route path='/productskirt3_2' element={<PdSkirt3_2 />} />
          <Route path='/productskirt3_3' element={<PdSkirt3_3 />} />
          <Route path='/productshirt1' element={<PdShirt1 />} />
          <Route path='/productshirt2' element={<PdShirt2 />} />
          <Route path='/productshirt3' element={<PdShirt3 />} />
          <Route path='/productshirt2_1' element={<PdShirt2_1 />} />
          <Route path='/productshirt2_2' element={<PdShirt2_2 />} />
          <Route path='/productshirt2_3' element={<PdShirt2_3 />} />
          <Route path='/productshorttrouser1' element={<PdShortT1 />} />
          <Route path='/productshorttrouser2' element={<PdShortT2 />} />
          <Route path='/productshorttrouser3' element={<PdShortT3 />} />
          <Route path='/productshorttrouser2_1' element={<PdShortT2_1 />} />
          <Route path='/productshorttrouser2_2' element={<PdShortT2_2 />} />
          <Route path='/productshorttrouser2_3' element={<PdShortT2_3 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
