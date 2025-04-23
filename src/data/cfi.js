const cfi = {
  data: {
    slug: "certified-flight-instructor",
    // SEO Header Stuff
    pageTitle: "CERTIFIED FLIGHT INSTRUCTOR | LA Flight Academy",
    pageDescription:
      "Begin your journey as an aviation educator with LA Flight Academy's Certified Flight Instructor (CFI) program. Gain the skills to teach and inspire the next generation of pilots.",
    pageKeywords:
      "Certified Flight Instructor, CFI training, flight instructor certification, FAA CFI program, aviation educator training",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/LAFA-CFI-cover.jpg",
      imageAlt:
        "Certified Flight Instructor training in progress at LA Flight Academy",
      headerH1: `Certified Flight <br>Instructor</span>`,
      paragraph: `Take the next step in your aviation career by becoming a Certified Flight Instructor. At LA Flight Academy, our CFI program equips you with the skills and confidence to teach aspiring pilots and help shape the future of aviation.`,
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
      title: `Certified Flight <br> Instructor`,
      paragraphs: [
        "Becoming a Certified Flight Instructor (CFI) is not just a way to gain flight hours; it’s an opportunity to share your passion for aviation and inspire others. This certification allows you to teach others how to fly while further enhancing your own skills and experience.",
        "Our program at LA Flight Academy focuses on developing exceptional instructors who are well-equipped to guide students through their flight training journey.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: "Certified Flight Instructor",
      descriptions: [
        "Our CFI program is designed to provide you with the tools and knowledge needed to become an effective and confident flight instructor. From mastering advanced teaching techniques to preparing for the FAA checkride, we guide you every step of the way.",
      ],
      steps: [
        {
          title: "Meet Eligibility Requirements",
          paragraphs: [
            "To begin your CFI training, you must hold a Commercial Pilot License (CPL) or Airline Transport Pilot (ATP) certificate and be at least 18 years old. You’ll also need a valid medical certificate and proficiency in English.",
            "We recommend completing the Certified Ground Instructor (CGI) certificate to complement your CFI training, although it’s not required.",
          ],
          imagePath: "/src/assets/lafa-plane-3.jpg",
          imageAlt: "Student reviewing eligibility for CFI training",
        },
        {
          title: "Ground School Preparation",
          paragraphs: [
            "Ground training emphasizes instructional techniques, advanced aerodynamics, and FAA regulations. You’ll learn how to teach complex maneuvers, evaluate students, and conduct thorough pre-flight briefings.",
            "Our comprehensive ground school ensures you are well-prepared to pass the FAA Fundamentals of Instructing (FOI) exam and excel in your teaching role.",
          ],
          imagePath: "/src/assets/jason-coudriet-studying.jpg",
          imageAlt: "CFI candidate studying FAA teaching techniques",
        },
        {
          title: "Flight Training with a CFI Focus",
          paragraphs: [
            "Flight training hones your ability to instruct while refining your own flying skills. You’ll practice teaching key maneuvers from the right seat, such as steep turns, stalls, emergency procedures, and landings.",
            "Our experienced instructors provide real-world insights and mentorship, helping you master the art of aviation education.",
          ],
          imagePath: "/src/assets/LAFA-CP-cover.jpg",
          imageAlt: "CFI trainee practicing instructional techniques",
        },
        {
          title: "Develop Your Teaching Style",
          paragraphs: [
            "A successful CFI is not just knowledgeable but also approachable and adaptable. During training, you’ll refine your ability to communicate effectively with diverse student personalities and learning styles.",
            "We provide you with the tools to develop your own teaching methods while ensuring adherence to FAA standards.",
          ],
          imagePath: "/src/assets/ground-school-cfi.jpg",
          imageAlt: "Instructor mentoring a student during flight training",
        },
        {
          title: "Pass the FAA Practical Test",
          paragraphs: [
            "The FAA CFI practical test includes an oral exam and a flight test where you’ll demonstrate both your knowledge and ability to teach. This rigorous evaluation ensures you’re ready to take on the responsibility of flight instruction.",
            "At LA Flight Academy, we prepare you with mock exams, detailed feedback, and extensive practice to ensure your success on the checkride.",
          ],
          imagePath: "/src/assets/pilot-and-examiner-checkride.jpg",
          imageAlt: "Pilot and examiner conducting a checkride",
        },
      ],
      finalParagraph:
        "Completing your Certified Flight Instructor training is a rewarding achievement that opens the door to an impactful aviation career. At LA Flight Academy, we help you build the confidence and skills to inspire future pilots and grow as a professional aviator.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
    },
  },
};

export default cfi;
