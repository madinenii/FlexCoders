import React from 'react';
import NavBar from './navbar';

const WebDevelopment = () => (
    <>
    <NavBar />
  <div className="max-w-5xl mx-auto px-6 py-16 text-gray-900 dark:text-white">
    <h1 className="text-4xl font-bold mb-4 text-blue-700">Web Development</h1>
    <h2 className="text-2xl font-semibold mb-2">Modern, Scalable, and High-Performance Websites Built for Growth</h2>
    <p className="mb-6 text-lg">At GradSculpt, we craft world-class web solutions that help businesses stand out, operate efficiently, and convert more customers. From sleek corporate websites to powerful custom web applications, our development team blends strategy, creativity, and technology to deliver exceptional digital experiences.</p>
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-blue-700">⭐ What We Offer</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><span className="font-semibold">Custom Web Development:</span> We build custom websites that align perfectly with your business goals, brand identity, and user needs.<br/>No templates. No limitations. Just purpose-built digital experiences.</li>
        <li><span className="font-semibold">Responsive Website Design:</span> Your website will look and perform flawlessly on every device—desktop, tablet, and mobile—ensuring a seamless experience for all users.</li>
        <li><span className="font-semibold">E-commerce Development:</span> Powerful, secure, and scalable online stores designed to boost sales and enhance customer satisfaction.
          <ul className="list-disc ml-6">
            <li>Product & inventory management</li>
            <li>Payment gateway integration</li>
            <li>Order tracking</li>
            <li>Secure checkout systems</li>
          </ul>
        </li>
        <li><span className="font-semibold">Web Application Development:</span> We develop high-performance web applications engineered to handle complex workflows, automation, and large-scale data.
          <ul className="list-disc ml-6">
            <li>Admin dashboards</li>
            <li>Portal systems</li>
            <li>CRM tools</li>
            <li>SaaS platforms</li>
          </ul>
        </li>
        <li><span className="font-semibold">CMS Development:</span> Manage your content with ease using custom solutions built on WordPress, Webflow, or a fully custom CMS.</li>
        <li><span className="font-semibold">API Integration & Backend Development:</span> We integrate your website with third-party systems, automation tools, and custom backends using secure, scalable technology.</li>
        <li><span className="font-semibold">Website Maintenance & Support:</span> Continuous updates, security checks, performance optimization, and ongoing improvements to keep your site at peak performance.</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-blue-700">🚀 Why Choose GradSculpt for Web Development?</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>✔ Custom solutions — no cookie-cutters</li>
        <li>✔ SEO-ready architecture for maximum visibility</li>
        <li>✔ Fast loading speeds & optimized performance</li>
        <li>✔ Secure and scalable systems</li>
        <li>✔ Expert UI/UX design focused on user engagement</li>
        <li>✔ Agile development for faster delivery</li>
        <li>✔ Transparent communication and dedicated support</li>
      </ul>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-blue-700">🔧 Technologies We Use</h3>
      <div className="mb-2">
        <span className="font-semibold">Frontend:</span>
        <ul className="flex flex-wrap gap-3 mt-1">
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">React.js</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Next.js</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Vue.js</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">HTML5 / CSS3 / JavaScript</li>
        </ul>
      </div>
      <div className="mb-2">
        <span className="font-semibold">Backend:</span>
        <ul className="flex flex-wrap gap-3 mt-1">
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python / Django</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PHP / Laravel</li>
        </ul>
      </div>
      <div className="mb-2">
        <span className="font-semibold">Database & Hosting:</span>
        <ul className="flex flex-wrap gap-3 mt-1">
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">MySQL</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">MongoDB</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">AWS</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Azure</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Firebase</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">DigitalOcean</li>
        </ul>
      </div>
      <div className="mb-2">
        <span className="font-semibold">CMS:</span>
        <ul className="flex flex-wrap gap-3 mt-1">
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">WordPress</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Webflow</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Custom CMS</li>
        </ul>
      </div>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-blue-700">🛠️ Our Web Development Process</h3>
      <ol className="list-decimal ml-6 space-y-2">
        <li><span className="font-semibold">Discovery & Planning:</span> Understanding your goals, audience, and technical needs.</li>
        <li><span className="font-semibold">Wireframes & UI/UX Design:</span> Creating intuitive layouts and visual designs that match your brand.</li>
        <li><span className="font-semibold">Development:</span> Building clean, scalable, and optimized code on the latest technologies.</li>
        <li><span className="font-semibold">Testing & Quality Assurance:</span> Ensuring flawless performance, responsiveness, and security across devices.</li>
        <li><span className="font-semibold">Launch:</span> Deploying the website with full optimization and configuration.</li>
        <li><span className="font-semibold">Ongoing Support:</span> Updates, enhancements, security patches, and new features as your business grows.</li>
      </ol>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-blue-700">🌟 Industries We Serve</h3>
      <ul className="flex flex-wrap gap-3">
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Education</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Healthcare</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Real Estate</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Finance & Banking</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Retail & E-commerce</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Logistics</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Hospitality</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Startups and SMEs</li>
      </ul>
    </div>
    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2 text-blue-700">📩 Turn Your Vision Into a Powerful Web Presence</h3>
      <p className="mb-2">Whether you need a modern business website or a high-performance web platform, GradSculpt is here to help you build digital experiences that drive results.</p>
      <p className="font-semibold">👉 Contact us today to start your project.<br/>
        <a href="mailto:info@gradsculpt.in" className="text-blue-700 underline">info@gradsculpt.in</a></p>
    </div>
  </div>
  </>
);

export default WebDevelopment;
