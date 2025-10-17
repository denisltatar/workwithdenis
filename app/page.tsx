"use client";
import { Briefcase, TrendingUp, Users, ChevronDown, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Custom Website Development",
      desc: "Professional, responsive websites tailored to your business needs and brand identity."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "E-commerce Solutions", 
      desc: "Complete online stores with payment processing, inventory management, and customer portals."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Business Web Applications",
      desc: "Custom web applications to streamline your business processes and improve efficiency."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Denis built us an incredible website that perfectly represents our brand. Our online presence has never been stronger, and we've seen a 300% increase in leads.",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "Founder",
      company: "InnovateLab",
      content: "The custom web application Denis developed streamlined our entire workflow. What used to take hours now takes minutes.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director", 
      company: "GrowthCorp",
      content: "Our new e-commerce site is a game-changer. Sales have increased by 250% since launch, and the user experience is flawless.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What types of websites do you build?",
      answer: "I create custom websites for all types of businesses - from simple brochure sites to complex e-commerce platforms and web applications. Every project is tailored to your specific needs and goals."
    },
    {
      question: "How long does a typical website project take?", 
      answer: "Project timelines vary based on complexity. A simple business website typically takes 2-4 weeks, while e-commerce sites and web applications can take 6-12 weeks. I provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely! I offer comprehensive maintenance packages including updates, security monitoring, backups, and technical support. Your website will stay secure, fast, and up-to-date."
    },
    {
      question: "What technologies do you use?",
      answer: "I work with modern technologies including React, Next.js, Node.js, and various CMS platforms. I choose the best tech stack for your specific project requirements and business goals."
    },
    {
      question: "Can you help with SEO and performance optimization?",
      answer: "Yes! Every website I build is optimized for search engines and performance. I ensure fast loading times, mobile responsiveness, and SEO best practices to help your business get found online."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Section - Inspired by HeyFriend */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
        <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 relative">
            <Image
              src="/workwithdenis-logo.png"
                  alt="Work With Denis Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-slate-800">Work With Denis</h1>
          </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-6">
              Custom websites that work.<br/>Results that matter.
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 mb-8">
              Professional web development services that help your business stand out online. From simple websites to complex e-commerce platforms.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
          </a>
          <a
                href="#services"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
              >
                View Services
              </a>
            </div>

            {/* Footer Text */}
            <div className="text-sm text-slate-500 space-y-1">
              <p>Professional web development. Modern technologies. Your success is my priority.</p>
              <div className="flex gap-4">
                <a href="#privacy" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
                <a href="#support" className="hover:text-slate-700 transition-colors">Support</a>
              </div>
        </div>
          </div>

          {/* Right Content - Business Card instead of Mobile */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Business Card */}
              <div className="w-80 h-96 bg-white rounded-2xl shadow-lg border border-slate-200 p-8 relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/workwithdenis-logo.png"
                      alt="Work With Denis Logo"
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Denis</h3>
                    <p className="text-slate-600 text-sm">Web Developer</p>
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Available for new projects</span>
              </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Custom website development</span>
            </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Modern technologies</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-xs text-slate-600">Websites</div>
              </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">5+</div>
                    <div className="text-xs text-slate-600">Years</div>
            </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-xs text-slate-600">Success</div>
                  </div>
                </div>

                {/* Floating Action Button */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{service.title}</h3>
              </div>
              <p className="text-slate-600 mb-4">{service.desc}</p>
              <a href="#contact" className="text-sm font-semibold text-green-600 hover:opacity-80">
                Learn more →
              </a>
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
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">HeyFriend</h3>
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
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="text-sm text-slate-500">2025</div>
                  </div>
                </div>
              </div>

          {/* E&D Home Improvements Project */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Website Thumbnail */}
            <div className="relative h-48 bg-slate-100 overflow-hidden">
              <img
                src="/eandahome-screenshot.png"
                alt="E&D Home Improvements Website Screenshot"
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
                onError={(e) => {
                  console.log('E&D image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('E&D image loaded successfully');
                }}
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">E&D Home Improvements</h3>
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
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="text-sm text-slate-500">2025</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Want to see your project here?</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Choose Your Package</h2>
          <p className="text-lg text-slate-600">Flexible options to fit your business needs and budget</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Package */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Starter</h3>
              <div className="text-4xl font-bold text-slate-800 mb-2">$1,200</div>
              <p className="text-slate-600">Perfect for new businesses</p>
            </div>
            
            <ul className="space-y-4 mb-8">
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
                <span className="text-slate-700">2 Weeks Delivery</span>
              </li>
            </ul>
            
            <a 
              href="#contact"
              className="w-full inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Professional Package */}
          <div className="bg-white rounded-2xl border-2 border-green-500 p-8 hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Professional</h3>
              <div className="text-4xl font-bold text-slate-800 mb-2">$2,000</div>
              <p className="text-slate-600">Complete business solution</p>
            </div>
            
            <ul className="space-y-4 mb-8">
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
                <span className="text-slate-700">3 Weeks Delivery</span>
              </li>
            </ul>
            
            <a 
              href="#contact"
              className="w-full inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 transition-colors"
            >
              Get Started
            </a>
              </div>

          {/* Full Package */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Complete</h3>
              <div className="text-4xl font-bold text-slate-800 mb-2">$3,000</div>
              <p className="text-slate-600">Everything you need to succeed</p>
            </div>
            
            <ul className="space-y-4 mb-8">
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
              className="w-full inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">All packages include 30-day support and free minor updates</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Money-back guarantee</span>
            </div>
          </div>
          
          {/* Maintenance Fee Info */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 max-w-3xl mx-auto border border-green-100 shadow-sm">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Ongoing Support
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-3">Keep Your Website Running Smoothly</h4>
              <p className="text-slate-600 text-lg leading-relaxed">
                After project completion, a maintenance fee of <span className="font-bold text-green-600 text-xl">$15/month</span> ensures your website stays secure, updated, and optimized.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">Security Updates</h5>
                <p className="text-sm text-slate-600">Keep your website protected from threats</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">Content Changes</h5>
                <p className="text-sm text-slate-600">Updates and modifications as needed</p>
                  </div>
              
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">Technical Support</h5>
                <p className="text-sm text-slate-600">Ongoing help and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            From concept to launch
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My proven development process ensures every website is built to perfection, on time and within budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
            <h4 className="text-xl font-semibold text-slate-800 mb-4">Plan & Design</h4>
            <p className="text-slate-600">Understanding your business goals, target audience, and creating a detailed project roadmap with wireframes and designs.</p>
          </div>
        <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
            <h4 className="text-xl font-semibold text-slate-800 mb-4">Develop & Build</h4>
            <p className="text-slate-600">Building your website with modern technologies, ensuring it&apos;s fast, responsive, and optimized for search engines.</p>
            </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
            <h4 className="text-xl font-semibold text-slate-800 mb-4">Launch & Support</h4>
            <p className="text-slate-600">Deploying your website, training your team, and providing ongoing maintenance and support to keep everything running smoothly.</p>
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
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Ready to Build Your Website?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a custom website that helps your business grow online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:hello@workwithdenis.com"
              className="inline-flex items-center rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 transition-colors"
            >
              Get Started Today
        </a>
        <a
              href="tel:+1234567890"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
            >
              Call Now
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
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
          </div>
      </section>
    </main>
  );
}