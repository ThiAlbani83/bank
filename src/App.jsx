import React from "react";
import styles from "./style";
import {
  Navbar, Hero, Stats, Business, Billing, CardDeal,
  Testimonials, Clients, CTA, Footer
} from "./components";

const App = () => (
  <div className="bg-primary w-full">
    <div className="w-[90%]">
      <Navbar />
    </div>
    <Hero  />


    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>

);
export default App;
