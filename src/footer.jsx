import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, MoveRight, Twitter, X, Youtube } from "lucide-react";
import logo from '../src/assets/images/logo.png';

const Footer = ({ findJobs, subscription=true }) => {
  return (
    <div className={ `lg:px-44 px-24 py-8 bg-black ${ findJobs ? 'pb-24' : '' }` }>
      { subscription && (
        <>
          <h1 className="text-2xl text-white">Visit our Subscription and Preference Center</h1>
          <button className="text-4xl text-white font-medium flex h-12 relative my-8 before:content-[''] before:p-4 before:w-12 before:rounded-full before:bg-transparent before:border-2 before:border-white before:transition-all before:top-0 before:bottom-0 before:my-auto hover:before:w-[105%] before:absolute before:-left-1 px-4">
            <MoveRight className='mr-4 mt-auto mb-auto w-12 h-12 font-light' />
            Subscribe
          </button>
          <Separator className='bg-gray-400' />
        </>
      ) }
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12 px-8 lg:px-44">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <div className="flex items-center mb-6 lg:mb-0">
            <img src={logo} alt="Logo Without Text" className="w-16 h-16 mr-4 rounded-full shadow-lg" />
            <div>
              <h1 className="text-3xl font-bold tracking-wide">GradSculpt</h1>
              <p className="text-lg text-gray-300">Shaping Futures, Empowering Talent</p>
            </div>
          </div>
          <div className="flex space-x-6">
            {/* <a href="#" className="hover:text-blue-400 transition"><Linkedin className="w-7 h-7" /></a> */}
            <a href="https://x.com/GradSculpt_pvt" className="hover:text-blue-400 transition"><Twitter className="w-7 h-7" /></a>
            <a href="https://www.instagram.com/gradsculpt.pvt.ltd?igsh=aGtlN3JxdnFwa2k1" className="hover:text-blue-400 transition"><Instagram className="w-7 h-7" /></a>
            {/* <a href="#" className="hover:text-blue-400 transition"><Facebook className="w-7 h-7" /></a> */}
            {/* <a href="#" className="hover:text-red-500 transition"><Youtube className="w-7 h-7" /></a> */}
          </div>
        </div>
        <Separator className='bg-gray-700 mb-8' />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-gray-300">
          <div>
            <h2 className="font-semibold text-lg mb-4 text-white">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Locations</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-4 text-white">Resources</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Events</a></li>
              <li><a href="#" className="hover:text-blue-400">Webinars</a></li>
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-4 text-white">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Privacy Statement</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-4 text-white">Subscribe</h2>
            <form className="flex flex-col space-y-3">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition">Subscribe</button>
            </form>
          </div>
        </div>
        <Separator className='bg-gray-700 mb-8' />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-400">Sitemap</a>
            <a href="#" className="hover:text-blue-400">Accessibility Statement</a>
          </div>
          <div>
            <p>© 2023 GradSculpt. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;