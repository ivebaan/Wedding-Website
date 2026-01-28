import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import OurStory from "./components/OurStory";
import EventDetails from "./components/EventDetails";
import DressCode from "./components/DressCode";
import FAQ from "./components/FAQ";
import RSVP from "./components/RSVP";
import PhotoGallery from "./components/PhotoGallery";
import "./App.css";
import wed1 from"../img/wed1.jpeg";
import wed2 from "../img/wed2.jpeg";
import wed3 from "../img/wed3.jpeg";
import wed4 from "../img/wed4.jpeg";
import wed5 from "../img/wed5.jpeg";
import wed6 from "../img/wed6.jpeg";
import wed7 from "../img/wed7.jpeg";
import wed8 from "../img/wed8.jpeg";
import wed9 from "../img/wed9.jpeg";
import wed11 from "../img/wed11.jpeg";
import wed12 from "../img/wed12.jpeg";
import wed10 from "../img/wed10.jpeg";
import wed13 from "../img/wed10.jpeg";
import wed14 from "../img/wed14.jpeg";
import wed15 from "../img/wed15.jpeg";
import wed16 from "../img/wed16.jpeg";
import wed17 from "../img/wed17.jpeg";
import wed18 from "../img/wed18.jpeg";
import wed19 from "../img/wed19.jpeg";
import dress from "../img/dress.png";
import resto from "../img/resto.jpg";
import resto1 from "../img/resto1.jpg";
import resto2 from "../img/resto2.jpg";



function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    backgroundImage: wed2
      ,

    story:
      "What began as simple conversations turned into a love we never expected but always needed. What we first thought was just admiration slowly grew into something deeper — a love that felt safe, steady, and like home. Through every season, we chose each other, learned together, and grew side by side. Along the way, our love gave us our greatest blessing — our son, who made our world brighter and our bond even stronger. At this beautiful chapter of our story, we celebrate not just where we started, but how far love has carried us — into a lifetime we can’t wait to share.",
    events: [
      {
        name: "Wedding Reception",
        venue: "Kalipay Restaurant",
        address:
          "Kalipay Restaurant, Banawa, Cebu City, Philippines 6000",
        date: "Monday, February 23, 2026",
        time: "06:00 PM - 09:00 PM",
        mapLink: "https://maps.google.com/?q=Kalipay+Restaurant+Banawa+Cebu+City",
        qrCode:
          "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maps.google.com/?q=Kalipay+Restaurant+Banawa+Cebu+City",
        image: [
          resto,
          resto1,
          resto2
        ],
      },
    ],

    dressCode: {
      title: "Dress Code",
      subtitle: "Semi-Formal Attire",
      description:
        "We would love to see you in your best and most comfortable semi-formal attire that complements our color palette.",
      colors: ["#8B9D83", "#9CAF88", "#D4A5A5", "#E8B4B8"],
      image:
        dress
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

    gallery: [
      {
        url: wed19,
        caption: "JesandMing",
      },
      {
        url: wed18,
        caption: "JesandMing",
      },
      {
        url: wed17,
        caption: "JesandMing",
      },
      {
        url: wed16,
        caption: "JesandMing",
      },
      {
        url: wed15,
        caption: "JesandMing",
      },
      {
        url: wed14,
        caption: "JesandMing",
      },
      {
        url: wed13,
        caption: "JesandMing",
      },
      {
        url: wed12,
        caption: "JesandMing",
      },
      {
        url: wed11,
        caption: "JesandMing",
      },
      {
        url: wed10,
        caption: "JesandMing",
      },
      {
        url: wed9,
        caption: "JesandMing",
      },
      {
        url: wed8,
        caption: "JesandMing",
      },
      {
        url: wed7,
        caption: "JesandMing",
      },
      {
        url: wed6,
        caption: "JesandMing",
      },
      {
        url: wed5,
        caption: "JesandMing",
      },
      {
        url: wed4,
        caption: "JesandMing",
      },
      {
        url: wed3,
        caption: "JesandMing",
      },
      {
        url: wed2,
        caption: "JesandMing",
      },
      {
        url: wed1,
        caption: "JesandMing",
      },
    ],

    contact: {
      email: "jesming@gmail.com",
      phone: "+63 912 345 6789",
      messenger: "JesMingWedding",
    },

    rsvp: {
      deadline: "Februrary 23, 2026",
    },
  };

  const weddingDate = new Date("2026-02-23T13:00:00");

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setShowMenu(false);
    setActiveSection(sectionId);
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
            <a href="#home" className={activeSection === "home" ? "active" : ""} onClick={(e) => scrollToSection(e, "home")}>
              Home
            </a>
          </li>
           <li>
            <a href="#our-story" className={activeSection === "our-story" ? "active" : ""} onClick={(e) => scrollToSection(e, "our-story")}>
              Our Story
            </a>
          </li>
          <li>
            <a href="#details" className={activeSection === "details" ? "active" : ""} onClick={(e) => scrollToSection(e, "details")}>
              Details
            </a>
          </li>
          <li>
            <a href="#dress-code" className={activeSection === "dress-code" ? "active" : ""} onClick={(e) => scrollToSection(e, "dress-code")}>
              Dress Code
            </a>
          </li>
          <li>
            <a href="#faq" className={activeSection === "faq" ? "active" : ""} onClick={(e) => scrollToSection(e, "faq")}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#rsvp" className={activeSection === "rsvp" ? "active" : ""} onClick={(e) => scrollToSection(e, "rsvp")}>
              RSVP
            </a>
          </li>
          <li>
            <a href="#gallery" className={activeSection === "gallery" ? "active" : ""} onClick={(e) => scrollToSection(e, "gallery")}>
              Gallery
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <div id="home">
          <Hero
            bride={weddingData.couple.bride}
            groom={weddingData.couple.groom}
            date={weddingData.date}
            backgroundImage={weddingData.backgroundImage}
            weddingDateTime={weddingData.weddingDateTime}
          />
        </div>
      )}

      {/* Our Story Section */}
      {activeSection === "our-story" && (
        <div className="section-wrapper">
          <OurStory
            title="Our Story"
            story={weddingData.story}
            image={[wed1, wed2, wed3, wed4, wed5]}
          />
        </div>
      )}

      {/* Event Details Section */}
      {activeSection === "details" && (
        <div className="section-wrapper">
          <EventDetails title="When & Where" events={weddingData.events} />
        </div>
      )}

      {/* Dress Code Section */}
      {activeSection === "dress-code" && (
        <div className="section-wrapper">
          <DressCode
            title={weddingData.dressCode.title}
            subtitle={weddingData.dressCode.subtitle}
            description={weddingData.dressCode.description}
            colors={weddingData.dressCode.colors}
            image={weddingData.dressCode.image}
          />
        </div>
      )}

      {/* FAQ Section */}
      {activeSection === "faq" && (
        <div className="section-wrapper">
          <FAQ
            title="Frequently Asked Questions"
            subtitle="POPULAR QUESTIONS"
            questions={weddingData.faq}
          />
        </div>
      )}

      {/* RSVP Section */}
      {activeSection === "rsvp" && (
        <div className="section-wrapper">
          <RSVP
            title="RSVP"
            description="We can't wait to celebrate with you! Please let us know if you can make it."
            contactInfo={weddingData.contact}
            deadline={weddingData.rsvp.deadline}
          />
        </div>
      )}

      {/* Photo Gallery Section */}
      {activeSection === "gallery" && (
        <div className="section-wrapper" id="gallery">
          <PhotoGallery title="Our Memories" photos={weddingData.gallery} />
        </div>
      )}

      
    </div>
  );
}

export default App;
