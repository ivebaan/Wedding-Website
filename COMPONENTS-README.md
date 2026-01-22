# Wedding Website - Reusable Components

A beautiful, modern wedding invitation website built with React and reusable components.

## Component Structure

### Core Components

- **Hero** - Landing section with couple names and wedding date
- **Countdown** - Live countdown timer to the wedding date
- **OurStory** - The couple's love story section
- **Entourage** - Wedding party members and sponsors
- **EventDetails** - Ceremony and reception location details
- **DressCode** - Attire guidelines with color palette
- **FAQ** - Frequently asked questions with accordion
- **RSVP** - Guest response information
- **GiftRegistry** - Gift preferences and registry details
- **GuestInfo** - Accommodation and transportation info
- **PhotoGallery** - Photo gallery with captions
- **Footer** - Footer with contact information

## How to Customize

All wedding data is configured in `App.jsx` in the `weddingData` object. Simply update:

```javascript
const weddingData = {
  couple: {
    groom: 'Your Name',
    bride: 'Partner Name'
  },
  date: 'Your Wedding Date',
  weddingDateTime: 'YYYY-MM-DDTHH:mm:ss',
  backgroundImage: 'your-image-url',
  // ... more configuration
};
```

## Component Props

Each component accepts specific props for customization:

### Hero Component
```javascript
<Hero 
  bride="Bride Name"
  groom="Groom Name"
  date="Wedding Date"
  backgroundImage="image-url"
/>
```

### Countdown Component
```javascript
<Countdown targetDate="2026-01-28T13:00:00" />
```

### EventDetails Component
```javascript
<EventDetails 
  title="When & Where"
  events={[
    {
      name: 'Event Name',
      venue: 'Venue Name',
      address: 'Full Address',
      date: 'Date',
      time: 'Time',
      mapLink: 'Google Maps URL',
      qrCode: 'QR Code Image URL',
      image: 'Venue Image URL'
    }
  ]}
/>
```

## Installation

```bash
npm install
npm run dev
```

## Technologies Used

- React
- Vite
- CSS3 (with modern features like Grid and Flexbox)
- Google Fonts (Tangerine, Montserrat)

## Features

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Live countdown timer
- ✅ Interactive FAQ accordion
- ✅ Mobile-friendly navigation
- ✅ Reusable components
- ✅ Easy customization
- ✅ Modern, elegant design

## Folder Structure

```
src/
├── components/
│   ├── Hero.jsx & Hero.css
│   ├── Countdown.jsx & Countdown.css
│   ├── OurStory.jsx & OurStory.css
│   ├── Entourage.jsx & Entourage.css
│   ├── EventDetails.jsx & EventDetails.css
│   ├── DressCode.jsx & DressCode.css
│   ├── FAQ.jsx & FAQ.css
│   ├── RSVP.jsx & RSVP.css
│   ├── GiftRegistry.jsx & GiftRegistry.css
│   ├── GuestInfo.jsx & GuestInfo.css
│   ├── PhotoGallery.jsx & PhotoGallery.css
│   └── Footer.jsx & Footer.css
├── App.jsx
├── App.css
└── main.jsx
```

## License

Feel free to use this template for your own wedding website!
