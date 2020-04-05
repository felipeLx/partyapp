import React from 'react';

import Header from './containers/Header/Header';
import Menubar from './components/Menubar/Menubar';
import Carousel from './components/Carousel/Carousel';
import Maps from './components/Maps/GoogleMaps';
import Filter from './components/Filter/Filter';
import Footer from './containers/footer/Footer';
import Customer from './containers/customers/Customer';

function App() {
  return (
    <div>
      <Menubar />
      <header>
        <Header />
      </header>
      <Customer />
      <div>
        <Filter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
