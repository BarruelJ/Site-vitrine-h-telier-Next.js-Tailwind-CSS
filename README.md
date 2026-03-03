# Hôtel Mer & Horizon

Site vitrine d'un hôtel de luxe fictif.  
Projet d'entraînement Next.js + Tailwind CSS v4.

## Stack
Next.js
Tailwind CSS v4
Google Fonts (Playfair Display, Inter)

## Fonctionnalités
Formulaire de réservation multi-étapes
Validation des champs en temps réel
Design responsive

hotel-booking/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── page.js
│   │   └── layout.js
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.js
│   │   │   └── Navbar.js
│   │   └── sections/
│   │       ├── About.js
│   │       ├── BookingForm.js
│   │       ├── Features.js
│   │       ├── Hero.js
│   │       ├── Restaurant.js
│   │       └── Room.js
│   ├── data/
│   │   ├── layoutData.js
│   │   ├── restaurantData.js
│   │   ├── roomsData.js
│   │   └── ui.js
│   └── utils/
│       └── validators.js
├── public/
│   └── images/
│       ├── imgRooms/
│       │   ├── roomChambres.jpg
│       │   ├── roomMer.jpg
│       │   └── roomSuite.jpg
│       ├── services/
│       │   ├── gastronomy.jpg
│       │   ├── pool.jpg
│       │   └── spa.jpg
│       ├── hero.jpg
│       └── restaurant.jpg
├── eslint.config.mjs
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── .stylelintrc.json
├── .gitignore
├── node_modules/
└── README.md