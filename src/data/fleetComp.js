const fleetCompData = {
  data: {
    // SEO Header Stuff
    pageTitle: "Fleet | LA Flight Academy",
    pageDescription:
      "Discover LA Flight Academy’s well-maintained fleet of aircraft, including Cessna and Piper models equipped with advanced avionics like Garmin G1000 and Dual G5 systems. Designed to support student pilots and advanced certifications with reliability and safety.",
    pageKeywords:
      "flight school fleet Van Nuys, Cessna training aircraft, Piper training planes, Garmin G1000 aircraft California, IFR training fleet, aviation school planes",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/lafa-plane-piper-archer-inside-hangar-bw.webp",
      imageAlt: "Three LA Flight Academy aircraft on the patio",
      headerH1: `Our <br><span>FLEET</span>`,
      paragraph: `LA Flight Academy’s fleet is meticulously maintained to provide a safe, modern, and reliable training environment. Explore our range of Cessna and Piper aircraft, ideal for both beginners and advanced pilots.`,
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
      name: "N120B",
      rates: "($380hr/$350 block)",
      description:
        "This 260hp fuel Injected aircraft is ideal for Commercial Multi-Engine and MEI Training.",
      image: "/src/assets/N120B_new.jpg",
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
      image: "/src/assets/N252SP_new.jpg",
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
      rates: "($165hr/$155 block)",
      description:
        "This aircraft is ideal for Private Pilot, Commercial, CFI and Spin Training.",
      image: "/src/assets/N76015_new.jpg",
      details: [
        "1976 Cessna 172N",
        "160hp Carbureted",
        "Dual VOR’s and Comm’s",
        "IFR Certified",
        "Ideal for Private Pilot, Commercial, CFI and Spin Training",
        "$165/hour (wet)",
        "$155/hour 10 hour block (wet)",
      ],
    },
    {
      name: "N7901C",
      rates: "($175hr/$165 block)",
      description:
        "This Piper Archer II PA28-181 is a four seat, 180HP, low wing aircraft that is ideal for Private Pilot, Instrument, Commercial and CFI Training.",
      image: "/src/assets/N7901C_new.jpg",
      details: [
        "1975 Piper Archer II PA28-181",
        "180hp Carbureted",
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
      image: "/src/assets/N4313F_new.jpg",
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
      image: "/src/assets/N8156R_new.jpg",
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
      name: "N42982",
      rates: "($185HR/$175 block)",
      description:
        "This Piper Warrior II is a reliable and versatile piston-single aircraft, ideal for Private Pilot and Time-Building training. Manufactured in 1979.",
      image: "/src/assets/N42982-piper-archer.webp",
      details: [
        "1983 Piper Archer II",
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
      name: "N219EL",
      rates: "($275hr/$255 block)",
      description:
        "This 200hp Technically Advanced Aircraft (TAA) is ideal for Commercial, Instrument, and TAA time-building requirements.",
      image: "/src/assets/Cirrus-219EL-(1-of-1)-8.jpeg", // Update this path if the image file differs
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
