const commercialPilot = {
  data: {
    slug: "commercial-pilot",
    // SEO Header Stuff
    pageTitle: "COMMERCIAL PILOT | LA Flight Academy",
    pageDescription:
      "Launch your professional aviation career in Los Angeles with LA Flight Academy's Commercial Pilot program. Our Van Nuys Airport-based training provides the advanced skills, complex aircraft experience, and industry connections you need to succeed as a professional pilot in Southern California and beyond.",
    pageKeywords:
      "Commercial Pilot training Van Nuys, advanced pilot certification Los Angeles, professional aviation career California, commercial pilot license LA, FAA CPL training Southern California, career pilot program, become airline pilot Los Angeles",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/LAFA-CP-cover.jpg",
      imageAlt: "LAFA aircraft in flight, viewed from behind the pilots",
      headerH1: `Commercial <br>Pilot</span>`,
      paragraph: `Take the next step toward a career in aviation with a Commercial Pilot License (CPL). At LA Flight Academy, we provide advanced training that prepares you for the professional world of aviation while refining your piloting skills.`,
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
      title: `Commercial Pilot <br> Certification`,
      paragraphs: [
        "A Commercial Pilot License (CPL) is essential for anyone pursuing a career in aviation. This certification allows you to be compensated for flying and opens doors to opportunities such as becoming a flight instructor, corporate pilot, or airline pilot.",
        "At LA Flight Academy, we prioritize safety, professionalism, and precision. Our CPL training emphasizes advanced aircraft handling, complex operations, and decision-making under pressure, ensuring you graduate as a confident and capable pilot.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: "Commercial Pilot",
      descriptions: [
        "LA Flight Academy’s Commercial Pilot program provides structured training designed to meet FAA requirements and exceed industry expectations. From complex aircraft operations to multi-engine proficiency, we prepare you for a rewarding aviation career.",
      ],
      steps: [
        {
          title: "Meet Eligibility Requirements",
          paragraphs: [
            "To enroll in the Commercial Pilot program, you must hold a valid Private Pilot License (PPL), an Instrument Rating, and meet FAA medical requirements (at least a Second-Class Medical Certificate).",
            "You’ll also need to have logged a minimum of 250 flight hours by the end of the program, including time as Pilot-in-Command (PIC). Our team will work with you to review your logbook and ensure you’re ready to begin this next stage of training.",
          ],
          imagePath: "/src/assets/lafa-plane-2.jpg",
          imageAlt: "LAFA plane viewed from behind",
        },
        {
          title: "Ground School Training",
          paragraphs: [
            "Our ground school sessions provide in-depth instruction on advanced aerodynamics, commercial flight operations, FAA regulations, and safety protocols. We’ll also cover topics such as weight and balance, performance calculations, and advanced navigation techniques.",
            "These classes are designed to prepare you for the FAA Commercial Pilot Knowledge Test, ensuring you have a solid foundation in the theoretical aspects of commercial flying.",
          ],
          imagePath: "/src/assets/ground-school-commercial.jpg",
          imageAlt: "Students in a classroom at LA Flight Academy",
        },
        {
          title: "Complex Aircraft Training",
          paragraphs: [
            "As part of the CPL requirements, you’ll train in a complex aircraft equipped with retractable landing gear, a constant-speed propeller, and flaps. This training sharpens your skills in handling advanced systems and prepares you for the challenges of commercial aviation.",
            "Our fleet includes aircraft specifically designed to meet the FAA’s complex training requirements, giving you hands-on experience with systems used in professional operations.",
          ],
          imagePath: "/src/assets/lafa-inside-plane.jpg",
          imageAlt: "Pilot operating a complex aircraft cockpit",
        },
        {
          title: "Flight Training",
          paragraphs: [
            "During this phase, you’ll refine your skills in precision maneuvers, emergency procedures, and advanced navigation. You’ll log at least 100 hours as Pilot-in-Command (PIC) and complete specific cross-country flight requirements.",
            "This training ensures you’re proficient in advanced flight techniques, from chandelles and lazy eights to steep spirals and simulated engine failures.",
          ],
          imagePath: "/src/assets/lafa-taking-out-plane-for-lesson.jpg",
          imageAlt: "Instructor and student performing flight maneuvers",
        },
        {
          title: "Cross-Country and Solo Flights",
          paragraphs: [
            "As part of the FAA requirements, you’ll complete cross-country flights of at least 300 nautical miles, demonstrating your ability to plan and execute long-distance operations.",
            "These flights test your proficiency in navigation, fuel management, and decision-making, ensuring you’re ready for real-world commercial flight operations.",
          ],
          imagePath: "/src/assets/lafa-flight-training.jpg",
          imageAlt: "Student pilot preparing for a cross-country flight",
        },
        {
          title: "Pass the FAA Knowledge Test",
          paragraphs: [
            "Before advancing to the checkride, you’ll need to pass the FAA Commercial Pilot Knowledge Test. This exam evaluates your understanding of advanced aerodynamics, regulations, and commercial operations.",
            "Our instructors provide personalized support and access to study materials, helping you build confidence and achieve success on the test.",
          ],
          imagePath: "/src/assets/jason-coudriet-studying.jpg",
          imageAlt: "Student reviewing FAA test materials",
        },
        {
          title: "Prepare for and Pass the Checkride",
          paragraphs: [
            "The final step in earning your Commercial Pilot License is passing the FAA CPL Checkride. This rigorous evaluation includes an oral exam to assess your theoretical knowledge and a practical flight test to demonstrate your advanced skills.",
            "With mock checkrides, one-on-one coaching, and individualized feedback, LA Flight Academy ensures you’re fully prepared to meet and exceed the FAA standards.",
          ],
          imagePath: "/src/assets/pilot-and-examiner-checkride.jpg",
          imageAlt: "Pilot and examiner conducting a checkride",
        },
      ],
      finalParagraph:
        "Earning your Commercial Pilot License at LA Flight Academy positions you for success in the aviation industry. With advanced training, professional instructors, and real-world experience, you’ll graduate ready to pursue your aviation career.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
    },
  },
};

export default commercialPilot;
