const multiEngineRating = {
  data: {
    slug: "multi-engine-rating",
    // SEO Header Stuff
    pageTitle: "MULTI-ENGINE RATING | LA Flight Academy",
    pageDescription:
      "Expand your aviation skills with LA Flight Academy’s Multi-Engine Rating. Gain proficiency in multi-engine aircraft and enhance your career opportunities.",
    pageKeywords:
      "Multi-Engine training Van Nuys, multi-engine rating, multi-engine aircraft certification, FAA multi-engine endorsement, professional pilot training",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/LAFA-ME-cover.jpg",
      imageAlt:
        "LA Flight Academy student flying a multi-engine Piper Seminole aircraft",
      headerH1: `Multi-Engine <br>Rating</span>`,
      paragraph: `Master the complexities of multi-engine flight and take your piloting skills to the next level. At LA Flight Academy, we provide focused training to help you earn your Multi-Engine Rating quickly and efficiently, opening up a world of opportunities in aviation.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Training Guide",
          link: "/path",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `Multi-Engine <br> Certification`,
      paragraphs: [
        "A Multi-Engine Rating is a vital step for pilots who want to advance their career or expand their flight capabilities. With this certification, you’ll gain proficiency in operating multi-engine aircraft, preparing you for airline operations, corporate aviation, or advanced training.",
        "LA Flight Academy’s Multi-Engine program focuses on real-world training scenarios, building confidence and competence in handling the increased performance and complexity of twin-engine aircraft.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: "Multi-Engine Rating",
      descriptions: [
        "Our program is designed for pilots seeking an efficient and comprehensive path to earning their Multi-Engine Rating. With professional instructors and advanced aircraft, you’ll achieve proficiency in multi-engine flight operations.",
      ],
      steps: [
        {
          title: "Meet Eligibility Requirements",
          paragraphs: [
            "To begin training, you must hold a valid Private Pilot License (PPL) or higher. Instrument proficiency is recommended to enhance your training experience, although it is not required.",
            "We also recommend having logged time in complex aircraft or higher-performance planes to familiarize yourself with advanced flight systems.",
          ],
          imagePath: "/src/assets/lafa-plane-beechcraft-twin-engine-outside-hangar.jpg",
          imageAlt: "Pilot reviewing logbook for multi-engine eligibility",
        },
        {
          title: "Ground School Training",
          paragraphs: [
            "Ground school covers critical concepts such as multi-engine aerodynamics, weight and balance, single-engine operations, and system failures. You’ll learn how to handle emergencies like engine-out scenarios and how to manage asymmetric thrust.",
            "This foundational knowledge prepares you to safely and confidently operate multi-engine aircraft in all phases of flight.",
          ],
          imagePath: "/src/assets/lafa-student-taking-ground-lessons.jpg",
          imageAlt: "Students in a classroom discussing multi-engine theory",
        },
        {
          title: "Flight Training in Multi-Engine Aircraft",
          paragraphs: [
            "You’ll conduct hands-on training in one of our multi-engine aircraft, such as the Piper Seminole, gaining experience with advanced systems like twin-engine performance, variable pitch propellers, and retractable gear.",
            "Our instructors will guide you through critical maneuvers, including engine-out procedures, Vmc demonstrations, and precision landings, ensuring you’re confident in the cockpit of a twin-engine aircraft.",
          ],
          imagePath: "/src/assets/lafa-flight-lesson.jpg",
          imageAlt: "Instructor and student flying a multi-engine aircraft",
        },
        {
          title: "Engine-Out Scenarios",
          paragraphs: [
            "A key aspect of multi-engine training involves mastering engine-out operations. You’ll learn to maintain control during single-engine flight, troubleshoot system failures, and safely navigate to an airport.",
            "This training ensures you can effectively manage emergencies, increasing your proficiency and safety as a multi-engine pilot.",
          ],
          imagePath: "/src/assets/LAFA-CFI-cover.jpg",
          imageAlt: "Student practicing single-engine procedures in flight",
        },
        {
          title: "Pass the FAA Practical Test",
          paragraphs: [
            "The final step in earning your Multi-Engine Rating is passing the FAA Practical Test. This checkride includes an oral exam and a flight test where you’ll demonstrate your knowledge and skills in multi-engine operations.",
            "Our program prepares you with mock checkrides, personalized feedback, and advanced flight practice to ensure you pass with confidence.",
          ],
          imagePath: "/src/assets/pilot-and-examiner-checkride.jpg",
          imageAlt: "Pilot and examiner conducting a checkride",
        },
      ],
      finalParagraph:
        "Completing your Multi-Engine Rating at LA Flight Academy expands your opportunities in the aviation industry. With advanced training, real-world scenarios, and expert instruction, you’ll be ready to take the next step in your aviation career.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
    },
  },
};

export default multiEngineRating;
