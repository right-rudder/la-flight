import {
  COMPANY_NAME,
  KEYWORDS,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  GMAPS
} from "../consts";

const quizPage = {
  data: {
    //SEO Header Stuff
    pageTitle: `Quiz | ${COMPANY_NAME}`,
    pageDescription:
      `${COMPANY_NAME} presents a fun and engaging quiz, 'Do You Have What It Takes to Be a Pilot?' Discover if you have the skills, mindset, and passion to conquer the skies. Perfect for aspiring aviators of all levels!`,
    pageKeywords:
      `pilot quiz, aviation skills test, become a pilot, flight training quiz, aspiring aviator quiz, aviation career test, ${COMPANY_NAME} quiz`,


    header: {
      stars: true,
      imagePath:
        "/src/assets/lafa-cfi-watching-student-maneuver-plane-piper-cherokee-outside-hangar.jpg",
      imageAlt: `${COMPANY_NAME} logo`,
      headerH1: `Quiz</br>${COMPANY_NAME}`,
      paragraph:
        `Whether you’re ready to start your flight training or simply have questions about our programs, the team at ${COMPANY_NAME} is here to assist you.`,
      buttons: [
        {
          name: "Enroll Form",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },

    info:{
      form_url: import.meta.env.QUIZ_WEBHOOK_URL,
      redirect_url: "/enroll-confirmation",
      form_h: "Do You Have What It Takes to Be a Pilot?",
      form_p1: "Discover what kind of pilot you’re meant to be with our quick and engaging quiz! Whether you’re drawn to the challenge of mastering complex flight techniques, the excitement of exploring new horizons, or the satisfaction of achieving precision in the skies, this quiz will uncover what fuels your passion for aviation. In just a few questions, you’ll gain insight into your unique traits and how they align with the incredible opportunities that await in the world of flight.",
      form_p2: "At LA Flight Academy, we know every pilot’s journey is unique, and our mission is to help you find the path that fits your goals. This quiz is designed to inspire you, highlight your strengths, and provide clarity for the road ahead. Are you a trailblazer who thrives on challenges, a perfectionist with a love for precision, a collaborator who values teamwork, or an adventurer seeking thrilling experiences? Take the quiz and see how your personality aligns with the skies above Los Angeles!",
      address_1: ADDRESS_LINE_1,
      address_2: ADDRESS_LINE_2,
      gmaps: GMAPS,
      phone_num: PHONE_NUMBER,
      email: EMAIL_ADDRESS,
      checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
    },
  },
};
export default quizPage;
