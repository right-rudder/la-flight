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
  },
};
export default about;
