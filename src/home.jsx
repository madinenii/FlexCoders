import image1 from '../src/assets/images/image1.jpeg';
import image2 from '../src/assets/images/image2.jpeg';
import image3 from '../src/assets/images/image3.jpeg';
import heroVideo from './assets/videos/hero.mp4';
import Bg from './assets/videos/Bg.mp4';
import { ChevronRight, MoveRight } from 'lucide-react';
import { CarouselSection } from './carousel';
import dancingGirlVideo from './assets/videos/Accenture-dancing-girl.mp4';
import video from './assets/videos/video_reveal.mp4';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Footer from './footer';
import IndexSection from '@/components/custom/index_section';
import InsightsSection from '@/components/custom/insights_section';
import NavBar from './navbar';

const indexData = {
  image: true,
  centered: false,
  progress: true,
  links: ['Case studies & stories', 'Join our team', 'Ideas that make an impact', 'Leading through change'],
  ids: ['latest_insights', 'why_it_matters', 'how_is_it_different', 'offer', 'preparation']
};

const insightCardData = [
  {
    image: image1,
    tag: 'Technology',
    title: 'Technology Vision 2023',
    description: 'When Atoms meet Bits: The foundations of our new reality.',
    class: ''
  },
  {
    image: image2,
    tag: 'Talent & Organization',
    title: 'Refocus your talent lens',
    description: 'Discover how multinational companies can unlock the potential of more labor markets and access highly skilled talent.',
    class: 'mt-[3rem]'
  },
  {
    image: image3,
    tag: 'Song',
    title: 'A life-centric approach to growth',
    description: 'Accenture Song identifies challenges and opportunities for growth across key areas across the front office.',
    class: 'mt-[6rem]'
  },
  {
    image: image2,
    tag: 'Cloud',
    title: 'Five practices to thrive on the Cloud Continuum',
    description: 'Accenture details 5 cloud transformation practices to help companies extract maximum value.',
    class: 'mt-[9rem]'
  },
];

const Home = () => {
  const imageReveal = useRef(null);
  const title = useRef(null);
  const videoReveal = useRef(null);
  const videoTitle = useRef(null);
  const scaleVideo = useRef(null);
  const [revealTextVisible, setRevealTextVisible] = useState(false);
  
  useEffect(() => {
    if (!imageReveal.current || !videoReveal.current) return;

    const containerTop = imageReveal.current.offsetTop;
    const scaleRatio = Math.pow(10, 4/imageReveal.current.clientHeight);
    const videoScaleRatio = Math.pow(10, 4/videoReveal.current.clientHeight);
    const videoTop = videoReveal.current.offsetTop;
    
    const handleScroll = () => {
      if (!title.current || !videoTitle.current) return;

      if (window.scrollY > containerTop && window.scrollY < containerTop + imageReveal.current.getBoundingClientRect().height) {
        let scrollPosition = window.scrollY - containerTop;
        let scaleAmount = Math.pow(scaleRatio, scrollPosition);
        title.current.style.transform = `scale(${ scaleAmount })`;
        if (scaleAmount > 2) {
          title.current.style.transform = `scale(25)`;
          if (window.scrollY > containerTop + 300 && !revealTextVisible) setRevealTextVisible(true);
        }
      } if (window.scrollY > videoTop) {
        let scrollPosition = window.scrollY - videoTop;
        let scaleAmount = Math.pow(videoScaleRatio, scrollPosition);
        videoTitle.current.style.transform = `scale(${ 25 - scaleAmount })`;
        if (scaleAmount > 16) {
          videoTitle.current.style.transform = `scale(1)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [revealTextVisible]);

  useEffect(() => {
    if (revealTextVisible) {
      gsap.from('.reveal_text', {
        y: '4rem',
        opacity: 0,
        stagger: 0.2
      });
    }
  }, [revealTextVisible]);
  
  return (
    <div className="overflow-x-hidden w-full">
      <NavBar />
      
      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden w-full h-[80vh]">
        
        {/* Video Background */}
        <video 
            muted 
            loop 
            autoPlay 
            src={ Bg } 
            className='absolute top-0 left-0 min-h-full min-w-full object-cover z-0' 
        />
        
        {/* FIX APPLIED HERE:
           1. Changed 'top-0' to 'top-20' (or top-24) to push the overlay down, exposing the Navbar.
           2. Changed 'h-full' to 'h-[calc(100%-5rem)]' so the overlay fits the remaining space exactly.
        */}
        <div className="absolute top-20 left-0 w-full h-[calc(100%-5rem)] flex flex-col lg:flex-row justify-center lg:justify-between items-center px-6 lg:px-12 z-10">
            
            {/* Left Side Text */}
            <div className="text-black w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0"> 
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    Building Tomorrow With <br className="hidden lg:block" /> Todays Code
                </h1>
                <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto lg:mx-0">
                    Discover how our research, innovation, and real-world success stories empower businesses to turn change into growth.
                </p>
            </div>

            {/* Right Side Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
    <img 
        src="src/assets/images/Girl.jpg" 
        className="w-48 md:w-60 lg:w-72 rounded shadow-lg object-cover" 
        alt="Hero Visual" 
    />
</div>

        </div>
      </div>

      <CarouselSection />

      {/* --- REST OF THE CODE (UNCHANGED) --- */}
      {/* <div className="w-full xl:h-[160vh] mt-12" ref={ imageReveal }>
        <div className='h-[90vh] overflow-hidden xl:sticky xl:top-32 bg-white flex xl:flex-row flex-col justify-center items-center xl:items-start'>
          <ChevronRight className='hidden xl:block w-[45rem] h-[45rem] xl:absolute origin-[62%_50%]' ref={ title } />
          <div className='relative w-full xl:w-auto h-full'>
            <video src={ dancingGirlVideo } alt="" className='xl:mix-blend-screen w-full h-full object-cover' />
            { revealTextVisible && (
              <div className="flex absolute w-full md:w-96 px-6 md:px-0 left-0 md:left-20 top-20 flex-col text-white text-xl z-[4]">
                <p className="text-2xl md:text-3xl h-fit reveal_text font-bold">Reimagine your career</p>
                <p className='my-4 h-fit reveal_text text-sm md:text-base'>Your career is about what you want to be and who you want to be. It’s about bringing your skills, your curiosity and your best true self to your work.</p>
                <p className='h-fit reveal_text text-sm md:text-base'>Here, you’ll match your ingenuity with the latest technology to make incredible things.</p>
                <p className='my-4 h-fit reveal_text text-sm md:text-base'>Together, let’s create positive, long-lasting value.</p>
                <button className="flex h-fit reveal_text items-center relative before:content-[''] before:p-4 before:w-0 before:rounded-full before:bg-transparent before:border before:border-white before:transition-all before:top-0 before:bottom-0 before:my-auto hover:before:w-[105%] before:absolute before:-left-1 px-4 mt-4">
                  <MoveRight className='mr-4 text-white font-light' />
                  SEARCH AND APPLY
                </button>
              </div>
            ) }
          </div>
        </div>
      </div> */}

      <InsightsSection data={ insightCardData } centered={ true } title='Insights to help you stay ahead of change' description='From insights to action, the path to 360° value starts here.' />

      {/* <div className="w-full xl:h-[160vh] mt-12" ref={ videoReveal }>
        <div className={ `flex xl:flex-row flex-col justify-center items-start w-full h-[90vh] overflow-hidden xl:sticky xl:top-[120px] bg-white` } ref={ scaleVideo } >
          <ChevronRight className={ `hidden xl:block w-[45rem] h-[45rem] border-5 border-black xl:absolute origin-[62%_50%] scale-[25]` } ref={ videoTitle } />
          <div className="relative w-full h-full">
            <video src={ video } autoPlay loop className='xl:mix-blend-screen object-cover w-full h-full' />
            { revealTextVisible && (
              <div className="flex absolute w-full md:w-80 px-6 md:px-0 left-0 md:left-20 bottom-10 md:bottom-20 flex-col text-white text-xl bg-black/30 md:bg-transparent p-4 md:p-0 rounded-lg">
                <p className="text-2xl md:text-3xl h-fit reveal_text font-bold">Reimagine your career</p>
                <p className='my-4 h-fit reveal_text text-sm md:text-base'>Your career is about what you want to be and who you want to be. It’s about bringing your skills, your curiosity and your best true self to your work.</p>
                <p className='h-fit reveal_text text-sm md:text-base'>Here, you’ll match your ingenuity with the latest technology to make incredible things.</p>
                <p className='my-4 h-fit reveal_text text-sm md:text-base'>Together, let’s create positive, long-lasting value.</p>
                <button className="flex h-fit reveal_text items-center relative before:content-[''] before:p-4 before:w-0 before:rounded-full before:bg-transparent before:border before:border-white before:transition-all before:top-0 before:bottom-0 before:my-auto hover:before:w-[105%] before:absolute before:-left-1 px-4 mt-2">
                  <MoveRight className='mr-4 text-white font-light' />
                  SEARCH AND APPLY
                </button>
              </div>
            ) }
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default Home;