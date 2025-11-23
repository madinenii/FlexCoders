import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavLinks = [
  'EdTech',
  'HealthCare',
  'Finance & Banking',
  'Retail & E-Commerce',
  'Logistic & Transportation',
  'Manufacturing',
  'Media & Entertainment',
  'Travel & Hospitality',
  'AgriTech'
]

const X=['Sart Your Journey Elevate Your Career.”']
const CustomDropdown = ({ twoColumn, data, levelled }) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex content-between data-[state=open]:pointer-events-auto h-16 hover:bg-transparent focus:bg-transparent hover:border-b-4 border-black rounded-none transition-all'>
          <p className='text-base font-normal mr-2'>{ data.name }</p>
          <ChevronDown className='w-4 h-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-screen flex py-10 px-32 -mt-1 overflow-y-auto max-h-[80vh]'>
        { twoColumn && !levelled && data.name === 'What We Think' && (
          <DropdownMenuGroup className='w-full flex flex-col px-16'>
            {data.content.description && (
              <span className='text-4xl font-bold mb-4'>{data.content.description}</span>
            )}
            {data.content.contentDescription && (
              <span className='text-2xl font-normal'>{data.content.contentDescription}</span>
            )}
          </DropdownMenuGroup>
        )}
        { !twoColumn && !levelled && (
          <DropdownMenuGroup className='w-full flex flex-col px-16'>
    {data.content?.title && (
      <span className='text-lg mb-6 font-bold'>{data.content.title}</span>
    )}
    <ul className='flex flex-col gap-4'>
      {data.subLinks?.map(link => (
        <li key={link.name} className='text-base font-normal'>
          <Link
            to={link?.to ? `/${link.to}` : ''}
            className={`text-black ${!link.to && 'cursor-default'}`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
          </DropdownMenuGroup>
        )}

        {twoColumn && !levelled && data.name !== 'What We Think' && (
          <DropdownMenuGroup className='w-full flex flex-row gap-24 px-16'>
            <div className='flex flex-col w-1/2'>
              <span className='text-lg mb-6 font-bold'>{data.content.title}</span>
              <ul className='flex flex-col gap-4'>
                {data.subLinks?.map(link => (
                  <li key={link.name} className='text-base font-normal'>
                    <Link to={link?.to ? link.to : ''} className={`text-blue-600 hover:underline ${!link.to && 'cursor-default'}`}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col w-1/2'>
              <span className='text-lg mb-6 font-bold'>Industries</span>
              <ul className='flex flex-col gap-4'>
                {/* {console.log(data, 'data')} */}
                {NavLinks.map((industry, idx) => (
                  <li key={idx} className='text-base font-normal'>
                    <span className='text-black'>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </DropdownMenuGroup>
        )}
        { levelled && data.name === 'About GradSculpt' && (
          <DropdownMenuGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-6">
            {/* Card: About Us */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500">
              <h2 className="text-2xl font-bold mb-2">About Us – GradSculpt</h2>
              <p className="text-base mb-2 font-semibold">Welcome to GradSculpt</p>
              <p className="text-gray-700 mb-2">GradSculpt is a forward-thinking IT company dedicated to delivering innovative technology solutions that transform businesses globally. Since our inception, we have been committed to empowering organizations with digital tools, intelligent applications, and IT services that drive efficiency, scalability, and growth.</p>
              <p className="text-gray-700">We believe that technology should not just solve problems—it should inspire innovation, enhance experiences, and create measurable impact. At GradSculpt, we combine technical excellence with creativity and strategy to help our clients thrive in a rapidly evolving digital landscape.</p>
            </div>
            {/* Card: Our Journey */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500">
              <h2 className="text-xl font-bold mb-2">Our Journey</h2>
              <p className="text-gray-700 mb-2">Founded with a vision to redefine the IT services landscape, GradSculpt began as a small team of passionate technologists focused on providing high-quality software solutions. Over the years, we have grown into a full-fledged IT company with a strong portfolio of projects, satisfied clients, and a reputation for excellence.</p>
              <p className="text-gray-700">Our journey has been driven by a single guiding principle: to deliver value through technology. By understanding the unique needs of each client, we have been able to craft solutions that not only meet requirements but exceed expectations.</p>
            </div>
            {/* Card: Our Mission */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500">
              <h2 className="text-xl font-bold mb-2">Our Mission</h2>
              <p className="text-gray-700 mb-2">At GradSculpt, our mission is to empower businesses through innovative technology solutions. We strive to:</p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Deliver high-performance software tailored to business objectives.</li>
                <li>Leverage emerging technologies, including AI, cloud computing, and analytics, to enable data-driven decision-making.</li>
                <li>Build long-term client relationships based on trust, transparency, and results.</li>
                <li>Foster a culture of creativity, collaboration, and continuous learning within our team.</li>
              </ul>
            </div>
            {/* Card: Our Vision */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500">
              <h2 className="text-xl font-bold mb-2">Our Vision</h2>
              <p className="text-gray-700">To be recognized globally as a trusted partner for digital transformation, providing cutting-edge IT solutions that enable businesses to succeed and adapt in an ever-changing technological landscape.</p>
            </div>
            {/* Card: Our Services */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500 col-span-1 md:col-span-2">
              <h2 className="text-xl font-bold mb-2">Our Services</h2>
              <ul className="list-decimal ml-6 text-gray-700">
                <li><span className="font-semibold">Software Development:</span> We build custom web, mobile, and enterprise applications tailored to specific business needs. From ideation to deployment, our solutions are designed for performance, scalability, and usability.</li>
                <li><span className="font-semibold">Cloud Solutions & DevOps:</span> GradSculpt helps organizations migrate to the cloud, develop cloud-native applications, and automate operations using modern DevOps practices. We focus on scalability, security, and high availability.</li>
                <li><span className="font-semibold">Data Analytics & AI Solutions:</span> We empower businesses with actionable insights through big data analytics, AI, and machine learning. Our solutions help optimize processes, predict trends, and make data-driven decisions.</li>
                <li><span className="font-semibold">UI/UX Design & Digital Experience:</span> We design intuitive, responsive, and user-centric interfaces that enhance digital experiences, increase engagement, and strengthen brand identity.</li>
                <li><span className="font-semibold">IT Consulting & Strategy:</span> Our consulting services help organizations identify technology gaps, plan digital transformation roadmaps, and implement solutions that align with business goals.</li>
              </ul>
            </div>
            {/* Card: Leadership & Team */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500">
              <h2 className="text-xl font-bold mb-2">Leadership & Team</h2>
              <p className="text-gray-700 mb-2">GradSculpt is led by a team of seasoned IT professionals with years of experience in global technology projects. Our leadership emphasizes innovation, client satisfaction, and employee growth.</p>
              <p className="text-gray-700">Our team comprises developers, designers, data scientists, cloud experts, and IT strategists—all working collaboratively to deliver cutting-edge solutions that meet industry standards and client expectations.</p>
            </div>
            {/* Card: Our Core Values */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500">
              <h2 className="text-xl font-bold mb-2">Our Core Values</h2>
              <ul className="list-disc ml-6 text-gray-700">
                <li><span className="font-semibold">Innovation:</span> Constantly exploring new technologies and methods to deliver smarter solutions.</li>
                <li><span className="font-semibold">Excellence:</span> Ensuring the highest standards in every product, service, and engagement.</li>
                <li><span className="font-semibold">Integrity:</span> Building trust through transparency, honesty, and ethical practices.</li>
                <li><span className="font-semibold">Collaboration:</span> Partnering with clients and internally fostering teamwork to achieve shared success.</li>
                <li><span className="font-semibold">Customer Focus:</span> Delivering solutions that drive measurable business outcomes.</li>
              </ul>
            </div>
            {/* Card: Industries We Serve */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500">
              <h2 className="text-xl font-bold mb-2">Industries We Serve</h2>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Finance & Banking</li>
                <li>Healthcare & Life Sciences</li>
                <li>Retail & E-commerce</li>
                <li>Education & E-learning</li>
                <li>Manufacturing & Supply Chain</li>
                <li>Media & Entertainment</li>
                <li>Each solution is tailored to the unique challenges of the industry, ensuring that our clients gain a competitive advantage.</li>
              </ul>
            </div>
            {/* Card: Our Achievements */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500">
              <h2 className="text-xl font-bold mb-2">Our Achievements</h2>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Successfully delivered 100+ software solutions across web, mobile, and enterprise platforms.</li>
                <li>Partnered with 20+ global clients to drive digital transformation.</li>
                <li>Recognized for excellence in AI and cloud-based solutions.</li>
                <li>Developed innovative products that improved operational efficiency by 30–50% for clients.</li>
              </ul>
            </div>
            {/* Card: Why Choose GradSculpt? */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500">
              <h2 className="text-xl font-bold mb-2">Why Choose GradSculpt?</h2>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Proven expertise in delivering high-quality, reliable IT solutions.</li>
                <li>Agile methodology ensures fast, efficient, and adaptable project execution.</li>
                <li>Dedicated team committed to innovation, quality, and client success.</li>
                <li>Focus on long-term partnerships rather than just transactions.</li>
                <li>Continuous adoption of emerging technologies to keep clients ahead in the market.</li>
              </ul>
            </div>
            {/* Card: Our Commitment */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col border-t-4 border-blue-500 col-span-1 md:col-span-2">
              <h2 className="text-xl font-bold mb-2">Our Commitment</h2>
              <p className="text-gray-700 mb-2">At GradSculpt, we are committed to helping businesses unlock their full digital potential. From strategy and development to deployment and support, we ensure that every solution we deliver is innovative, scalable, and impactful.</p>
      <p className="text-gray-700">We partner with our clients to turn challenges into opportunities and ideas into reality.<br/>GradSculpt – Transforming businesses with technology, innovation, and excellence.</p>
            </div>
          </DropdownMenuGroup>
        )}
        { levelled && (
          <DropdownMenuGroup>
            {
              data.levels?.map((level, i) => (
                <div key={ i }>
                  <div className='py-10'>
                    {level.title && <span className='text-lg mb-3 font-bold'>{level.title}</span>}
                    <DropdownMenuItem key={i} className='text-[17px] flex content-between items-start pl-0 leading-10 text-blue-700 font-normal focus:bg-transparent focus:text-blue-700 hover:text-blue-700 hover:bg-transparent flex-wrap' onClick={() => setOpen(false)}>
                      {
                        level.links.map(link => (
                          <Link to={ link?.to ? link.to : '' } className={ `w-[25%] max-w-[25%] ${ level.size === 'big' && 'text-3xl' } ${ !link.to && 'text-black cursor-default' }` } key={ link.name ? link.name : link }>{ link?.name ? link.name : link }</Link>
                        ))
                      }
                    </DropdownMenuItem>
                  </div>
                  { (i < data.levels.length - 1) && <DropdownMenuSeparator className='bg-slate-300' /> }
                </div>
              ))
            }
          </DropdownMenuGroup>
        ) }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CustomDropdown;