"use client";

import Hero from "components/indexComponents/Hero";
import Service from "components/indexComponents/Service";
import WhyUs from "components/indexComponents/Whyus";
import Stats from "components/indexComponents/Stats";
import Cta from "components/indexComponents/Cta";
import Footer from "components/indexComponents/Footer";
import Navbar from "components/indexComponents/Navbar";
import "index.css";
import "App.css";

import { useState, useEffect } from "react";
import RotateLoader from "react-spinners/RotateLoader";

const HomeClient = () => {
  const [minTimePassed, setMinTimePassed] = useState(false);
  useEffect(() => {
    setMinTimePassed(false);
    const timer = setTimeout(() => setMinTimePassed(true), 1500);
    return () => clearTimeout(timer);
  }, []);
  if (!minTimePassed) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <RotateLoader color="#2563eb" size={18} />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <Hero />
      <WhyUs />
      <Cta />
      <Footer />
    </div>
  );
};

export default HomeClient; 