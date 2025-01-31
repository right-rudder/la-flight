import {
  COMPANY_NAME,
} from "../consts";

const resultC = {
  data: {
    //SEO Header Stuff
    pageTitle: `The Team Player | ${COMPANY_NAME}`,
    pageDescription:
      `You thrive on communication and collaboration. Whether as a commercial pilot or instructor, you’re destined to soar high while helping others reach their goals. Schedule a discovery flight with us at ${COMPANY_NAME} and take the first step towards greatness!`,
    pageKeywords:
      `quiz, pilot quiz, LAFA, LA Flight Academy, Los Angeles, Van Nuys, result C`,


    header: {
      imagePath:
      "/src/assets/lafa-pilot-student-plane-piper-cherokee-ready-to-take-off.jpg",
      imageAlt: `${COMPANY_NAME} CFI watching as student prepares to take first solo flight`,
      headerH1: "The Team Player",
      paragraph:
        `You thrive on communication and collaboration. Whether as a commercial pilot or instructor, you’re destined to soar high while helping others reach their goals. Schedule a discovery flight with us at ${COMPANY_NAME} and take the first step towards greatness!`,
      buttons: [
        {
          name: "Home",
          link: "/",
          primary: true,
        },
        {
          name: "Discovery Flight",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },
  }
};

export default resultC;