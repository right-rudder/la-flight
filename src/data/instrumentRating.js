const instrumentRating = {
  data: {
    slug: "instrument-rating",
    // SEO Header Stuff
    pageTitle: "INSTRUMENT RATING | LA Flight Academy",
    pageDescription:
      "Take your pilot skills to the next level with LA Flight Academy’s Instrument Rating Course. Learn to fly confidently in challenging weather and low-visibility conditions while enhancing your navigation skills.",
    pageKeywords:
      "Instrument Rating , IFR training Van Nuys, advanced pilot training, learn to fly in low visibility, instrument flight rules, instrument pilot certification",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/Cirrus-219EL-instrument-rating.jpg",
      imageAlt:
        "LA Flight Academy student learning IFR flying in a Cessna cockpit",
      headerH1: `Instrument <br>Rating </span>`,
      paragraph: `Elevate your piloting expertise with an Instrument Rating. Master flying in diverse weather conditions, navigate with precision, and unlock the ability to operate under instrument flight rules (IFR).`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Training Guide",
          link: "/pilot-career-path",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `Instrument Rating<br> Certification`,
      paragraphs: [
        "An Instrument Rating (IR) is an advanced certification that allows you to fly in conditions where visual reference isn’t possible, such as through clouds or at night. It’s an essential qualification for pilots seeking to improve their skills and expand their flying capabilities.",
        "This certification enhances safety, situational awareness, and confidence, making it a crucial step for those pursuing a career in aviation. Additionally, the Instrument Rating is a prerequisite for earning a Commercial Pilot License and ultimately achieving Airline Transport Pilot (ATP) certification.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: "Instrument Rating",
      descriptions: [
        "At LA Flight Academy, we focus on comprehensive training to ensure you develop the technical skills and knowledge required to excel in instrument flight. From classroom learning to real-world IFR scenarios, we’ll guide you every step of the way.",
      ],
      steps: [
        {
          title: "Meet Eligibility Requirements",
          paragraphs: [
            "To begin the Instrument Rating , you must hold a Private Pilot License (PPL) and meet the FAA’s medical requirements. At LA Flight Academy, we’ll guide you through every step of the process to ensure you’re ready to begin advanced training.",
            "Additionally, you’ll need proficiency in English for communication and interpretation of IFR flight procedures. If you’re ready to enhance your piloting skills, this course is the next step in your journey.",
          ],
          imagePath: "/src/assets/lafa-plane-1.jpg",
          imageAlt: "LAFA plane's propeler",
        },
        {
          title: "Ground School Training",
          paragraphs: [
            "Our ground school curriculum provides 15 hours of instruction focused on topics such as advanced weather theory, instrument navigation, IFR flight planning, and the National Airspace System. These lessons lay the foundation for understanding the complex world of instrument flying.",
            "With the guidance of our experienced instructors, you’ll prepare to pass the FAA Instrument Rating Knowledge Test, which assesses your understanding of instrument flight principles and regulations.",
          ],
          imagePath: "/src/assets/lafa-student-taking-ground-lessons.jpg",
          imageAlt: "Students in a classroom at LA Flight Academy",
        },
        {
          title: "Flight Training",
          paragraphs: [
            "Your in-aircraft training begins with mastering IFR procedures, such as precision and non-precision approaches, departure and arrival procedures, and en-route navigation. You’ll log 40 hours of instrument time, including 15 hours with an instructor.",
            "During this phase, you’ll practice flying under simulated or actual instrument conditions, ensuring you develop the skills to confidently handle real-world IFR scenarios.",
          ],
          imagePath: "/src/assets/lafa-flight-training.jpg",
          imageAlt: "Instructor and student flying under IFR conditions",
        },
        {
          title: "Cross-Country Training",
          paragraphs: [
            "The FAA requires at least one IFR cross-country flight of 250 nautical miles, demonstrating your ability to plan and execute a flight using instrument navigation. At LA Flight Academy, we’ll help you prepare for this critical milestone, ensuring you feel confident in your planning and decision-making abilities.",
            "This phase of training will test your ability to communicate with air traffic control, handle in-flight adjustments, and manage complex navigation challenges.",
          ],
          imagePath: "/src/assets/lafa-plane-over-mountains.jpg",
          imageAlt: "Aircraft cockpit during a cross-country IFR flight",
        },
        {
          title: "Pass the FAA Knowledge Test",
          paragraphs: [
            "Before advancing to your checkride, you’ll need to pass the FAA Instrument Rating Knowledge Test. This exam covers advanced topics from ground school, such as weather patterns, navigation, and IFR procedures.",
            "Our ground school sessions and study materials are designed to prepare you thoroughly, giving you the tools and confidence needed to succeed.",
          ],
          imagePath: "/src/assets/jason-coudriet-studying.jpg",
          imageAlt: "Student reviewing FAA test materials",
        },
        {
          title: "Prepare for and Pass the Checkride",
          paragraphs: [
            "The final step is the FAA Instrument Rating Checkride, which includes both an oral and practical exam. During the oral portion, you’ll demonstrate your understanding of IFR rules, procedures, and navigation. In the flight portion, you’ll showcase your ability to operate an aircraft solely by reference to instruments.",
            "At LA Flight Academy, we provide mock checkrides and individualized coaching to ensure you’re fully prepared to succeed. Once you pass, you’ll be certified to fly under Instrument Flight Rules (IFR), opening new possibilities for your aviation journey.",
          ],
          imagePath: "/src/assets/LAFA-PP-cover.jpg",
          imageAlt: "Student pilot celebrating after passing their checkride",
        },
      ],
      finalParagraph:
        "Completing the Instrument Rating Course at LA Flight Academy equips you with the knowledge and skills to safely and confidently fly in a variety of conditions. Take your next step toward becoming a more versatile and capable pilot.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
    },
  },
};

export default instrumentRating;
