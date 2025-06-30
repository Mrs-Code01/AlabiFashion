import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/SizeGuide.css'
import Footer from '../components/Footer';


const SizeGuide = () => {
  return (
    <>
      <section>
        <div className='size-guide-width'>
          <div className='sg-top'>
            <h1>Size Guide</h1>
            <div>
              <Link to='/'>Home</Link> <span className='gt'>&gt;</span><span>Size Guide</span>
            </div>
          </div>
          <div className='chart-flex'>
            <div className='men-size'>
              <h2>Alabi Fashion Men Size Chart</h2>
              <h3>Men</h3>
              <div className='men-box'>
                <div>
                  <p>SIZE</p>
                  <p>CHEST</p>
                  <p>WAIST</p>
                  <p>HIP</p>
                  <p>THIGH</p>
                </div>
                <div>
                  <p>XS</p>
                  <p>40</p>
                  <p>29</p>
                  <p>38</p>
                  <p>26</p>
                </div>
                <div>
                  <p>S</p>
                  <p>42</p>
                  <p>31</p>
                  <p>40</p>
                  <p>27</p>
                </div>
                <div>
                  <p>M</p>
                  <p>44</p>
                  <p>33</p>
                  <p>42</p>
                  <p>27.5</p>
                </div>
                <div>
                  <p>L</p>
                  <p>46</p>
                  <p>35</p>
                  <p>44</p>
                  <p>28</p>
                </div>
                <div>
                  <p>XL</p>
                  <p>48</p>
                  <p>37</p>
                  <p>46</p>
                  <p>29</p>
                </div>
                <div>
                  <p>XXL</p>
                  <p>50</p>
                  <p>39</p>
                  <p>48</p>
                  <p>30</p>
                </div>
              </div>
            </div>
            {/* men size end */}
            <div className='women-size'>
              <h2>Alabi Fashion Women Size Chart</h2>
              <h3>Women</h3>
              <div className='women-box'>
                <div>
                  <p>SIZE</p>
                  <p>BUST</p>
                  <p>WAIST</p>
                  <p>HIP</p>
                  <p>THIGH</p>
                </div>
                <div>
                  <p>XS</p>
                  <p>31</p>
                  <p>24</p>
                  <p>34</p>
                  <p>22</p>
                </div>
                <div>
                  <p>S</p>
                  <p>34</p>
                  <p>28</p>
                  <p>38</p>
                  <p>24</p>
                </div>
                <div>
                  <p>M</p>
                  <p>38</p>
                  <p>32</p>
                  <p>42</p>
                  <p>26</p>
                </div>
                <div>
                  <p>L</p>
                  <p>42</p>
                  <p>36</p>
                  <p>46</p>
                  <p>28</p>
                </div>
                <div>
                  <p>XL</p>
                  <p>46</p>
                  <p>40</p>
                  <p>50</p>
                  <p>30</p>
                </div>
                <div>
                  <p>XXL</p>
                  <p>50</p>
                  <p>44</p>
                  <p>54</p>
                  <p>32</p>
                </div>
              </div>
            </div>
            {/* women chart end */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SizeGuide
