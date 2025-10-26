import Banner from '@/components/custom/banner';
import bannerVideo from '../src/assets/videos/Careers_Banner.mp4';
import NavBar from './navbar';
import Note from '@/components/custom/note';
import trophy from '../src/assets/images/trophy.png';
import AwardBanner from '@/components/custom/award_banner';
import news1 from '../src/assets/images/careers_news.jpeg';
import news2 from '../src/assets/images/careers_news2.jpeg';
import news3 from '../src/assets/images/careers_news3.jpeg';
import NewsBanner from '@/components/custom/news_banner';
import TwoColumnSection from '@/components/custom/two_column_section';
import JobsSection from '@/components/custom/jobs_section';
import OneColumnSection from '@/components/custom/one_column_section';
import people1 from '../src/assets/images/experienced.jpeg';
import people2 from '../src/assets/images/alumni.jpeg';
import people3 from '../src/assets/images/important_notice.jpeg';
import article1 from '../src/assets/images/article1.jpeg';
import article2 from '../src/assets/images/article2.jpeg';
import article3 from '../src/assets/images/article3.jpeg';
import people from '../src/assets/images/people.png';
import tablet from '../src/assets/images/tablet.png';
import documentAlert from '../src/assets/images/document_alert.png';
import hotAirBaloon from '../src/assets/images/hot_air_baloon.jpeg';
import Footer from './footer';
import FindJobs from '@/components/custom/find_jobs';
import { useEffect, useState } from 'react';
import axios from 'axios';


const WhyWorkWithUsSection = () => {
  const reasons = [
    {
      icon: '✨', // You could replace these with actual image imports or SVG icons
      title: 'Real Impact',
      description: 'Work on projects that matter — from enterprise apps to AI solutions.',
    },
    {
      icon: '📈',
      title: 'Continuous Growth',
      description: 'Upskill with training, mentorship, and certifications.',
    },
    {
      icon: '🤝',
      title: 'Open Culture',
      description: 'Collaborate, share ideas, and learn every day.',
    },
    {
      icon: '💻',
      title: 'Tech-First Environment',
      description: 'Work with the latest frameworks, tools, and cloud platforms.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-[#A100FF] mb-12">
          💫 Why Work With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center flex flex-col items-center"
            >
              <div className="text-5xl mb-4" role="img" aria-label={reason.title}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CareerPathsSection = () => {
  const paths = [
    {
      title: '🧩 For Freshers & Early Career Professionals',
      description: 'Kickstart your journey with hands-on experience and guided learning.',
      features: [
        'Dedicated onboarding & mentorship',
        'Real-time projects from day one',
        'Certifications & growth roadmap',
      ],
      roadmap: 'Trainee → Developer → Senior Developer → Team Lead',
    },
    {
      title: '🧠 For Experienced Professionals',
      description: 'Bring your expertise — and take the lead.',
      features: [
        'Ownership of full-cycle projects',
        'Mentor junior developers',
        'Design architecture & optimize delivery',
      ],
      roadmap: 'Senior Developer → Tech Lead → Architect → Delivery Head',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-[#A100FF] mb-12">
          🚀 Career Paths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {paths.map((path, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl shadow-xl p-10 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {path.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6">{path.description}</p>
                <ul className="list-none space-y-3 mb-8">
                  {path.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-800 text-lg">
                      <svg
                        className="w-6 h-6 text-[#A100FF] mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-6 border-t border-purple-200">
                <h4 className="text-lg font-semibold text-purple-700 mb-2">Roadmap:</h4>
                <p className="text-xl font-mono text-gray-800 bg-purple-200 p-3 rounded-md inline-block">
                  {path.roadmap}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Original component data and structure ---

const bannerData = {
  video: bannerVideo,
  tagLine: 'Explore opportunities',
  bigVideo: true
}

const videoData = {
  link: 'https://www.youtube.com/embed/8STnURHpvgg?si=9Z1YqYls4RBAmuZ1',
  title: 'Discover stories of change from A to Z',
  description: 'Meet our exceptional people who are living their purpose and making a real, lasting, positive difference.',
  transcript: true
}

const videoData2 = {
  link: 'https://www.youtube.com/embed/KE4mPYpkqpM?si=MuU4lFkCQlLt376k',
  title: 'Creating 360° value with CMHC',
  description: 'When you see value in every direction, you add lasting value in every direction. ​See how.',
  transcript: true
}

const peopleData = [
  {
    image: people1,
    title: 'Experienced Professionals',
    description: 'Take your expertise to the next level as you innovate with the biggest clients to solve their biggest challenges.'
  },
  {
    image: people2,
    title: 'Accenture Alumni',
    description: 'Reconnect with us and harness your breadth of knowledge to reimagine the way we transform organizations.'
  },
  {
    image: people3,
    title: 'Important Notice',
    description: "Accenture's criterion for hiring candidates is merit."
  }
];

const articleData = [
  {
    image: article1,
    title: 'Accelerating equality for all',
    description: 'Through our commitment to inclusion and diversity, we’re creating a culture where everyone can thrive and advance.'
  },
  {
    image: article2,
    title: 'Building a more sustainable world',
    description: 'We’re making sustainability one of our greatest responsibilities, embedding it into everything we do.'
  },
  {
    image: article3,
    title: 'Driving change for our people, clients and communities',
    description: "See why we’re recognized as a great employer, global leader and corporate citizen."
  }
];

const articleData2 = [
  {
    image: people,
    title: 'Join Our Team',
    description: 'Search open positions that match your skills and interest. We look for passionate, curious, creative and solution-driven team players.',
    link: 'SEARCH ACCENTURE JOBS',
    variant: '2'
  },
  {
    image: tablet,
    title: 'Keep Up to Date',
    description: 'Stay ahead with careers tips, insider perspectives, and industry-leading insights you can put to use today–all from the people who work here.',
    link: 'READ CAREERS BLOG',
    variant: '2'
  },
  {
    image: documentAlert,
    title: 'Job Alert Emails',
    description: "Personalize your subscription to receive job alerts, latest news and insider tips tailored to your preferences. See what exciting and rewarding opportunities await.",
    link: 'REGISTER FOR JOB ALERTS',
    variant: '2'
  }
];

const CareersHome = () => {

  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    async function getJobData() {
      try {
        const res = await axios({
          method: 'GET',
          url: import.meta.env.VITE_ENVIRONMENT === 'development' ? `${ import.meta.env.VITE_DEV_BASE_URL }/jobs` : `${ import.meta.env.VITE_PROD_BASE_URL }/jobs`,
        });
        setJobs(res.data.data.jobs);
        // console.log(res.data.data.jobs);
      } catch(err) {
        return err;
      }
    }
    getJobData().then(() => {});
  }, []);
  
  return (
    <>
      <NavBar careers={ true } />
      
      {/* Introduction Section */}
      <div className="max-w-3xl mx-auto py-12 px-4 mt-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-[#A100FF]">Innovate. Build. Grow. Together.</h1>
        <p className="mb-4 text-xl text-gray-700">At GradSculpt, we’re not just creating software — we’re shaping the digital future.</p>
        <p className="mb-4 text-xl text-gray-700">We bring together passionate people and powerful technology to solve real-world challenges.</p>
        <p className="mb-8 text-xl text-gray-700">If you’re curious, driven, and ready to grow, your journey starts here.</p>
      </div>

      {/* New sections for "Why Work With Us" and "Career Paths" */}
      <WhyWorkWithUsSection />
      <CareerPathsSection />

      {/* Rest of your existing (commented-out) components */}
      {/* <Banner buttons={ true } data={ bannerData }>
        <h1 className="text-6xl font-extrabold mb-6 leading-3">Discover your</h1>
        <h1 className="text-6xl font-extrabold mb-6">new career</h1>
      </Banner>
      <Note note='We have been alerted to the existence of fraudulent messages asking job seekers to set up payment to cover various costs associated with establishing employment at Accenture. No one is ever required to pay for employment at Accenture. If you are contacted by someone asking for payment, please do not respond, and'>
        <p>contact us at <a href="#" className='text-blue-700 underline'>india.fc.check@accenture.com</a> immediately.</p>
      </Note>
      <AwardBanner icon={ trophy } title='WORLD’S BEST WORKPLACES 2022' description='We’re a Great Place to Work!' background={ true } />
      <div className="bg-[#F2F2F2] p-8">
        <NewsBanner background={ false } title='FRESHER CAREER' subTitle='Looking for Fresher jobs? Learn more about our Technology careers for Freshers.' image={ news1 } />
        <NewsBanner background={ false } title='JOIN OUR INDUSTRY X TEAM ' subTitle='Scale new career heights by working on innovative engineering and manufacturing projects.' image={ news2 } />
      </div>
      <TwoColumnSection background={ false } title='Work at the heart of change' video={ true } videoData={ videoData }>
        <div className='text-lg'>
          <p className='mb-4'>At the heart of every great change is a great human. Every day our <a href="#" className='text-blue-500 underline'>People of Change</a> are doing incredible things by working together to pursue our shared purpose–to deliver on the promise of technology and human ingenuity.</p>
          <p className='mb-4'>Come be part of our team with Accenture India careers – bring your ideas, ingenuity and determination to make a difference, and we’ll solve some of the world’s biggest challenges.</p>
          <p className='mb-4'>Across industries and around the globe, we work with exceptional people and leading companies—using advanced technologies, data and AI to create 360° value for our clients, people and communities.</p>
          <p className='mb-4'>Join us and help our clients become the next and best versions of themselves.</p>
          <h3 className='text-3xl font-bold mb-4'>Come join us</h3>
          <a href="#" className='text-blue-700 font-bold'>STRATEGY AND CONSULTING CAREERS</a>
          <a href="#" className='text-blue-700 font-bold'>DIGITAL CAREERS</a>
          <a href="#" className='text-blue-700 font-bold'>TECHNOLOGY CAREERS</a>
          <a href="#" className='text-blue-700 font-bold'>OPERATIONS CAREERS</a>
          <a href="#" className='text-blue-700 font-bold'>DIGITAL ENGINEERING AND MANUFACTURING CAREERS</a>
        </div>
      </TwoColumnSection>
      <div className='py-10 font-bold bg-[#F2F2F2]'>
        <div className="lg:w-[75rem] lg:px-0 w-full mx-auto px-16">
          <JobsSection jobs={ jobs } title='Latest Jobs in Pune' description='These jobs are in the city indicated by your IP address. To change countries, use the flag icon in the navigation.' explore={ true } />
        </div>
      </div>
      <NewsBanner title='THE ACCENTURE 360° VALUE REPORTING EXPERIENCE' subTitle='Measuring our success by the value we deliver in all directions.' />
      <OneColumnSection title='Explore Accenture jobs' description='Start an Accenture career in India and help us make a difference.' people={ true } peopleData={ peopleData } />
      <OneColumnSection title='Creating a powerful force for change' description='Leadership is everyone’s responsibility with a career at Accenture India. We expect all our people and enable us to successfully create 360° value.' background={ false } article={ true } articleData={ articleData } />
      <div className="bg-[#F2F2F2] pb-8 pt-3">
        <NewsBanner image={ news3 } title='TECHNOLOGY VISION 2023' subTitle='When Atoms meet Bits' background={ false } />
      </div>
      <TwoColumnSection
        title='Accenture change in action'
        video={ true }
        videoData={ videoData2 }
        background={ false }
        description={[
          'A digital strategy for the future comes home.'
        ]}
      >
        <div className="text-lg">
          <p>Accenture helped <strong>Canada Mortgage and Housing Corporation (CMHC)</strong> achieve an ambitious goal: Ensuring everyone in Canada has a home they can afford and that meets their needs by 2030.</p>
          <a href="#" className="text-blue-700 my-8 block font-bold">LEARN MORE</a>
        </div>
      </TwoColumnSection>
      <TwoColumnSection
        title='Get ready to start your Accenture journey'
        description={[
          'Find answers to frequently asked questions, learn about our hiring process and get tips on how to apply and prepare for your role doing incredible things and creating long-lasting value.'
        ]}
        image={ true }
        imageLink={ hotAirBaloon }
      >
        <a href="#" className='text-blue-700 font-bold text-lg'>LEARN MORE</a>
      </TwoColumnSection>
      <OneColumnSection
        title='Stay connected'
        article={ true }
        articleData={ articleData2 }
        articleVariant='2'
      /> */}
      <Footer findJobs={ true } />
      {/* <FindJobs /> */}
    </>
  );
}

export default CareersHome;