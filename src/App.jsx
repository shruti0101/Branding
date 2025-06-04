import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import Layout from './Layout';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';

// Placeholder components for demonstration
const OurApproach = () => <div>Our Approach</div>;
const WhoWeAre = () => <div>Who We Are</div>;
const Blogs = () => <div>Blogs</div>;
const ClientReviews = () => <div>Client Reviews</div>;
const WordPressWebsite = () => <div>WordPress Website</div>;
const PHPWebsiteDevelopment = () => <div>PHP Website Development</div>;
const CMSWebDevelopment = () => <div>CMS Web Development</div>;
const MernWebDevelopment = () => <div>Mern Web Development</div>;
const EcommerceWebDesigning = () => <div>Ecommerce Web Designing</div>;
const SEOWebDesigning = () => <div>SEO Web Designing</div>;
const WebsiteRedesigning = () => <div>Website Redesigning</div>;
const PerformanceMarketing = () => <div>Performance Marketing</div>;
const B2BMarketing = () => <div>B2B Marketing</div>;
const LeadGenerations = () => <div>Lead Generations</div>;
const AIPerformanceMarketingServices = () => <div>AI Performance Marketing Services</div>;
const AdsManagement = () => <div>Ads Management</div>;
const InternetMarketing = () => <div>Internet Marketing</div>;
const ContentMarketing = () => <div>Content Marketing</div>;
const CRMOptimizations = () => <div>CRM Optimizations</div>;
const EmailMarketing = () => <div>Email Marketing</div>;
const VideoMarketing = () => <div>Video Marketing</div>;
const SocialMediaAds = () => <div>Social Media Ads</div>;
const SMO = () => <div>SMO</div>;
const SMM = () => <div>SMM</div>;
const AIDigitalMarketingServices = () => <div>AI Digital Marketing Services</div>;
const ECommerceSEOServices = () => <div>E-Commerce SEO Services</div>;
const DigitalMarketingServices = () => <div>Digital Marketing Services</div>;
const EnterpriseSEOServices = () => <div>Enterprise SEO Services</div>;
const AISEOServices = () => <div>AI SEO Services</div>;
const FreeSEOAudit = () => <div>Free SEO Audit</div>;

function App() {
  return (
    <div>

    <CustomCursor></CustomCursor>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />

        {/* Company Profile */}
        <Route path="profile/OurApproach" element={<OurApproach />} />
        <Route path="profile/whoweare" element={<WhoWeAre />} />
        <Route path="profile/blogs" element={<Blogs />} />
        <Route path="profile/reviews" element={<ClientReviews />} />

        {/* Website Development */}
        <Route path="services/design" element={<WordPressWebsite />} />
        <Route path="services/development" element={<PHPWebsiteDevelopment />} />
        <Route path="services/marketing" element={<CMSWebDevelopment />} />
        {/* Add more specific routes as needed */}
        <Route path="services/mern" element={<MernWebDevelopment />} />
        <Route path="services/ecommerce" element={<EcommerceWebDesigning />} />
        <Route path="services/seo" element={<SEOWebDesigning />} />
        <Route path="services/redesign" element={<WebsiteRedesigning />} />

        {/* Revenue Marketing & CRO */}
        <Route path="services/performance" element={<PerformanceMarketing />} />
        <Route path="services/b2b" element={<B2BMarketing />} />
        <Route path="services/leads" element={<LeadGenerations />} />
        <Route path="services/ai-performance" element={<AIPerformanceMarketingServices />} />
        <Route path="services/ads" element={<AdsManagement />} />
        <Route path="services/internet" element={<InternetMarketing />} />

        {/* Digital Marketing */}
        <Route path="services/content" element={<ContentMarketing />} />
        <Route path="services/crm" element={<CRMOptimizations />} />
        <Route path="services/email" element={<EmailMarketing />} />
        <Route path="services/video" element={<VideoMarketing />} />
        <Route path="services/social" element={<SocialMediaAds />} />
        <Route path="services/smo" element={<SMO />} />
        <Route path="services/smm" element={<SMM />} />

        {/* Guaranteed SEO */}
        <Route path="services/ai-digital" element={<AIDigitalMarketingServices />} />
        <Route path="services/ecommerce-seo" element={<ECommerceSEOServices />} />
        <Route path="services/digital-seo" element={<DigitalMarketingServices />} />
        <Route path="services/enterprise-seo" element={<EnterpriseSEOServices />} />
        <Route path="services/ai-seo" element={<AISEOServices />} />

        {/* Free SEO Audit */}
        <Route path="boost" element={<FreeSEOAudit />} />
      </Route>
    </Routes>

    <ScrollToTop></ScrollToTop>
    </div>

  );
}

export default App;