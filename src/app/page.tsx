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
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
      ]}
      brandName="Namastey Salon"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitTestimonial
      background={{
        variant: "plain",
      }}
      title="Welcome to Namastey Salon"
      description="Experience premium beauty and relaxation in the heart of Kharghar. Our expert stylists are here to transform your look and pamper your soul."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "Excellent service and very hygienic!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-bathing-brush-with-essential-oils-candles-spa-concept_127675-2567.jpg?_wi=1",
          imageAlt: "luxury beauty salon interior",
        },
        {
          name: "Sameer K.",
          handle: "@sameerk",
          testimonial: "Very soft spoken and professional.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-having-his-hair-fixed-with-comb-hairdryer_23-2148256901.jpg?_wi=1",
          imageAlt: "luxury beauty salon interior",
        },
        {
          name: "Ananya R.",
          handle: "@ananyar",
          testimonial: "Loved my hair spa experience. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-getting-manicure_23-2149975504.jpg",
          imageAlt: "luxury beauty salon interior",
        },
        {
          name: "Vikram S.",
          handle: "@vikrams",
          testimonial: "Great haircut at a very reasonable price.",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-shopping-mall_23-2150585915.jpg",
          imageAlt: "luxury beauty salon interior",
        },
        {
          name: "Meera P.",
          handle: "@meerap",
          testimonial: "The staff here is truly caring and skilled.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-beauty-products-displayed-shelf_23-2150718003.jpg?_wi=1",
          imageAlt: "luxury beauty salon interior",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-shot-bathing-brush-with-essential-oils-candles-spa-concept_127675-2567.jpg?_wi=2"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-happy-bride-wearing-veil_23-2149722033.jpg",
          alt: "Client profile 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-female-owner-hairdresser-salon-showing-ok-hand-sign_329181-1954.jpg",
          alt: "Client profile 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-woman-visagiste-smiling-camera_23-2148113183.jpg",
          alt: "Client profile 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/best-friends-shopping-mall_329181-7984.jpg",
          alt: "Client profile 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-smiling_1187-3775.jpg",
          alt: "Client profile 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Premium Salon Experience",
        },
        {
          type: "text-icon",
          text: "Hygiene Guaranteed",
          icon: ShieldCheck,
        },
        {
          type: "text",
          text: "Expert Stylists",
        },
        {
          type: "text-icon",
          text: "Organic Products",
          icon: Leaf,
        },
        {
          type: "text",
          text: "Relaxing Ambience",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Standards"
      metrics={[
        {
          icon: Star,
          label: "Rating",
          value: "4.8",
        },
        {
          icon: Users,
          label: "Happy Clients",
          value: "7,000+",
        },
        {
          icon: Award,
          label: "Years Experience",
          value: "5+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="Our Services"
      description="Comprehensive beauty care tailored to your needs."
      accordionItems={[
        {
          id: "s1",
          title: "Haircuts & Styling",
          content: "Modern and classic haircuts for all ages.",
        },
        {
          id: "s2",
          title: "Pedicure & Manicure",
          content: "Relaxing and hygienic nail treatments.",
        },
        {
          id: "s3",
          title: "Hair Coloring",
          content: "Professional coloring by experienced stylists.",
        },
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
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Premium Shampoo",
          price: "₹1,200",
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-beauty-products-displayed-shelf_23-2150718003.jpg?_wi=2",
        },
        {
          id: "p2",
          name: "Hair Serum",
          price: "₹800",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-anti-dandruff-hair-products_23-2149345772.jpg",
        },
        {
          id: "p3",
          name: "Conditioning Mask",
          price: "₹1,500",
          imageSrc: "http://img.b2bpic.net/free-photo/skin-regeneration-product-still-life_23-2151232238.jpg",
        },
        {
          id: "p4",
          name: "Styling Gel",
          price: "₹600",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-barber-shop-accesories_23-2148506360.jpg",
        },
        {
          id: "p5",
          name: "Leave-in Spray",
          price: "₹900",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-hair-care-product_23-2151918426.jpg",
        },
        {
          id: "p6",
          name: "Gloss Treatment",
          price: "₹2,000",
          imageSrc: "http://img.b2bpic.net/free-photo/skin-regeneration-product-still-life_23-2151232279.jpg",
        },
      ]}
      title="Hair Care Products"
      description="Shop the professional products we use every day."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Popular",
          price: "₹500",
          subtitle: "Basic Grooming",
          buttons: [
            {
              text: "Book Now",
            },
          ],
          features: [
            "Haircut",
            "Beard Trim",
          ],
        },
        {
          id: "pro",
          badge: "Best Value",
          price: "₹1,200",
          subtitle: "Full Pampering",
          buttons: [
            {
              text: "Book Now",
            },
          ],
          features: [
            "Haircut",
            "Pedicure",
            "Hair Spa",
          ],
        },
        {
          id: "premium",
          badge: "Premium",
          price: "₹2,500",
          subtitle: "The Namastey Experience",
          buttons: [
            {
              text: "Book Now",
            },
          ],
          features: [
            "Balayage",
            "Manicure",
            "Luxury Massage",
          ],
        },
      ]}
      title="Pricing Menu"
      description="Affordable luxury for everyone."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="An incredible experience every single time I visit. The staff is warm, professional, and the results are always top-tier."
      rating={5}
      author="Priya Sharma"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/brunette-woman-getting-her-hair-done_23-2148108762.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-wearing-black-costume-lady-with-halloween-makeup_1157-41132.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-girl-black-shirt-hanged-toy-camera-from-her-neck_114579-24475.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/brunette-woman-with-cup-coffee-smiling-white-wall_114579-65337.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-tattoo-artist-indoors-side-view_23-2149445974.jpg",
          alt: "Client 5",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Do I need an appointment?",
          content: "Yes, we recommend booking in advance.",
        },
        {
          id: "q2",
          title: "Are walk-ins welcome?",
          content: "Walk-ins are subject to stylist availability.",
        },
        {
          id: "q3",
          title: "Where are you located?",
          content: "1st Floor, The Pacific, Shilp Chowk, Kharghar.",
        },
      ]}
      title="Common Questions"
      description="Find answers to our most popular inquiries."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      title="Visit Us Today"
      description="Ready for your transformation?"
      buttonText="Inquire"
      tag="Contact Us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Namastey Salon"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
