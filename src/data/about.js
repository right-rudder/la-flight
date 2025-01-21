import { COMPANY_NAME } from "../consts";

const about = {
  data: {
    // SEO Header Stuff
    pageTitle: `About Us | ${COMPANY_NAME}`,
    pageDescription:
      "Learn about LA Flight Academy, the premier flight school at Van Nuys Airport offering exceptional training programs, a cohesive team of expert instructors, and a modern fleet. With a 100% checkride pass rate and over 1,000 graduates, we are committed to helping you achieve your aviation goals.",
    pageKeywords:
      "LA Flight Academy, Van Nuys flight school, 100% checkride pass rate, modern aircraft fleet, pilot training Los Angeles, aviation school in California",

    // Top Header
    header: {
      imagePath: "/src/assets/lafa-crew-header.jpg",
      imageAlt: "Aircraft inside LA Flight Academy hangar at Van Nuys Airport",
      headerH1: `Experience</br><span>Excellence in Flight Training</span>`,
      paragraph:
        "Our team of experienced flight instructors and aviation professionals at LA Flight Academy is dedicated to providing world-class training. Learn more about our team and how they can help you achieve your dreams in aviation.",
      buttons: [
        {
          name: "Get in Touch",
          link: "/contactUs",
          primary: false,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },

    staffGrid: {
      imagePath: "/src/assets/crew-top.png",
      imageAlt: "LA Flight Academy team standing near aircraft",
      upperHeading: "Meet Our Team",
      heading: "About Us",
      description: `
        LA Flight Academy (LAF) was established at Van Nuys Airport with a vision to provide high-quality flight training in the competitive Los Angeles area. What started as a passion project quickly evolved into a leading flight school with over 1,000 graduates and a 100% checkride pass rate.<br>

        Our commitment to excellence is reflected in our carefully curated team of experienced Certified Flight Instructors (CFIs), who have a combined 13,000+ flight hours and bring a wealth of real-world aviation expertise. Many of our instructors are trained in-house, ensuring a cohesive, family-like atmosphere that supports student success.<br>

        LAFA offers a range of programs, from Private Pilot Licenses (PPL) to advanced certifications like Certified Flight Instructor (CFI), Multi-Engine Instructor (MEI), and Airline Transport Pilot (ATP). We also specialize in accelerated multi-engine training, attracting students nationwide with an average completion time of 1.5 weeks.<br>

        Our modern fleet features IFR-capable aircraft equipped with Garmin Dual G5s and advanced avionics, providing students with hands-on experience using the latest technology. Additionally, we maintain strong relationships with Designated Pilot Examiners (DPEs), ensuring a smooth path to certification for our students.<br>

        Whether you're beginning your aviation journey or advancing your career, LA Flight Academy is here to help you achieve your goals with personalized instruction, state-of-the-art equipment, and an unparalleled support system.
      `,
      membersTitle: "Our Instructors",
      members: [
        {
          name: `Alex Feldman<br><small class="text-white font-normal text-sm">Chief Pilot, CFI-I</small>`,
          imagePath: "/src/assets/Alex-Feldman-Chief-Pilot.jpg",
          imageAlt: "Alex Feldman, Chief Pilot and CFI-I of LA Flight Academy",
        },
        {
          name: `Dror Waissengrin<br><small class="text-white font-normal text-sm">CFI-I</small>`,
          imagePath: "/src/assets/Dror-Waissengrin-CFI-I.jpg",
          imageAlt: "Dror Waissengrin, CFI-I at LA Flight Academy",
        },
        {
          name: `Cameron Diamond<br><small class="text-white font-normal text-sm">CFI</small>`,
          imagePath: "/src/assets/Cameron-Diamond-CFI.jpg",
          imageAlt: "Cameron Diamond, CFI at LA Flight Academy",
        },
        {
          name: `Roman Kozlenko<br><small class="text-white font-normal text-sm">CFI</small>`,
          imagePath: "/src/assets/Roman-Kozlenko-CFI.jpg",
          imageAlt: "Roman Kozlenko, CFI at LA Flight Academy",
        },
        {
          name: `Parker Capp<br><small class="text-white font-normal text-sm">CFI</small>`,
          imagePath: "/src/assets/Parker-Capp-CFI.jpg",
          imageAlt: "Parker Capp, CFI at LA Flight Academy",
        },
        {
          name: `Matthew Ronder<br><small class="text-white font-normal text-sm">Seid-CFI</small>`,
          imagePath: "/src/assets/Matthew-Ronder-Seid-CFI.jpg",
          imageAlt: "Matthew Ronder, Seid-CFI at LA Flight Academy",
        },
      ],
    },
  },
};
export default about;
