import AnimatedTitle from '../animations/AnimatedTitle';
import { features } from '../constants/HeroBannerConstants';
import AnimatedButton from '../animations/AnimatedButton';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router';

const HeroBanner = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-screen">
      <div className=" relative py-24 px-8 z-15 h-full flex flex-col justify-between">
        <div className="text-4xl w-full md:text-6xl md:w-[40rem]">
          <AnimatedTitle id="hero-banner" title="See beyond. Unlock your health" variant="light" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="hidden sm:flex flex-col gap-8">
            {features.map((i) => (
              <div key={i.title} className="flex gap-2 text-main-bg">
                <img className="w-10 h-10" src={i.icon} alt={i.title} />
                <div className="flex flex-col">
                  <p>{i.title}</p>
                  <span className="text-xs text-white/80">{i.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-3xl text-main-bg">
              Your body holds the answers — we help you see them.
            </p>
            {!user && (
              <AnimatedButton
                size="md"
                variant="light"
                label="Join Waitlist"
                onClick={() => navigate('/login')}
              />
            )}
          </div>
        </div>
      </div>

      {/* Background Video */}
      <video
        className="size-full object-cover brightness-80 absolute top-0 left-0 right-0"
        autoPlay
        loop
        muted
        playsInline
        src="https://cdn.prod.website-files.com/679d8b01c23ed7847fc5108f%2F681a5d6a393040f8a64f2175_topaz_hero-transcode.mp4"
      />
    </section>
  );
};

export default HeroBanner;
