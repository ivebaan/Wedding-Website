import React, { useState, useEffect, useMemo, useCallback, lazy, Suspense } from "react";
import Hero from "./components/Hero";
import "./App.css";

// Lazy-load below-the-fold sections — only fetched when navigated to
const OurStory = lazy(() => import("./components/OurStory"));
const EventDetails = lazy(() => import("./components/EventDetails"));
const DressCode = lazy(() => import("./components/DressCode"));
const FAQ = lazy(() => import("./components/FAQ"));
const RSVP = lazy(() => import("./components/RSVP"));
const PhotoGallery = lazy(() => import("./components/PhotoGallery"));
import wed1 from "../img/wed1.jpeg";
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
import wed13 from "../img/wed13.jpeg";
import wed14 from "../img/wed14.jpeg";
import wed15 from "../img/wed15.jpeg";
import wed16 from "../img/wed16.jpeg";
import wed17 from "../img/wed17.jpeg";
import wed18 from "../img/wed18.jpeg";
import dress1 from "../img/dress1.png";
import resto from "../img/resto.jpg";
import resto1 from "../img/resto1.jpg";
import resto2 from "../img/resto2.jpg";
import prenup1 from "../img/prenup1.jpeg";
import prenup2 from "../img/prenup2.jpeg";
import prenup3 from "../img/prenup3.jpeg";
import prenup4 from "../img/prenup4.jpeg";
import prenup5 from "../img/prenup5.jpeg";
import prenup6 from "../img/prenup6.jpeg";
import prenup8 from "../img/prenup8.jpeg";
import main1 from "../img/main1.jpeg";
import main2 from "../img/main2.jpeg";
import dress2 from "../img/dress2.png";
import child1 from "../img/child1.jpeg"; 
import child2 from "../img/child2.jpeg";
import child3 from "../img/child3.jpeg";
import child4 from "../img/child4.jpeg";
import child5 from "../img/child5.jpeg";
import child6 from "../img/child6.jpeg";
import child7 from "../img/child7.jpeg";
import child8 from "../img/child8.jpeg";
import child9 from "../img/child9.jpeg";
import child10 from "../img/child10.jpeg"; 
import child11 from "../img/child11.jpeg";
import child12 from "../img/child12.jpeg";
import child13 from "../img/child13.jpeg";
import child14 from "../img/child14.jpeg";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Throttled scroll handler using rAF
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoize wedding data — large static object, never changes between renders
  const weddingData = useMemo(() => ({
    couple: {
      groom: "Jes",
      bride: "Ming",
    },
    date: "23 February 2026",
    weddingDateTime: "2026-02-23T13:00:00",
    backgroundImage: wed2,
    story:
      "What began as simple conversations turned into a love we never expected but always needed. What we first thought was just admiration slowly grew into something deeper — a love that felt safe, steady, and like home. Through every season, we chose each other, learned together, and grew side by side. Along the way, our love gave us our greatest blessing — our son, who made our world brighter and our bond even stronger. At this beautiful chapter of our story, we celebrate not just where we started, but how far love has carried us — into a lifetime we can’t wait to share.",
    events: [
      {
        name: "Wedding Reception",
        venue: "Kalipay Restaurant",
        address: "Kalipay Restaurant, Banawa, Cebu City, Philippines 6000",
        date: "Monday, February 23, 2026",
        time: "06:00 PM - 09:00 PM",
        mapLink:
          "https://maps.google.com/?q=Kalipay+Restaurant+Banawa+Cebu+City",
        qrCode:
          "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maps.google.com/?q=Kalipay+Restaurant+Banawa+Cebu+City",
        image: [resto, resto1, resto2],
      },
    ],

    dressCode: {
      title: "Dress Code",
      subtitle: "Semi-Formal Attire",
      description:
        "We would love to see you in your best and most comfortable semi-formal attire that complements our color palette.",
      colors: ["#8B9D83", "#9CAF88", "#D4A5A5", "#E8B4B8"],
      images: [dress1, dress2],
    },

    faq: [
      {
        question: "What kind of wedding are we having?",
        answer:
          "It is a civil wedding where we chose to celebrate one of the most meaningful highlights of our lives with the people who are closest to our hearts. We will be sharing a dinner together, along with special activities we’ve prepared to make this celebration truly memorable.",
      },
      {
        question: "What time should I arrive?",
        answer:
          "The reception begins at 6:00 PM. We kindly encourage everyone to arrive on time to fully enjoy the celebration.",
      },
      {
        question: "What time will the event start and end?",
        answer:
          "The event will start at 6:00 PM and conclude at 9:00 PM.",
      },
      {
        question: "Is parking available at the venue?",
        answer:
          "Yes, the restaurant offers parking spaces for both cars and motorcycles.",
      },
      {
        question: "What should I do if I’m unable to attend?",
        answer:
          "We completely understand that plans may change. Please inform us as soon as possible by contacting us directly.",
      },
      {
        question:
          "I previously confirmed my attendance but can no longer attend. What should I do?",
        answer:
          "Kindly notify us right away so we can adjust our arrangements. We truly appreciate your prompt update.",
      },
      {
        question: "Can we choose our seats at the reception?",
        answer:
          "To ensure a smooth program and everyone’s comfort, seating has been pre-arranged. Your table assignment will be available at the reception entrance.",
      },
      {
        question: "Do you have any gift preferences?",
        answer:
          "Your presence at our celebration is already a wonderful gift. However, if you wish to give something, a monetary gift would be sincerely appreciated as we begin our new journey together.",
      },
      {
        question: "May I bring a plus one?",
        answer:
          "Due to limited seating, we can only accommodate guests who are formally invited. Please refer to your invitation for the number of seats reserved under your name.",
      },
      {
        question: "Can I bring my kid(s) with me?",
        answer:
          "We truly adore your little ones and would love for them to celebrate with us. However, we have chosen to keep this event a child-free celebration. We hope this allows you to relax and fully enjoy the evening with us, and we appreciate your understanding.",
      },
    ],
    gallery: [
      {
        url: prenup1,
        caption: "JesandMing",
      },
      {
        url: main2,
        caption: "JesandMing",
      },
      {
        url: main1,
        caption: "JesandMing",
      },

      {
        url: prenup3,
        caption: "JesandMing",
      },
      {
        url: prenup4,
        caption: "JesandMing",
      },
      {
        url: prenup5,
        caption: "JesandMing",
      },
      {
        url: prenup6,
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
      {
        url: wed6,
        caption: "JesandMing",
      },
      {
        url: wed7,
        caption: "JesandMing",
      },
      {
        url: prenup8,
        caption: "JesandMing",
      },
      {
        url: wed14,
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
        url: wed13,
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
    ],

    contact: {
      email: "jestinandnormae@gmail.com",
      phone: "+63 912 345 6789",
      messenger: "Maria Normae Flores",
    },

    rsvp: {
      deadline: "February 10, 2026",
    },
  }), []);

  const scrollToSection = useCallback((e, sectionId) => {
    e.preventDefault();
    setShowMenu(false);
    setActiveSection(sectionId);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">
          {weddingData.couple.groom} & {weddingData.couple.bride}
        </div>
        <button
          className={`menu-toggle ${showMenu ? "hidden" : ""}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </button>
        <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#our-story"
              className={activeSection === "our-story" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "our-story")}
            >
              Our Story
            </a>
          </li>
          <li>
            <a
              href="#details"
              className={activeSection === "details" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "details")}
            >
              Details
            </a>
          </li>
          <li>
            <a
              href="#dress-code"
              className={activeSection === "dress-code" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "dress-code")}
            >
              Dress Code
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className={activeSection === "faq" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "faq")}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#rsvp"
              className={activeSection === "rsvp" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "rsvp")}
            >
              RSVP
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className={activeSection === "gallery" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "gallery")}
            >
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
            targetDate={weddingData.weddingDateTime}
          />
        </div>
      )}

      {/* Lazy-loaded sections wrapped in Suspense */}
      <Suspense fallback={<div className="section-loading"><span className="section-loading-dot"></span></div>}>
        {/* Our Story Section */}
        {activeSection === "our-story" && (
          <div className="section-wrapper">
            <OurStory
              title="Our Story"
              story={weddingData.story}
              image={[child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11, child12, child13, child14, main1, main2, wed1, wed2, wed3, wed4, wed5]}
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
              images={weddingData.dressCode.images}
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
      </Suspense>
    </div>
  );
}

export default App;
