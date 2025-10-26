import SearchSection from "@/components/custom/search_section";
import NavBar from "./navbar";
import JobsSection from "@/components/custom/jobs_section";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import OneColumnSection from "@/components/custom/one_column_section";
import people from '../src/assets/images/people.png';
import tablet from '../src/assets/images/tablet.png';
import documentAlert from '../src/assets/images/document_alert.png';
import Footer from "./footer";

// New component for the Fresher content
const FresherHeroSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="lg:w-[75rem] mx-auto px-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-[#A100FF] mb-4">
          For Experienced Professionals
        </h1>
        <p className="text-xl lg:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
         Bring your expertise — and take the lead.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {['Ownership of full-cycle projects', 'Mentor junior developers', 'Design architecture & optimize delivery'].map((feature, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full shadow-md">
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Career Path</h2>
          <p className="text-lg text-gray-600 font-mono tracking-wider">
            Senior Developer &rarr; Tech Lead &rarr; Architect  &rarr; Delivery Head
          </p>
        </div>
      </div>
    </div>
  );
};


async function getJobData() {
  try {
    const res = await axios({
      method: 'GET',
      url: import.meta.env.VITE_ENVIRONMENT === 'development' ? `${ import.meta.env.VITE_DEV_BASE_URL }/jobs` : `${ import.meta.env.VITE_PROD_BASE_URL }/jobs`,
    });
    return res.data.data.jobs;
  } catch(err) {
    return err;
  }
}

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

const ExperiencePage = () => {
  const [jobs, setJobs] = useState([]);
  const query = useQuery('jobs', getJobData);
  
  return (
    <div className="mt-16">
      <NavBar careers={ true } />
      <FresherHeroSection /> {/* Insert the new section here */}
      
      {/* Keeping the commented-out job section just in case, though the new hero section is inserted */}
      {/* <SearchSection setJobs={ setJobs } />
      <div className="flex items-center justify-center min-h-[30rem]">
        { query.isLoading ?
          <p className="text-6xl text-[#A100FF]">Loading....</p>
          :
          <div className='py-10 font-bold'>
            <div className="lg:w-[75rem] lg:px-0 w-full mx-auto px-16">
              <JobsSection title='Latest Jobs' jobs={ query.data } recents={ false } actions={ true } />
            </div>
          </div>
        }
      </div> */}
      
      {/* <OneColumnSection
        title='Stay connected'
        article={ true }
        articleData={ articleData2 }
        articleVariant='2'
      /> */}
      <Footer subscription={ false } />
    </div>
  );
}

export default ExperiencePage;