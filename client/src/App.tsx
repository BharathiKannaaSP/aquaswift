import { ScrollTrigger, SplitText } from 'gsap/all';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar';
import MineralCards from './components/MineralCards';
import HighLights from './components/HighLights';
import ProductCategory from './components/ProductCategory';
import AdaptiveServiceFeatures from './components/AdaptiveServiceFeatures';
import gsap from 'gsap';
import { ReactLenis, type LenisRef } from 'lenis/react';
import { useEffect, useRef } from 'react';
import AnimatedSlogan from './animations/AnimatedSlogan';
import Separator from './components/Separator';
import Details from './components/Details';
import QuickAnswers from './components/QuickAnswers';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

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
      <HeroBanner />
      <AnimatedSlogan
        sloganText={[
          'Ready to experience water delivery that keeps up with you?',
          'AquaSwift — Fast, Fresh, and Personalized Water Delivery at Your Doorstep',
        ]}
      />
      <MineralCards />
      <AnimatedSlogan
        sloganText={['', 'Anyone. Anywhere. Anytime. 500+ deliveries, 50+ routes.']}
      />
      <HighLights />
      <ProductCategory />
      <AdaptiveServiceFeatures />
      <Separator variant="dark" />
      <Details />
      <Separator variant="dark" />

      <QuickAnswers />
      <Subscription />
      <Footer />
    </main>
  );
};

export default App;
