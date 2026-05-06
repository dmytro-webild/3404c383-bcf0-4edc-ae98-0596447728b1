"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Leaf, ShieldCheck, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="soft-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Products", id: "products" },
        { name: "Pricing", id: "pricing" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" }
      ]}
      brandName="Namastey Salon"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitTestimonial
      background={{ variant: "plain" }}
      title="Welcome to Namastey Salon"
      description="Experience premium beauty and relaxation in the heart of Kharghar. Our expert stylists are here to transform your look and pamper your soul."
      testimonials={[
        { name: "Sarah J.", handle: "@sarahj", testimonial: "Excellent service and very hygienic!", rating: 5 },
        { name: "Sameer K.", handle: "@sameerk", testimonial: "Very soft spoken and professional.", rating: 5 }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-shot-bathing-brush-with-essential-oils-candles-spa-concept_127675-2567.jpg?_wi=2"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      title="Our Standards"
      metrics={[
        { icon: Star, label: "Quality Rating", value: "4.9" },
        { icon: Users, label: "Satisfied Customers", value: "10,000+" },
        { icon: Award, label: "Years of Excellence", value: "8+" }
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      title="Our Signature Services"
      description="Indulge in personalized treatments designed to refresh and revitalize your appearance."
      accordionItems={[
        { id: "s1", title: "Expert Hair Styling", content: "Precision cuts and bespoke styling to suit your unique features." },
        { id: "s2", title: "Advanced Skincare", content: "Rejuvenating facials using premium, gentle products for a radiant glow." },
        { id: "s3", title: "Manicure & Pedicure", content: "Luxurious nail care ensuring hygiene and long-lasting elegance." }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-having-his-hair-fixed-with-comb-hairdryer_23-2148256901.jpg?_wi=2"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      products={[
        { id: "p1", name: "Hydrating Hair Mask", price: "₹1,499", imageSrc: "http://img.b2bpic.net/free-photo/assortment-beauty-products-displayed-shelf_23-2150718003.jpg?_wi=2" },
        { id: "p2", name: "Organic Glow Serum", price: "₹999", imageSrc: "http://img.b2bpic.net/free-photo/top-view-anti-dandruff-hair-products_23-2149345772.jpg" },
        { id: "p3", name: "Essential Oil Blend", price: "₹799", imageSrc: "http://img.b2bpic.net/free-photo/skin-regeneration-product-still-life_23-2151232238.jpg" }
      ]}
      title="Exclusive Products"
      description="Bring the salon home with our hand-picked selection of luxury beauty essentials."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      plans={[
        { id: "basic", badge: "Essential", price: "₹899", subtitle: "Daily Grooming", buttons: [{ text: "Book Session" }], features: ["Hair Trim", "Basic Conditioning"] },
        { id: "pro", badge: "Popular", price: "₹1,999", subtitle: "Salon Refresh", buttons: [{ text: "Book Session" }], features: ["Hair Styling", "Manicure", "Head Massage"] },
        { id: "prem", badge: "Elite", price: "₹3,499", subtitle: "Total Renewal", buttons: [{ text: "Book Session" }], features: ["Color Treatment", "Spa Facial", "Premium Pedicure"] }
      ]}
      title="Our Pricing"
      description="Transparent pricing for world-class salon care."
      textboxLayout="default"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      testimonial="Namastey Salon redefined luxury for me. The attention to detail and golden service quality is truly unmatched."
      rating={5}
      author="Anjali Verma"
      avatars={[]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      faqs={[
        { id: "f1", title: "Can I request a specific stylist?", content: "Absolutely! Just mention your preferred stylist when booking." },
        { id: "f2", title: "What products do you use?", content: "We exclusively use high-quality, organic-based beauty products for our treatments." },
        { id: "f3", title: "Where can I find your salon?", content: "We are conveniently located at Shilp Chowk, Kharghar, Navi Mumbai." }
      ]}
      title="Frequently Asked Questions"
      description="We're here to make your visit seamless and relaxing."
      faqsAnimation="slide-up"
      textboxLayout="default"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      title="Schedule Your Visit"
      description="Book an appointment or reach out for inquiries about our services."
      tag="Connect With Us"
      buttonText="Book Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Namastey Salon"
      leftLink={{ text: "Privacy Policy", href: "/privacy" }}
      rightLink={{ text: "Terms of Service", href: "/terms" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
