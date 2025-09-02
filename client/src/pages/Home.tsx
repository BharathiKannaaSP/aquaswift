import React from 'react';
import HeroBanner from '../components/HeroBanner';
import AnimatedSlogan from '../animations/AnimatedSlogan';
import MineralCards from '../components/MineralCards';
import HighLights from '../components/HighLights';
import ProductCategory from '../components/ProductCategory';
import Separator from '../components/Separator';
import AdaptiveServiceFeatures from '../components/AdaptiveServiceFeatures';
import Details from '../components/Details';
import QuickAnswers from '../components/QuickAnswers';
import Subscription from '../components/Subscription';

const Home = () => {
  return (
    <div>
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
      <Separator variant="dark" />
      <AdaptiveServiceFeatures />
      <Separator variant="dark" />
      <Details />
      <Separator variant="dark" />
      <QuickAnswers />
      <Subscription />
    </div>
  );
};

export default Home;
