const fleetCompData = {
  data: {
    // SEO Header Stuff
    pageTitle: "Fleet | LA Flight Academy",
    pageDescription:
      "Explore LA Flight Academy’s diverse fleet of training aircraft and our FAA-approved Gleim BATD flight simulator. From Cessna and Piper to Cirrus and Beechcraft multi-engine, our fleet is designed for private pilot, instrument, commercial, CFI, and MEI training in Van Nuys, California.",
    pageKeywords:
      "flight school fleet Van Nuys, Cirrus SR20 training, Beechcraft multi-engine training, Piper Archer, Cessna 172, FAA-approved simulator California, TAA training aircraft, instrument training planes, IFR-certified aircraft, Gleim BATD simulator",

    // Top Header
    header: {
      stars: true,
      imagePath:
        "/src/assets/la-flight-academy-cirrus-plane-fleet-van-nuys-flight-training.jpg",
      imageAlt: "Three LA Flight Academy aircraft on the patio",
      headerH1: `Our <br><span>FLEET</span>`,
      paragraph: `Our aircraft and simulator are carefully selected and professionally maintained to support every stage of your flight training journey. From Piper Warriors and Cessna 172s to a Cirrus SR20 GTS, Beechcraft multi-engine, and our FAA-approved Gleim BATD simulator, LA Flight Academy offers the tools and technology to help you train efficiently and safely.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-now",
          primary: false,
        },
      ],
    },
  },
  imagePath: "/src/assets/LAFA-welcome-inside-plane.webp",
  imageAlt: "Inside of an LA Flight Academy aircraft on the runway",
  header: `Our Fleet`,
  fleet: [
    {
      name: "N219EL",
      rates: "($275hr/$255 block)",
      description:
        "This 200hp Technically Advanced Aircraft (TAA) is ideal for Commercial, Instrument, and TAA time-building requirements.",
      images: [
        "/src/assets/Cirrus-219EL-fleet-pic.jpg",
        "/src/assets/LA-Flight-Academy-Fleet-Cirrus-219EL.jpg",
        "/src/assets/Cirrus-219EL-(1-of-1)-10.jpg",
        "/src/assets/la-flight-academy-cirrus-plane-fleet-van-nuys-flight-training.jpg",
      ],
      details: [
        "2007 Cirrus SR20 GTS",
        "200 horsepower",
        "Avidyne Primary Flight Display (PFD) with Dual Garmin 430 GPS",
        "Autopilot",
        "IFR Certified",
        "Technically Advanced Aircraft (TAA)",
        "Ideal for Instrument, Commercial, and TAA time building",
        "$275/hour (wet)",
        "$255/hour 10 hour block (wet)",
      ],
    },
    {
      name: "N120B",
      rates: "($380hr/$350 block)",
      description:
        "This 260hp fuel Injected aircraft is ideal for Commercial Multi-Engine and MEI Training.",
      images: [
        "/src/assets/N120B_new.jpg",
        "/src/assets/lafa-inside-plane.jpg",
        "/src/assets/LAFA-welcome-inside-plane.jpg",
      ],
      details: [
        "1962 Beechcraft 95-A55 Twin Engine",
        "260hp per Engine — Fuel Injected",
        "Garmin 375 Touchpad GPS with Bluetooth Flightstream",
        "Dual Axis Autopilot",
        "Multi / Complex / High Performance all-in-one",
        "IFR Certified",
        "Ideal for Commercial Multi-Engine and MEI Training",
        "$380/hour (wet)",
        "$350/hour 10 hour block (wet)",
      ],
    },
    {
      name: "N252SP",
      rates: "($185hr/$175 block)",
      description:
        "This 180HP fuel injected four seat aircraft is ideal for Instrument, Commercial and CFI training. Manufactured in 1999.",
      images: [
        "/src/assets/N252SP_new.jpg",
        "/src/assets/lafa-plane-cessna-172s-flying-over-california-2.jpg",
        "/src/assets/lafa-plane-cessna-172s-flying-over-california-5.jpg",
      ],
      details: [
        "1999 Cessna 172S",
        "180hp — Fuel Injected",
        "Garmin 750 Touchpad GPS with Bluetooth Flightstream",
        "Dual G5's (Attitude Indicator & Directional Gyro)",
        "Autopilot",
        "IFR Certified",
        "Ideal for Instrument, Commercial and CFI Training",
        "$185/hour (wet)",
        "$175/hour 10 hour block (wet)",
      ],
    },
    {
      name: "N76015",
      rates: "($175hr/$165 block)",
      description:
        "This aircraft is ideal for Private Pilot, Commercial, CFI and Spin Training.",
      images: ["/src/assets/N76015_new.jpg"],
      details: [
        "1976 Cessna 172N",
        "160hp Carburetted",
        "Dual VOR’s and Comm’s",
        "IFR Certified",
        "Garmin 750 Touchpad GPS w/Bluetooth Flightstream",
        "Ideal for Private, Instrument, Commercial, CFI, Spin training and time building",
        "$175/hour (wet)",
        "$165/hour 10 hour block (wet)",
      ],
    },
    {
      name: "N42982",
      rates: "($185HR/$175 block)",
      description:
        "This Piper Warrior II is a reliable and versatile piston-single aircraft, ideal for Private Pilot and Time-Building training. Manufactured in 1979.",
      images: ["/src/assets/N42982-piper-archer.webp"],
      details: [
        "1983 Piper Archer II",
        "180hp Carburetted",
        "Garmin 650 and Garmin 355 GPS with Dual G5s",
        "3 Axis Autopilot",
        "Technically Advanced Aircraft",
        "IFR Equipped",
        "Time-Building and Private Pilot Training",
        "$185/hour (wet)",
        "$175/hour 10 hour block (wet)",
      ],
    },
    {
      name: "N7901C",
      rates: "($175hr/$165 block)",
      description:
        "This Piper Archer II PA28-181 is a four seat, 180HP, low wing aircraft that is ideal for Private Pilot, Instrument, Commercial and CFI Training.",
      images: ["/src/assets/N7901C_new.jpg"],
      details: [
        "1975 Piper Archer II PA28-181",
        "180hp Carburetted",
        "Garmin 430 GPS",
        "Dual VOR’s and Comm’s",
        "IFR Certified",
        "Ideal for Private Pilot, Instrument, Commercial and CFI Training",
        "$175/hour (wet)",
        "$165/hour 10 hour block (wet)",
      ],
    },
    {
      name: "N4313F",
      rates: "($175HR/$165 block)",
      description:
        "This Piper Archer II is a reliable and versatile piston-single aircraft, ideal for Private Pilot and Time-Building training. Manufactured in 1978.",
      images: ["/src/assets/N4313F_new.jpg"],
      details: [
        "1978 Piper Archer II PA28-181",
        "180hp — Piston-Single",
        "Garmin 430 GPS",
        "Traditional Round-Gauge Panel",
        "Comfortable Four-Seat Configuration",
        "Time-Building and Private Pilot Training",
        "$175/hour (wet)",
        "$165/hour 10 hour block (wet)",
      ],
    },
    {
      name: "N8156R",
      rates: "($165HR/$155 block)",
      description:
        "This Piper Warrior II is a reliable and versatile piston-single aircraft, ideal for Private Pilot and Time-Building training. Manufactured in 1979.",
      images: ["/src/assets/N8156R_new.jpg"],
      details: [
        "1979 Piper Warrior II PA28-161",
        "160hp — Piston-Single",
        "Garmin 650 GPS",
        "Traditional Round-Gauge Panel",
        "Comfortable Four-Seat Configuration",
        "Time-Building and Private Pilot Training",
        "$165/hour (wet)",
        "$155/hour 10 hour block (wet)",
      ],
    },
    {
      name: "Gleim BATD Simulator",
      rates: "($70hr/$60 block)",
      description:
        "Our FAA-approved Basic Aviation Training Device (BATD) is perfect for Private Pilot, Instrument Rating, and IFR Currency training — all at an affordable rate.",
      images: [
        "/src/assets/lafa-gleim-batd-simulator-Sim-9.jpg",
        "/src/assets/lafa-gleim-batd-simulator-Sim-10.jpg",
        "/src/assets/flight-simulator-la-flight-academy-los-angeles-van-nuys-gleim-batd-1.jpg",
      ],
      details: [
        "Gleim BATD Flight Simulator",
        "FAA-Approved Basic Aviation Training Device (BATD)",
        "Supports yoke, rudder, throttle, and full avionics stack",
        "Ideal for structured ground-based flight training",
        "Log up to 2.5 hours toward Private Pilot (14 CFR §61.109(k)(1))",
        "Log up to 10 hours toward Instrument Rating (14 CFR §61.65(i))",
        "Maintain IFR Currency (14 CFR §61.57(c))",
        "Located on-site at LA Flight Academy in Van Nuys",
        "$70/hour",
        "$60/hour 10 hour block",
      ],
    },
  ],
  buttons: [
    {
      name: "Learn More",
      link: "/packages/fleet",
      primary: true,
    },
  ],
};
export default fleetCompData;
