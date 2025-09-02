import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import gsap from 'gsap';
import { ReactLenis, type LenisRef } from 'lenis/react';
import { useEffect, useRef } from 'react';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <main className="w-screen min-h-screen overflow-x-hidden">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
