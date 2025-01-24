const privatePilotCourse = {
  data: {
    slug: "private-pilot-course",
    // SEO Header Stuff
    pageTitle: "PRIVATE PILOT COURSE | LA Flight Academy",
    pageDescription:
      "Begin your aviation journey with LA Flight Academy's Private Pilot Course. Train with experienced instructors at Van Nuys Airport and earn your Private Pilot License (PPL) to take your first step toward the skies.",
    pageKeywords:
      "Private Pilot Course, PPL training Los Angeles, learn to fly California, flight school Van Nuys, private pilot license, pilot training for beginners",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/lafa-pilot-student-plane-piper-cherokee-ready-to-take-off.jpg",
      imageAlt:
        "LA Flight Academy student preparing for their first solo flight at Van Nuys Airport",
      headerH1: `Private <br>Pilot Course</span>`,
      paragraph: `This course is your first step in becoming a licensed pilot. Achieve your Private Pilot Certificate and gain the freedom to explore the skies for personal and recreational flying.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Learn More",
          link: "/path",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `Private Pilot<br> Certificate`,
      paragraphs: [
        "The Private Pilot Certificate (PPL) is your gateway to aviation, enabling you to act as pilot in command of an aircraft for personal and recreational purposes. It’s an essential milestone for aspiring aviators, providing foundational skills and knowledge for future training and certifications.",
        "At LA Flight Academy, our comprehensive PPL program prepares you for every step of the journey, from ground school to flight training and your FAA checkride. Whether you aim to fly recreationally or pursue an aviation career, this course sets the foundation for your success.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: "Private Pilot License",
      descriptions: [
        "Our Private Pilot License program combines personalized instruction, modern aircraft, and a supportive learning environment to help you achieve your goals efficiently and confidently.",
      ],
      steps: [
        {
          title: "Meet Eligibility Requirements",
          paragraphs: [
            "To begin your Private Pilot training, you must meet basic FAA requirements, including being at least 17 years old, obtaining a third-class medical certificate, and demonstrating proficiency in English. At LA Flight Academy, we guide you through the process to ensure a smooth start.",
          ],
          imagePath: "/src/assets/lafa-admin-cameron-diamond-enrolling-new-student-pilot.jpg",
          imageAlt: "LA Flight Academy CFI enrolling a new student",
        },
        {
          title: "Ground School Training",
          paragraphs: [
            "Our ground school equips you with essential knowledge in aerodynamics, navigation, weather, regulations, and more. With expert instructors and tailored study materials, you'll be prepared to ace the FAA Knowledge Test and build a solid foundation for flight training.",
          ],
          imagePath: "/src/assets/lafa-student-taking-ground-lessons-2.jpg",
          imageAlt: "LA Flight Academy students during a ground school session",
        },
        {
          title: "Flight Training",
          paragraphs: [
            "Learn to fly at Van Nuys Airport with experienced instructors. Our program includes 40 hours of flight training, covering takeoffs, landings, maneuvers, and emergency procedures. Night flying and simulated instrument training are also integrated to ensure well-rounded skill development.",
          ],
          imagePath: "/src/assets/lafa-taking-out-plane-for-lesson.jpg",
          imageAlt:
            "Student pilot and instructor preparing for flight at Van Nuys",
        },
        {
          title: "Solo Flight Experience",
          paragraphs: [
            "Experience the thrill of flying solo! Under your instructor's guidance, you'll gain the confidence to act as pilot in command, practicing maneuvers and cross-country flights independently.",
          ],
          imagePath: "/src/assets/lafa-archer-blog-cover.jpg",
          imageAlt: "LA Flight Academy student on their first solo flight",
        },
        {
          title: "Cross-Country and Night Training",
          paragraphs: [
            "Prepare for cross-country and night flying with structured lessons designed to build confidence and proficiency. Navigate to unfamiliar airports, communicate with ATC, and operate safely in low-visibility conditions.",
          ],
          imagePath: "/src/assets/lafa-plane-over-mountains.jpg",
          imageAlt:
            "LA Flight Academy aircraft on a cross-country training flight",
        },
        {
          title: "Pass the FAA Knowledge Test",
          paragraphs: [
            "Our ground school and study materials thoroughly prepare you for the FAA Knowledge Test, ensuring you have the knowledge and confidence to pass on your first attempt.",
          ],
          imagePath: "/src/assets/jason-coudriet-studying.jpg",
          imageAlt: "Student taking the FAA Knowledge Test",
        },
        {
          title: "Prepare for and Pass the Checkride",
          paragraphs: [
            "The final step is the FAA checkride, where you'll demonstrate your knowledge and skills to an examiner. At LA Flight Academy, we provide mock checkrides and detailed feedback to help you succeed with confidence.",
          ],
          imagePath: "/src/assets/pilot-and-examiner-checkride.jpg",
          imageAlt: "Pilot and examiner conducting a checkride",
        },
      ],
      finalParagraph:
        "Completing your Private Pilot License at LA Flight Academy is your first step toward exploring the skies with confidence and independence.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
    },
  },
};
export default privatePilotCourse;
