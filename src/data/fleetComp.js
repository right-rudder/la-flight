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
        "/src/assets/fleet/fleet-219EL-cirrus-front-view-open-doors-lafa-flight-training-california.jpg",
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
        "/src/assets/fleet/fleet-219EL-cirrus-side-view-open-doors-la-flight-pilot-training-van-nuys-ca.jpg",
        "/src/assets/fleet/fleet-219EL-cirrus-front-view-la-flight-pilot-training-calabasas-ca.jpg",
        "/src/assets/fleet/fleet-219EL-cirrus-cockpit-instrument-panel-side-view-lafa-flight-school-calabasas-ca.jpg",
        "/src/assets/fleet/fleet-219EL-cirrus-cockpit-instrument-panel-back-view-la-flight-school-burbank-ca.jpg",
        "/src/assets/fleet/fleet-219EL-cirrus-front-view-lafa-pilot-training-canoga-park-ca.jpg",
        "/src/assets/fleet/fleet-219EL-cirrus-front-view-open-doors-lafa-flight-training-california.jpg",
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
        "/src/assets/fleet/fleet-N120B-beechcraft-side-view-commercial-pilot-ensino-ca.jpg",
        "/src/assets/fleet/fleet-N120B-beechcraft-cockpit-back-view-certified-flight-instructor-van-nuys-ca.jpg",
        "/src/assets/fleet/fleet-N120B-beechcraft-cockpit-side-view-lafa-flight-training-burbank-ca.jpg",
        "/src/assets/fleet/fleet-N120B-beechcraft-front-view-lafa-flight-training-canoga-park-ca.jpg",
        "/src/assets/fleet/fleet-N120N-beechcraft-cockpit-pilots-back-view-lafa-flight-school-encino-ca.jpg",
        "/src/assets/fleet/fleet-N120N-beechcraft-cockpit-pilots-back-view-lafa-private-pilot-lake-balboa-ca.jpg",
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
        "/src/assets/fleet/fleet-N252SP-cessna-172S-side-view-private-pilot-lake-balboa-ca.jpg",
        "/src/assets/fleet/fleet-N252SP-cessna-172S-front-view-instrument-rating-van-nuys-ca.jpg",
        "/src/assets/fleet/fleet-N252SP-cessna-172S-flying-over-mountains-multi-engine-california.jpg",
        "/src/assets/fleet/fleet-N252SP-cessna-172S-cockpit-lafa-commercial-pilot-north-hills-ca.jpg",
        "/src/assets/fleet/fleet-N252SP-cessna-172S-cockpit-lafa-instrument-rating-north-hollywood-ca.jpg",
        "/src/assets/fleet/fleet-N252SP-cessna-172S-flying-over-city-certified-flight-instructor-panorama-city-ca.jpg",
        "/src/assets/fleet/fleet-N252SP-cessna-172S-flying-over-city-beach-multi-engine-reseda-ca.jpg",
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
      name: "N430EP", /* TODO : Get more images */
      rates: "($180hr/$170 block)",
      description:
        "This 180HP four-seat Cessna 172R is well-equipped for advanced training and instrument practice. Manufactured in 1998, it features a Garmin 650 GPS and is IFR capable.",
      images: [
        "/src/assets/fleet/fleet-N430EP-cessna-172R-lafa-instrument-rating-north-hills-ca.JPG",
        "/src/assets/fleet/fleet-N430EP-cessna-172R-front-view-lafa-multi-engine-north-hollywood-ca.JPG",
        "/src/assets/fleet/fleet-N430EP-cessna-172R-instrument-panel-lafa-certified-flight-instructor-panorama-city-ca.JPG",
      ],
      details: [
        "1998 Cessna 172R",
        "180hp Engine",
        "Garmin 650 GPS",
        "IFR Capable",
        "Ideal for Instrument and Commercial Training",
        "$180/hour (wet)",
        "$170/hour 10 hour block (wet)",
      ],
    },
    {
      name: "N76015", /* TODO : Get more images */
      rates: "($175hr/$165 block)",
      description:
        "This aircraft is ideal for Private Pilot, Commercial, CFI and Spin Training.",
      images: [
        "/src/assets/fleet/fleet-N76015-cessna-172N-side-view-lafa-flight-school-studio-city-ca.jpg",
        "/src/assets/fleet/fleet-N76015-cessna-172N-cfi-checking-aircraft-discovery-flight-sherman-oaks-ca.jpg",
      ],
      details: [
        "1976 Cessna 172N",
        "160hp Carbureted",
        "Dual VOR’s and Comm’s",
        "IFR Certified",
        "Garmin 750 Touchpad GPS w/Bluetooth Flightstream",
        "Ideal for Private, Instrument, Commercial, CFI, Spin training and time building",
        "$175/hour (wet)",
        "$165/hour 10 hour block (wet)",
      ],
    },
    {
      name: "N4313F", /* TODO : Get 1 additional picture */
      rates: "($175HR/$165 block)",
      description:
        "This Piper Archer II is a reliable and versatile piston-single aircraft, ideal for Private Pilot and Time-Building training. Manufactured in 1978.",
      images: [
        "/src/assets/fleet/fleet-N4313F-piper-archer-II-side-view-lafa-discovery-flight-reseda-ca.jpg",
        "/src/assets/fleet/fleet-N4313F-piper-archer-II-lafa-flight-training-van-nuys-ca.jpg",
        "/src/assets/fleet/fleet-N4313F-piper-archer-II-lafa-flight-school-studio-city-ca.jpg",
        "/src/assets/fleet/fleet-N4313F-piper-archer-II-lafa-pilot-training-tarzana-ca.jpg",
        "/src/assets/fleet/fleet-N4313F-piper-archer-II-lafa-pilot-school-toluca-lake-ca.jpg",
      ],
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
      name: "N8156R", /* TODO : Get more images */
      rates: "($165HR/$155 block)",
      description:
        "This Piper Warrior II is a reliable and versatile piston-single aircraft, ideal for Private Pilot and Time-Building training. Manufactured in 1979.",
      images: [
        "/src/assets/fleet/fleet-N8156R-piper-warrior-II-side-view-lafa-flight-training-sherman-oaks-ca.jpg",
        "/src/assets/fleet/fleet-N8156R-piper-warrior-II-lafa-private-pilot-winnetka-ca.jpg",
        "/src/assets/fleet/fleet-N8156R-piper-warrior-II-lafa-commercial-pilot-woodland-hills-ca.jpg",
      ],
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
    /* TODO : Add N7901C and N7901C? */
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
