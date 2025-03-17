import {
  COMPANY_NAME,
  KEYWORDS,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  GMAPS,
} from "../consts";

const discoveryForm = {
  data: {
    //SEO Header Stuff
    pageTitle: `Discovery Flight Los Angeles | ${COMPANY_NAME}`,
    pageDescription: `Take the controls and experience the thrill of flying over Los Angeles with a discovery flight at ${COMPANY_NAME}. Our Van Nuys Airport location offers breathtaking views of the LA basin, mountains, and coastline. Schedule your introductory flight today and see if you have what it takes to become a pilot!`,
    pageKeywords: `${KEYWORDS}, discovery flight Los Angeles, first flight lesson LA, introductory flight Van Nuys, try flying plane, scenic flights LA, experience flying California, pilot intro flight, learn to fly Los Angeles, flight experience gift`,

    header: {
      imagePath: "/src/assets/LAFA-CP-cover.jpg",
      imageAlt: `${COMPANY_NAME} aircraft flying over Los Angeles during sunset`,
      headerH1: "Discovery Flight",
      paragraph: `Experience the thrill of flight firsthand! Take the controls and soar over Los Angeles with an introductory flight at ${COMPANY_NAME}. Our discovery flights are the perfect way to explore your interest in aviation.`,
      buttons: [],
    },

    info: {
      address_1: ADDRESS_LINE_1,
      address_2: ADDRESS_LINE_2,
      gmaps: GMAPS,
      phone_num: PHONE_NUMBER,
      email: EMAIL_ADDRESS,
      checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
    },
  },
};

export default discoveryForm;
