"use client";
import { ChevronDown, Star, ArrowRight, Globe, Smartphone, Palette, CreditCard, MapPin, ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { track } from '@vercel/analytics';

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Custom Website Development",
      desc: "Professional, responsive websites tailored to your business needs and brand identity."
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Custom iOS Applications",
      desc: "Native iOS mobile applications designed to solve your specific business challenges and reach your customers on their phones."
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Logo Design",
      desc: "Custom logo designs that represent your brand identity and make your business memorable and professional."
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Business Card Designs",
      desc: "Professional business card designs that complement your brand and make a lasting impression on potential clients."
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Google Business Presence",
      desc: "Complete Google Business setup and maintenance to help your business get found locally and build online credibility."
    }
  ];

  const testimonials = [
    {
      name: "Erik",
      role: "Founder",
      company: "E&A Home Improvements",
      content: "Denis has really gone above and beyond our expectations. He's been incredibly helpful not just in creating our website, but also with our logos, Google Business setup, and even designing our business cards. His communication is clear and professional, and he truly cares about getting every detail right. We're extremely happy with how everything turned out and highly recommend him!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What types of websites and applications do you build?",
      answer: "I create custom websites and applications for all types of businesses - from simple brochure sites to web applications, and mobile apps. I specialize in iOS mobile app development, building native applications exclusively for the iOS platform. Every project is tailored to your specific needs and goals."
    },
    {
      question: "How long does a typical website project take?", 
      answer: "Project timelines vary based on complexity. A simple business website typically takes about 1 week, while more complicated projects can take 4-5 weeks. I provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely! I offer comprehensive maintenance packages including updates, security monitoring, backups, and technical support. Your website will stay secure, fast, and up-to-date."
    },
    {
      question: "What technologies do you use?",
      answer: "I work with many modern technologies including React, Next.js, Node.js, Tailwind CSS, Swift, SwiftUI, and Figma & various Adobe products for design and branding. I choose the best tech stack for your specific project requirements and business goals."
    },
    {
      question: "Can you help with SEO and performance optimization?",
      answer: "Yes! Every website I build is optimized for search engines and performance. I ensure fast loading times, mobile responsiveness, and SEO best practices to help your business get found online."
    },
    {
      question: "Do you provide logo and branding services?",
      answer: "Absolutely! I offer complete branding packages including custom logo design, business card designs, and brand identity development. I can create a cohesive visual identity that represents your business professionally across all materials."
    },
    {
      question: "Can you help set up my Google Business profile?",
      answer: "Yes! I provide Google Business setup and optimization services to help your business get found locally. This includes profile creation, optimization, and guidance on maintaining your online presence for better local visibility."
    },
    {
      question: "What's included in your iOS app development?",
      answer: "My iOS app development includes native app design and development using Swift and SwiftUI, App Store optimization, and deployment assistance. I focus exclusively on iOS to provide the best possible user experience on Apple devices."
    },
    {
      question: "Do you work with existing brands or create new ones?",
      answer: "I work with both! Whether you need a complete rebrand with new logo and business cards, or you want to enhance your existing brand with a new website or app, I can help create a cohesive brand experience that works for your business."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Section - Inspired by HeyFriend */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
        <div>

            {/* Headline */}
    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-6">
      Custom websites & apps that work.<br/>Results that matter.
    </h2>

    {/* Description */}
    <p className="text-lg text-slate-600 mb-8">
      Professional web development and custom mobile app services that help your business stand out. Your success is my priority.
    </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <a
                href="#contact"
                onClick={() => track('cta_clicked', { location: 'hero_section', button: 'get_started_today_main_cta' })}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
          </a>
          <a
                href="#services"
                onClick={() => track('cta_clicked', { location: 'hero_section', button: 'view_services_secondary' })}
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
              >
                View Services
              </a>
            </div>  
          </div>

          {/* Right Content - Business Card instead of Mobile */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Business Card */}
              <div className="w-80 h-85 bg-white rounded-2xl shadow-lg border border-slate-200 p-5 relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-32 h-32 relative">
            <Image
              src="/workwithdenis-logo.png"
                      alt="Work With Denis Logo"
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Denis</h3>
                    <p className="text-slate-600 text-sm">Web & Mobile App Developer</p>
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Available for new projects</span>
                </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span className="text-slate-700 text-sm">Custom websites &amp; mobile apps</span>
                </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Modern technologies</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-xs text-slate-600">Support</div>
                </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">7+</div>
                    <div className="text-xs text-slate-600 leading-tight">Years of Experience</div>
            </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Free</div>
                    <div className="text-xs text-slate-600">Consultation</div>
                  </div>
          </div>

              </div>

              {/* Background Decoration */}
              <div className="absolute -top-4 -left-4 w-80 h-96 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl -z-10"></div>
          </div>
        </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">What I Offer</h2>
          <p className="text-lg text-slate-600">Strategic solutions for your business growth</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 leading-tight">{service.title}</h3>
              </div>
              <p className="text-slate-600 flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work/Portfolio */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Recent Work</h2>
          <p className="text-lg text-slate-600">Projects that showcase my expertise</p>
        </div>
        
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* HeyFriend Project */}
                 <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                   {/* Website Thumbnail */}
                   <div className="relative h-48 bg-slate-100 overflow-hidden">
                     <img
                       src="/heyfriend-screenshot.png"
                       alt="HeyFriend Website Screenshot"
                       className="w-full h-full object-cover"
                       style={{ display: 'block' }}
                       onError={(e) => {
                         console.log('HeyFriend image failed to load');
                         e.currentTarget.style.display = 'none';
                       }}
                       onLoad={() => {
                         console.log('HeyFriend image loaded successfully');
                       }}
                     />
                   </div>

                   <div className="p-5 pl-8">
                     <h3 className="text-2xl font-bold text-slate-800 mb-2 pl-1">HeyFriend</h3>
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Custom Website</span>
                     </div>
                     <p className="text-slate-600 mb-4">Complete branding package including custom website and logo design for a voice-first AI mental health app. Full digital presence from concept to launch.</p>
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">User-Friendly</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Mobile Optimized</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Fast Loading</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Custom Branding</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <a
                         href="https://tryheyfriend.com"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                       >
                         <span>View Project</span>
                         <ExternalLink className="w-4 h-4" />
                       </a>
                       <div className="text-sm text-slate-500">2025</div>
                     </div>
                   </div>
                 </div>

                 {/* E&A Home Improvements Project */}
                 <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                   {/* Website Thumbnail */}
                   <div className="relative h-48 bg-slate-100 overflow-hidden">
                     <img
                       src="/eandahome-screenshot.png"
                       alt="E&A Home Improvements Website Screenshot"
                       className="w-full h-full object-cover"
                       style={{ display: 'block' }}
                       onError={(e) => {
                         console.log('E&A image failed to load');
                         e.currentTarget.style.display = 'none';
                       }}
                       onLoad={() => {
                         console.log('E&A image loaded successfully');
                       }}
                     />
                   </div>

                   <div className="p-6 pl-8">
                     <h3 className="text-2xl font-bold text-slate-800 mb-2 pl-1">E&A Home Improvements</h3>
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Custom Website</span>
                     </div>
                     <p className="text-slate-600 mb-4">Complete branding package including custom website, business cards, logo design, and Google Business setup for drywall business. Full digital presence from concept to launch.</p>
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Contact Forms</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">SEO Optimized</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Mobile Friendly</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Custom Branding</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <a
                         href="https://eandahomeimprovements.com"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                       >
                         <span>View Project</span>
                         <ExternalLink className="w-4 h-4" />
                       </a>
                       <div className="text-sm text-slate-500">2025</div>
                     </div>
                   </div>
                 </div>

                 {/* Business Cards Project */}
                 <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                   {/* Business Cards Thumbnail */}
                   <div className="relative h-48 bg-slate-100 overflow-hidden">
                     <img
                       src="/FRONT V3.png"
                       alt="Custom Business Cards Design"
                       className="w-full h-full object-cover"
                       style={{ display: 'block' }}
                       onError={(e) => {
                         console.log('Business cards image failed to load');
                         e.currentTarget.style.display = 'none';
                       }}
                       onLoad={() => {
                         console.log('Business cards image loaded successfully');
                       }}
                     />
                   </div>

                   <div className="p-6 pl-8">
                     <h3 className="text-2xl font-bold text-slate-800 mb-2 pl-1">E&A Home Improvements Business Cards</h3>
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Business Cards</span>
                     </div>
                     <p className="text-slate-600 mb-4">Professional business card designs featuring modern layouts, custom branding, and high-quality printing specifications. Multiple design variations to choose from.</p>
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Professional Design</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Print Ready</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Multiple Options</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Custom Branding</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <button
                        onClick={() => {
                          // Track project interaction
                          track('project_viewed', { project: 'e_a_business_cards_portfolio' });
                          
                          // Create a modal with flipable business cards
                          const modal = document.createElement('div');
                           modal.className = 'fixed inset-0 bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 p-4';
                           modal.innerHTML = `
                             <div class="bg-white rounded-2xl p-6 max-w-6xl max-h-[90vh] overflow-y-auto">
                               <div class="flex justify-between items-center mb-6">
                                 <h3 class="text-2xl font-bold text-slate-800">E&A Home Improvement Business Cards</h3>
                                 <button onclick="this.closest('.fixed').remove()" class="text-slate-500 hover:text-slate-700 text-2xl">&times;</button>
                               </div>
                               <div class="mb-8 text-left">
                                 <p class="text-slate-600">Professional business card designs with multiple layout options. Click any card to see both sides!</p>
                               </div>
                               <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <!-- Card Set 1 -->
                                 <div class="text-center">
                                   <div class="relative w-80 h-48 mx-auto mb-4 perspective-1000">
                                     <div class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer border-2 border-slate-200 rounded-xl p-2 bg-gradient-to-br from-slate-50 to-white" onclick="this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)'">
                                       <div class="absolute inset-2 backface-hidden">
                                         <img src="/FRONT V1.png" alt="Business Card Front 1" class="w-full h-full object-contain rounded-lg shadow-md" />
                                         <!-- Tap indicator on front -->
                                         <div class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                                           Tap
                                         </div>
                                       </div>
                                       <div class="absolute inset-2 backface-hidden transform rotate-y-180">
                                         <img src="/BACK V1.png" alt="Business Card Back 1" class="w-full h-full object-contain rounded-lg shadow-md" />
                                         <!-- Tap indicator on back -->
                                         <div class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                                           Tap
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <p class="text-sm text-slate-600 font-medium">Design Set 1</p>
                                 </div>
                                 
                                 <!-- Card Set 2 -->
                                 <div class="text-center">
                                   <div class="relative w-80 h-48 mx-auto mb-4 perspective-1000">
                                     <div class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer border-2 border-slate-200 rounded-xl p-2 bg-gradient-to-br from-slate-50 to-white" onclick="this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)'">
                                       <div class="absolute inset-2 backface-hidden">
                                         <img src="/FRONT V1.png" alt="Business Card Front 2" class="w-full h-full object-contain rounded-lg shadow-md" />
                                         <!-- Tap indicator on front -->
                                         <div class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                                           Tap
                                         </div>
                                       </div>
                                       <div class="absolute inset-2 backface-hidden transform rotate-y-180">
                                         <img src="/BACK V1-2.png" alt="Business Card Back 2" class="w-full h-full object-contain rounded-lg shadow-md" />
                                         <!-- Tap indicator on back -->
                                         <div class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                                           Tap
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <p class="text-sm text-slate-600 font-medium">Design Set 2</p>
                                 </div>
                                 
                                 <!-- Card Set 3 -->
                                 <div class="text-center">
                                   <div class="relative w-80 h-48 mx-auto mb-4 perspective-1000">
                                     <div class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer border-2 border-slate-200 rounded-xl p-2 bg-gradient-to-br from-slate-50 to-white" onclick="this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)'">
                                       <div class="absolute inset-2 backface-hidden">
                                         <img src="/FRONT V2.png" alt="Business Card Front 3" class="w-full h-full object-contain rounded-lg shadow-md" />
                                         <!-- Tap indicator on front -->
                                         <div class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                                           Tap
                                         </div>
                                       </div>
                                       <div class="absolute inset-2 backface-hidden transform rotate-y-180">
                                         <img src="/BACK V2.png" alt="Business Card Back 3" class="w-full h-full object-contain rounded-lg shadow-md" />
                                         <!-- Tap indicator on back -->
                                         <div class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                                           Tap
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <p class="text-sm text-slate-600 font-medium">Design Set 3</p>
                                 </div>
                                 
                                 <!-- Card Set 4 -->
                                 <div class="text-center">
                                   <div class="relative w-80 h-48 mx-auto mb-4 perspective-1000">
                                     <div class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer border-2 border-slate-200 rounded-xl p-2 bg-gradient-to-br from-slate-50 to-white" onclick="this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)'">
                                       <div class="absolute inset-2 backface-hidden">
                                         <img src="/FRONT V3.png" alt="Business Card Front 4" class="w-full h-full object-contain rounded-lg shadow-md" />
                                         <!-- Tap indicator on front -->
                                         <div class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                                           Tap
                                         </div>
                                       </div>
                                       <div class="absolute inset-2 backface-hidden transform rotate-y-180">
                                         <img src="/BACK V3.png" alt="Business Card Back 4" class="w-full h-full object-contain rounded-lg shadow-md" />
                                         <!-- Tap indicator on back -->
                                         <div class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                                           Tap
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                   <p class="text-sm text-slate-600 font-medium">Design Set 4</p>
                                 </div>
                               </div>
                             </div>
                           `;
                           
                           // Add CSS for the flip effect
                           const style = document.createElement('style');
                           style.textContent = `
                             .perspective-1000 { perspective: 1000px; }
                             .transform-style-preserve-3d { transform-style: preserve-3d; }
                             .backface-hidden { backface-visibility: hidden; }
                             .rotate-y-180 { transform: rotateY(180deg); }
                           `;
                           document.head.appendChild(style);
                           document.body.appendChild(modal);
                         }}
                         className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                       >
                         <span>View Designs</span>
                         <ArrowRight className="w-4 h-4" />
                       </button>
                       <div className="text-sm text-slate-500">2025</div>
                     </div>
                   </div>
                 </div>

                 {/* E&A Home Improvements Logo Project */}
                 <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                   {/* Logo Thumbnail */}
                   <div className="relative h-48 bg-slate-100 overflow-hidden">
                     <img
                       src="/E&A Logo 1.png"
                       alt="E&A Home Improvements Logo Design"
                       className="w-full h-full object-cover"
                       style={{ display: 'block' }}
                       onError={(e) => {
                         console.log('E&A Logo image failed to load');
                         e.currentTarget.style.display = 'none';
                       }}
                       onLoad={() => {
                         console.log('E&A Logo image loaded successfully');
                       }}
                     />
                   </div>

                   <div className="p-6 pl-8">
                     <h3 className="text-2xl font-bold text-slate-800 mb-2 pl-1">E&A Home Improvements Logo</h3>
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Logo Design</span>
                     </div>
                     <p className="text-slate-600 mb-4">Professional logo design for E&A Home Improvements, featuring modern typography and clean design elements that represent the company&apos;s drywall and home improvement services.</p>
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Professional Design</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Brand Identity</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Modern Typography</span>
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Custom Branding</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <button
                        onClick={() => {
                          // Track project interaction
                          track('project_viewed', { project: 'e_a_logo_design_portfolio' });
                          
                          // Create a modal to show logo designs
                          const modal = document.createElement('div');
                           modal.className = 'fixed inset-0 bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 p-4';
                           modal.innerHTML = `
                             <div class="bg-white rounded-2xl p-6 max-w-4xl max-h-[90vh] overflow-y-auto">
                               <div class="flex justify-between items-center mb-6">
                                 <h3 class="text-2xl font-bold text-slate-800">E&A Home Improvements Logo Designs</h3>
                                 <button onclick="this.closest('.fixed').remove()" class="text-slate-500 hover:text-slate-700 text-2xl">&times;</button>
                               </div>
                               <div class="mb-8 text-left">
                                 <p class="text-slate-600">Professional logo designs for E&A Home Improvements, featuring modern typography and clean design elements.</p>
                               </div>
                               <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <!-- Logo Design 1 -->
                                 <div class="text-center p-4 md:p-6">
                                   <div class="relative w-[280px] h-[200px] md:w-[400px] md:h-[300px] mx-auto mb-4 p-2 md:p-4">
                                     <img src="/E&A Logo 1.png" alt="E&A Logo Design 1" class="w-full h-full object-contain rounded-lg shadow-lg" />
                                   </div>
                                   <p class="text-sm text-slate-600 font-medium">Logo Design 1</p>
                                 </div>
                                 
                                 <!-- Logo Design 2 -->
                                 <div class="text-center p-4 md:p-6">
                                   <div class="relative w-[280px] h-[200px] md:w-[400px] md:h-[300px] mx-auto mb-4 p-2 md:p-4">
                                     <img src="/E&A Logo 2.png" alt="E&A Logo Design 2" class="w-full h-full object-contain rounded-lg shadow-lg" />
                                   </div>
                                   <p class="text-sm text-slate-600 font-medium">Logo Design 2</p>
                                 </div>
                               </div>
                             </div>
                           `;
                           document.body.appendChild(modal);
                         }}
                         className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                       >
                         <span>View Designs</span>
                         <ArrowRight className="w-4 h-4" />
                       </button>
                       <div className="text-sm text-slate-500">2025</div>
                     </div>
                   </div>
                 </div>
               </div>
        
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Choose Your Package</h2>
          <p className="text-lg text-slate-600">Flexible options to fit your business needs and budget</p>
          
          {/* Custom iOS App Notice */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Smartphone className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-semibold text-orange-800">Custom iOS Apps</h3>
              </div>
              <p className="text-orange-700 text-sm">
                Custom iOS mobile applications require a personalized consultation. 
                <span className="font-semibold"> Contact Denis directly to discuss your app project.</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Package */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Starter</h3>
              <div className="text-4xl font-bold text-slate-800 mb-2">$1,200</div>
              <p className="text-slate-600">Perfect for new businesses</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Custom Website</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Mobile Responsive Design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Contact Forms</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Basic SEO Setup</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">1 Week Delivery</span>
              </li>
            </ul>
            
            <a 
              href="#contact"
              onClick={() => track('cta_clicked', { location: 'services_section', button: 'basic_package_get_started' })}
              className="w-full inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Professional Package */}
          <div className="bg-white rounded-2xl border-2 border-green-500 p-8 hover:shadow-lg transition-shadow relative flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Professional</h3>
              <div className="text-4xl font-bold text-slate-800 mb-2">$2,000</div>
              <p className="text-slate-600">Complete business solution</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Custom Website</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Mobile Responsive Design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Contact Forms</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Basic SEO Setup</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Custom Logo Design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Business Cards (1 design)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                <span className="text-slate-700">Google Business Setup</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">2 Weeks Delivery</span>
              </li>
            </ul>
            
            <a 
              href="#contact"
              onClick={() => track('cta_clicked', { location: 'testimonials_section', button: 'most_popular_professional_package' })}
              className="w-full inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 transition-colors"
            >
              Get Started
            </a>
              </div>

          {/* Full Package */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Complete</h3>
              <div className="text-4xl font-bold text-slate-800 mb-2">$3,000</div>
              <p className="text-slate-600">Everything you need to succeed</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Custom Website</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Mobile Responsive Design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Contact Forms</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Basic SEO Setup</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Custom Logo Design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Business Cards (3 designs)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Google Business Setup</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Advanced SEO Optimization</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">Keyword Research & Strategy</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                <span className="text-slate-700">Google Analytics Setup</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-700">4 Weeks Delivery</span>
              </li>
            </ul>
            
            <a 
              href="#contact"
              onClick={() => track('cta_clicked', { location: 'pricing_section', button: 'complete_package_get_started' })}
              className="w-full inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          {/* What's Included */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 max-w-5xl mx-auto border-2 border-green-200 shadow-lg mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Ongoing Support
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-3">Keep Your Website Running Smoothly</h3>
              <p className="text-lg text-slate-600">
                After project completion, an optional maintenance fee of <span className="font-bold text-green-600 text-xl">$15/month</span> ensures your website stays secure, updated, and optimized.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Security Updates</h4>
                <p className="text-sm text-slate-600">Keep your website protected from threats</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Content Changes</h4>
                <p className="text-sm text-slate-600">Updates and modifications as needed</p>
                  </div>
              
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Technical Support</h4>
                <p className="text-sm text-slate-600">Ongoing help and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">What Clients Say</h2>
          <p className="text-lg text-slate-600">Real results from real businesses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
            <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>

              <blockquote className="text-slate-700 mb-4">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </div>
          ))}
          
          {/* More Testimonials Coming Soon */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">More Testimonials</h4>
            <p className="text-slate-600">Coming soon!</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Everything you need to know about working with me</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => {
                  // Track FAQ interaction
                  track('faq_toggled', { 
                    question: faq.question,
                    action: openFaq === index ? 'close' : 'open'
                  });
                  setOpenFaq(openFaq === index ? null : index);
                }}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-slate-800 pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-600 transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Ready to Build Your Website or App?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your project and create a custom website or application that helps your business grow.
            </p>
          </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="text-2xl font-bold text-green-500 mb-2">Free</div>
            <div className="text-sm text-slate-600">Initial Consultation</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="text-2xl font-bold text-green-500 mb-2">24/7</div>
            <div className="text-sm text-slate-600">Support Available</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="text-2xl font-bold text-green-500 mb-2">30-Day</div>
            <div className="text-sm text-slate-600">Money-Back Guarantee</div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg mb-8">
          {formSubmitted ? (
            <div className="text-center py-12">
              {/* Logo with Success Animation */}
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src="/workwithdenis-logo.png"
                    alt="Work With Denis Logo"
                    fill
                    sizes="96px"
                    className="object-contain animate-bounce"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-600 text-center">Form submitted successfully!</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Thank you! The form has been submitted successfully. We will reply to you soon!
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Submit Another Form
              </button>
            </div>
          ) : (
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                
                // Track form submission
                track('contact_form_submitted');
                
                const formData = new FormData(e.currentTarget);
                fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  body: formData
                }).then(() => {
                  setFormSubmitted(true);
                  // Track successful submission
                  track('contact_form_success');
                }).catch(() => {
                  setFormSubmitted(true); // Show success even if there's an error
                  // Track form error
                  track('contact_form_error');
                });
              }}
            >
            <input type="hidden" name="access_key" value="9322692b-4b8b-4d3d-ab55-8ea7d235cf0c" />
            <input type="hidden" name="subject" value="New Contact Form Submission - Work With Denis" />
            <input type="hidden" name="redirect" value="https://workwithdenis.com" />
            <input type="hidden" name="from_name" value="Work With Denis Contact Form" />
            <input type="hidden" name="replyto" value="hi@workwithdenis.com" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">What type of work are you looking for? *</label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              >
                <option value="">Select a service</option>
                <optgroup label="Pricing Packages">
                  <option value="Starter Package ($1,200)">Starter Package ($1,200)</option>
                  <option value="Professional Package ($2,000)">Professional Package ($2,000)</option>
                  <option value="Complete Package ($3,000)">Complete Package ($3,000)</option>
                </optgroup>
                <optgroup label="Individual Services">
                  <option value="Custom Website">Custom Website</option>
                  <option value="iOS Mobile App">iOS Mobile App</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="Business Cards">Business Cards</option>
                  <option value="Google Business Setup">Google Business Setup</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Not Sure - Need Consultation">Not Sure - Need Consultation</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Project Details</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
          )}
          </div>
      </section>
    </main>
  );
}