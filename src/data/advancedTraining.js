const advancedTrainings = {
  data: {
    slug: "advanced-trainings",
    // SEO Header Stuff
    pageTitle: "ADVANCED FLIGHT TRAININGS | LA Flight Academy",
    pageDescription:
      "Enhance your aviation expertise with advanced flight trainings at LA Flight Academy. Gain proficiency in complex, high-performance, multi-engine, spin training, and more.",
    pageKeywords:
      "Advanced flight trainings, complex aircraft training, multi-engine rating, high-performance training, spin training, advanced pilot certifications",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/lafa-advanced-training.jpg",
      imageAlt: "Pilot undergoing advanced flight training in a complex aircraft",
      headerH1: `Advanced <br class="hidden lg:block" ><span class="bg-gradient-to-br from-primary-700 via-muted-200 to-primary-700 bg-clip-text text-transparent">Trainings</span>`,
      paragraph:
        `Refine your skills and elevate your proficiency with LA Flight Academy’s advanced trainings. Designed for licensed pilots, these programs cover specialized areas like multi-engine operations, spin recovery, and high-performance aircraft, ensuring you're prepared for every challenge in the skies.`,
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
      title: `Advanced Flight <br> Trainings`,
      paragraphs: [
        "Our advanced trainings are tailored to pilots seeking to expand their knowledge and refine their expertise. Whether you aim to master multi-engine aircraft, tackle complex operations, or enhance spin recovery skills, we have a program for you.",
        "These specialized trainings are ideal for building confidence, upgrading certifications, and preparing for more challenging roles in aviation.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: "Advanced Trainings Overview",
      descriptions: [
        "Each advanced training program is structured to provide an in-depth focus on specific areas of aviation expertise. From mastering high-performance aircraft to preparing for real-world flight challenges, our instructors are here to guide you every step of the way.",
      ],
      steps: [
        {
          title: "Complex Aircraft Training",
          paragraphs: [
            "Learn to operate complex aircraft equipped with retractable landing gear, constant-speed propellers, and advanced avionics. This training enhances your proficiency and prepares you for real-world flight operations.",
            "Hands-on sessions focus on systems management, emergency procedures, and efficient performance in a variety of scenarios.",
          ],
          imagePath: "/src/assets/lafa-archer-blog-cover.jpg",
          imageAlt: "Pilot training on a complex aircraft with retractable gear",
        },
        {
          title: "High-Performance Aircraft Training",
          paragraphs: [
            "Gain the skills needed to fly aircraft with an engine output of more than 200 horsepower. High-performance training focuses on advanced handling, engine management, and precision maneuvers.",
            "This program is ideal for pilots looking to transition into faster, more powerful aircraft or pursue a career in corporate or charter aviation.",
          ],
          imagePath: "/src/assets/lafa-plane-3.jpg",
          imageAlt: "High-performance aircraft training session in progress",
        },
        {
          title: "Multi-Engine Training",
          paragraphs: [
            "Expand your capabilities with multi-engine training, a vital skill for advanced piloting roles. Learn to manage the unique challenges of multi-engine operations, including engine-out procedures, asymmetrical thrust, and performance optimization.",
            "Our accelerated program helps you master multi-engine aircraft in as little as 1.5 weeks, making it a popular choice for pilots nationwide.",
          ],
          imagePath: "/src/assets/LAFA-ME-cover.jpg",
          imageAlt: "Pilot learning multi-engine operations in an advanced aircraft",
        },
        {
          title: "Spin Training",
          paragraphs: [
            "Master spin awareness, recovery, and prevention techniques. Spin training is essential for CFIs and a valuable skill for all pilots seeking to handle emergency situations with confidence.",
            "This program emphasizes safety and control, equipping you with critical knowledge to prevent accidents and respond effectively under pressure.",
          ],
          imagePath: "/src/assets/lafa-plane-over-mountains.jpg",
          imageAlt: "Instructor demonstrating spin recovery techniques to a pilot",
        },
        {
          title: "BFRs and IPCs",
          paragraphs: [
            "Keep your skills sharp and certifications current with Biennial Flight Reviews (BFRs) and Instrument Proficiency Checks (IPCs). These sessions are tailored to your specific needs, focusing on areas where you seek improvement.",
            "Our experienced CFIs ensure a thorough and efficient review process, so you can return to flying with renewed confidence and expertise.",
          ],
          imagePath: "/src/assets/lafa-school.jpg",
          imageAlt: "Pilot completing a Biennial Flight Review with an instructor",
        },
      ],
      finalParagraph:
        "Whether you’re advancing your career or enhancing personal skills, LA Flight Academy’s advanced trainings provide the knowledge, experience, and confidence to excel. Join us to take your flying expertise to the next level.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
    },
  },
};

export default advancedTrainings;
