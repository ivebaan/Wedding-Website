import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import OurStory from "./components/OurStory";
import Entourage from "./components/Entourage";
import EventDetails from "./components/EventDetails";
import DressCode from "./components/DressCode";
import FAQ from "./components/FAQ";
import RSVP from "./components/RSVP";
import GiftRegistry from "./components/GiftRegistry";
import GuestInfo from "./components/GuestInfo";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";
import "./App.css";
import wed1 from"../img/wed1.jpg";
import wed2 from "../img/wed2.jpg";
import wed3 from "../img/wed3.jpg";
import wed4 from "../img/wed4.jpg";
import wed5 from "../img/wed5.jpg";
import wed6 from "../img/wed6.jpg";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(
      ".couple-section, .entourage-section, .details-section, .rsvp-section, .faq-section, .gallery-section, .photo-gallery",
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Wedding data configuration - Easily customizable for any wedding
  const weddingData = {
    couple: {
      groom: "Jes",
      bride: "Ming",
    },
    date: "23 February 2026",
    weddingDateTime: "2026-02-23T13:00:00",
    backgroundImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600",

    story:
      "Our love story began in the most unexpected way, and every moment since has been a beautiful adventure. From our first meeting to this special day, we've grown together, supported each other, and built a foundation of love, trust, and friendship. We're excited to celebrate this next chapter with all of you who have been part of our journey.",

    entourage: {
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
      sponsors: {
        male: [
          "Dr. Marzon P. Dua",
          "Engr. Herculio S. Lawas",
          "Mr. Joel B. Gomez",
          "Mr. Solomon T. Salvador",
          "Mr. Gerardo A. Campo, LCB, MPM",
          "Atty. Ricardo U. Sarmiento, Jr.",
          "Mr. Vedfrin M. Ajos",
        ],
        female: [
          "Mrs. Sergilane H. Dua",
          "Mrs. Clarita R. Lawas",
          "Mrs. Quennie S. Gomez",
          "Mrs. Ma. Theresa M. Bation",
          "Mrs. Jessica Lozano - Little, JD",
          "Mrs. Jervy C. Sarmiento",
          "Mrs. Sheryll V. Sarmiento",
          "Mrs. Shirley N. Aburintos",
        ],
      },
      bestMan: "Kim Francis R. Rodriguez",
      groomsmen: [
        "Engr. Louie R. Busial",
        "Tristan Ian A. Brañanola",
        "Tom Leo A. Brañanola",
        "Allan Dave C. Busial",
        "MR. C.T. Bonillao",
        "Haylo B. Pitogo",
      ],
      maidsOfHonor: ["Donna Lee M. Navarro", "Rosemarie N. Mondoza"],
      bridesmaids: [
        "Niña Tin L. Padillog",
        "Resha Jailith F. Lapuza",
        "Niña Shyne N. Jedulco",
        "Kathlyn A. Isabelo",
        "Roselyn L. Duyogan",
      ],
      secondarySponsors: {
        veil: ["Mrs. Josiah Dela Rama", "Mr. Glenn Dela Rama"],
        cord: ["Mrs. Margie G. Duyogan & Mr. Ernesto A. Duyogan Jr."],
        "ring bearer": ["Lance Francis Bugbog"],
        "bible bearer": ["Matt Ethan R. Sagario"],
        "coin bearer": ["Hannah P. dela Rama"],
        "flower girls": [
          "Mrs. Kathrina Niña Sagario-Rodriguez",
          "Mr. Glenn Sagario Jr.",
          "Miss Ellise R. Sagario",
          "Johanz P. Yalli",
          "Princess Michelangelo L. Duyogan",
          "Princess Michaela G. Duyogan",
        ],
      },
    },

    events: [
      {
        name: "Wedding Ceremony",
        venue: "Archdiocesan Shrine of St. Thérèse of the Child Jesus",
        address: "Pasteur cor. Edison Sts., Lahug, Cebu City, Cebu",
        date: "Sunday, February 23, 2026",
        time: "01:00 PM",
        mapLink:
          "https://maps.google.com/?q=Archdiocesan+Shrine+of+St+Therese+Lahug",
        qrCode:
          "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maps.google.com/?q=Archdiocesan+Shrine+of+St+Therese+Lahug",
        image:
          "https://images.unsplash.com/photo-1525772764200-be829a350797?w=800",
      },
      {
        name: "Wedding Reception",
        venue: "Kalipay Restaurant",
        address:
          "Kalipay Restaurant, Banawa, Cebu City, Philippines 6000",
        date: "Sunday, February 23, 2026",
        time: "0 PM onwards",
        mapLink: "https://maps.google.com/?q=Kalipay+Restaurant+Banawa+Cebu+City",
        qrCode:
          "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maps.google.com/?q=Chateau+de+Busay",
        image:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
      },
    ],

    dressCode: {
      title: "DRESS CODE",
      subtitle: "Semi-Formal Attire",
      description:
        "We would love to see you in your best and most comfortable SEMI-FORMAL ATTIRE that suits in our motif.",
      colors: ["#8B9D83", "#9CAF88", "#D4A5A5", "#E8B4B8"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    },

    faq: [
      {
        question: "What time should I Arrive?",
        answer:
          "Please arrive at least 30 minutes before the ceremony starts at 1:00 PM.",
      },
      {
        question: "What time will the event start and end?",
        answer:
          "The ceremony starts at 1:00 PM, followed by the reception at 6:00 PM. The event is expected to conclude around 10:00 PM.",
      },
      {
        question: "Can we take pictures during the ceremony?",
        answer:
          "We kindly ask that you refrain from taking photos during the ceremony to allow our professional photographers to capture the moment. Feel free to take as many photos as you'd like during the reception!",
      },
      {
        question: "Is there a parking lot available?",
        answer:
          "Yes, both venues have parking facilities available for guests. Parking attendants will be on-site to assist you.",
      },
      {
        question: "What should I do if I can't attend?",
        answer:
          "We understand that plans can change. Please let us know as soon as possible by contacting us directly.",
      },
      {
        question:
          "Previously confirmed my attendance, but now I cannot attend. What should I do?",
        answer:
          "Please contact us immediately so we can adjust our arrangements accordingly. We appreciate your prompt notification.",
      },
      {
        question: "Can we choose where to sit at the reception?",
        answer:
          "We have arranged seating to ensure everyone has a great experience. Your table assignment will be provided at the reception entrance.",
      },
      {
        question: "Do you have any gift preferences?",
        answer:
          "Your presence is the greatest gift! However, if you wish to give something, monetary gifts are greatly appreciated as we start our new journey together.",
      },
      {
        question: "Can I bring someone with me?",
        answer:
          "Due to limited capacity, we can only accommodate guests formally invited. Please check your invitation for the number of seats reserved under your name.",
      },
    ],

    gifts: [
      {
        icon: "",
        title: "Monetary Gifts",
        description:
          "Your generous gift will help us start our new life together.",
        details: [],
      },
      {
        icon: "",
        title: "Bank Transfer",
        description: "You may send your gift via bank transfer.",
        details: [
          { label: "Bank", value: "BDO" },
          { label: "Account Name", value: "Kerjay Rodriguez" },
          { label: "Account Number", value: "1234567890" },
        ],
      },
    ],

    guestInfo: [
      {
        icon: "",
        title: "Accommodations",
        items: [
          {
            name: "Radisson Blu Cebu",
            description: "Luxury hotel near the ceremony venue",
            address: "Serging Osmeña Blvd, Cebu City",
            phone: "+63 32 402 9900",
            link: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-cebu",
          },
          {
            name: "Waterfront Cebu City Hotel",
            description: "Convenient location with excellent amenities",
            address: "Salinas Drive, Lahug, Cebu City",
            phone: "+63 32 232 6888",
            link: "https://www.waterfronthotels.com.ph/cebu/",
          },
        ],
      },
      {
        icon: "",
        title: "Transportation",
        items: [
          {
            description:
              "Shuttle service will be available from major hotels to both venues. Please coordinate with us for pickup times.",
          },
          {
            name: "Taxi & Ride-sharing",
            description:
              "Grab and regular taxis are readily available throughout Cebu City.",
          },
        ],
      },
    ],

    gallery: [
      {
        url: wed2,
        caption: "Garden Romance",
      },
      {
        url: wed1,
        caption: "Chapel Dreams",
      },
      {
        url: wed6,
        caption: "Evening Elegance",
      },
      {
        url: wed5,
        caption: "Intimate Moments",
      },
      {
        url: wed4,
        caption: "Celebration Time",
      },
      {
        url: wed3,
        caption: "Beautiful Journey",
      },
      {
        url: wed2,
        caption: "Forever Together",
      },
      {
        url: wed1,
        caption: "Love Story",
      },
    ],

    contact: {
      email: "jesming@gmail.com",
      phone: "+63 912 345 6789",
      whatsapp: "639123456789",
    },

    rsvp: {
      deadline: "Februrary 23, 2026",
    },
  };

  const weddingDate = new Date("2026-02-23T13:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    setShowMenu(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">
          {weddingData.couple.groom} & {weddingData.couple.bride}
        </div>
        <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </button>
        <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => scrollToSection("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#our-story" onClick={() => scrollToSection("our-story")}>
              Our Story
            </a>
          </li>
          <li>
            <a href="#entourage" onClick={() => scrollToSection("entourage")}>
              Entourage
            </a>
          </li>
          <li>
            <a href="#details" onClick={() => scrollToSection("details")}>
              Details
            </a>
          </li>
          <li>
            <a href="#dress-code" onClick={() => scrollToSection("dress-code")}>
              Dress Code
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => scrollToSection("faq")}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#rsvp" onClick={() => scrollToSection("rsvp")}>
              RSVP
            </a>
          </li>
          <li>
            <a href="#gifts" onClick={() => scrollToSection("gifts")}>
              Gifts
            </a>
          </li>
          <li>
            <a href="#guest-info" onClick={() => scrollToSection("guest-info")}>
              Guest Info
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => scrollToSection("gallery")}>
              Gallery
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div id="home">
        <Hero
          bride={weddingData.couple.bride}
          groom={weddingData.couple.groom}
          date={weddingData.date}
          backgroundImage={weddingData.backgroundImage}
          weddingDateTime={weddingData.weddingDateTime}
        />
      </div>

      {/* Our Story Section */}
      <OurStory
        title="Our Story"
        story={weddingData.story}
        image={weddingData.entourage.image}
      />

      {/* Entourage Section */}
      <Entourage
        title="Our Entourage"
        image={weddingData.entourage.image}
        sponsors={weddingData.entourage.sponsors}
        bestMan={weddingData.entourage.bestMan}
        groomsmen={weddingData.entourage.groomsmen}
        maidsOfHonor={weddingData.entourage.maidsOfHonor}
        bridesmaids={weddingData.entourage.bridesmaids}
        secondarySponsors={weddingData.entourage.secondarySponsors}
      />

      {/* Event Details Section */}
      <EventDetails title="When & Where" events={weddingData.events} />

      {/* Dress Code Section */}
      <DressCode
        title={weddingData.dressCode.title}
        subtitle={weddingData.dressCode.subtitle}
        description={weddingData.dressCode.description}
        colors={weddingData.dressCode.colors}
        image={weddingData.dressCode.image}
      />

      {/* FAQ Section */}
      <FAQ
        title="Frequently Asked Questions"
        subtitle="POPULAR QUESTIONS"
        questions={weddingData.faq}
      />

      {/* RSVP Section */}
      <RSVP
        title="RSVP"
        description="We can't wait to celebrate with you! Please let us know if you can make it."
        contactInfo={weddingData.contact}
        deadline={weddingData.rsvp.deadline}
      />

      {/* Gift Registry Section */}
      <GiftRegistry
        title="Gift Registry"
        description="Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we would be grateful for contributions toward our future together."
        options={weddingData.gifts}
      />

      {/* Guest Information Section */}
      <GuestInfo title="Guest Information" sections={weddingData.guestInfo} />

      {/* Photo Gallery Section */}
      <PhotoGallery title="Our Memories" photos={weddingData.gallery} />

      {/* Footer */}
      <Footer
        couple={weddingData.couple}
        date={weddingData.date}
        contactInfo={weddingData.contact}
      />
    </div>
  );
}

export default App;
