const programsRoadmap = {
  upperHeading: "Roadmap",
  heading: "Flight Training Programs at LA Flight Academy",
  descriptions: [
    "At LA Flight Academy—based at Van Nuys Airport in Los Angeles—we offer a full suite of pilot certifications and ratings, from your very first solo flight through to career preparation. Our programs combine personalized instruction, an industry-leading aircraft fleet, and a clear pathway to professional aviation roles.",
  ],
  steps: [
    {
      title: "Private Pilot License (PPL)",
      link: "/programs/private-pilot-course",
      lists: [
        {
          title: "What you'll learn:",
          items: [
            "Fundamentals of aircraft operation under visual flight rules (VFR)",
            "Includes solo cross‑country and night flying requirements",
            "Typical training: ~60–75 hours (FAA Part 61 minimum is 40 hours; most students exceed this) ",
          ],
        },
        {
          title: "Why choose it:",
          items: [
            "Launch your pilot journey",
            "Fly for personal enjoyment or travel",
            "Build foundational skills for advanced ratings",
          ],
        },
      ],
      paragraphs: [
        "At LAFA, our PPL course combines flight training and ground instruction to build your confidence and foundational knowledge. This step provides the groundwork for all advanced ratings and certificates, ensuring you’re ready for the challenges ahead.",
      ],
      imagePath: "/src/assets/lafa-private-pilot.jpg",
      imageAlt:
        "LA Flight Academy student holding their private pilot certificate",
    },
    {
      title: "Instrument Rating (IR)",
      link: "/programs/instrument-rating",
      lists: [
        {
          title: "What you'll learn:",
          items: [
            "Navigating and flying under instrument flight rules (IFR)",
            "Includes 50 hrs PIC cross‑country, 40 hrs actual/simulated IFR",
          ],
        },
        {
          title: "Why choose it:",
          items: [
            "Fly in low-visibility, weather-related conditions",
            "Enhance safety and decision-making skills",
            "Prepare for commercial aviation roles",
          ],
        },
      ],
      paragraphs: [
        "At LAFA, our training ensures precision in IFR operations and prepares you for scenarios that are standard in airline operations. An IR is essential for transitioning to commercial aviation roles.",
      ],
      imagePath: "/src/assets/fleet/fleet-219EL-cirrus-cockpit-instrument-panel-side-view-lafa-flight-school-calabasas-ca.jpg",
      imageAlt: "LA Flight Academy airplane flying under IFR conditions",
    },
    {
      title: "Commercial Pilot License (CPL)",
      link: "/programs/commercial-pilot",
      lists: [
        {
          title: "What you'll learn:",
          items: [
            "Advanced aeronautical knowledge & skills",
            "Minimum 250 total flight hours required (FAA Part 61)",
          ],
        },
        {
          title: "Why choose it:",
          items: [
            "Enables compensation for flying",
            "Covers commercial single-engine and optional multi-engine training",
            "Opens career doors in charter, cargo, and more",
          ],
        },
      ],
      paragraphs: [
        "At LAFA, our CPL program emphasizes advanced maneuvers, complex aircraft operations, and professionalism in aviation. This certificate opens doors to roles in passenger transport, cargo, or other specialized aviation fields.",
      ],
      imagePath: "/src/assets/LAFA-CP-cover.jpg",
      imageAlt:
        "LA Flight Academy student during a commercial pilot training session",
    },
    {
      title: "Certified Flight Instructor (CFI/CFII/MEI)",
      link: "/programs/certified-flight-instructor",
      lists: [
        {
          title: "What you'll learn:",
          items: [
            "Teach others to fly—private, instrument, and multi-engine levels",
            "Includes instructional methodology, maneuvers, and communication skills",
          ],
        },
        {
          title: "Why choose it:",
          items: [
            "Build solid flight hours and experience",
            "High-employment demand at flight schools and universities",
            "Launch teaching career or boost your resume",
            "Build hours toward ATP requirements",
          ],
        },
      ],
      paragraphs: [
        "At LAFA, we offer tailored CFI programs that prepare you to instruct with confidence and professionalism. This step immerses you in the aviation community and accelerates your progress toward your career goals.",
      ],
      imagePath: "/src/assets/LAFA-CFI-cover.jpg",
      imageAlt: "LA Flight Academy instructor teaching a student pilot",
    },
    {
      title: "Multi‑Engine Rating (ME)",
      link: "/programs/multi-engine-rating",
      lists: [
        {
          title: "What you'll learn:",
          items: [
            "Operation of multi-engine aircraft",
            "Handles complex systems and performance",
            "FAA requires 10 hrs in complex or advanced aircraft for ME rating",
          ],
        },
        {
          title: "Why choose it:",
          items: [
            "Earn more versatile flight privileges",
            "Critical for professional roles",
            "Enhances safety and efficiency in flight operations",
          ],
        },
      ],
      paragraphs: [
        "Our multi-engine training focuses on precision, safety, and operational excellence. Adding this rating is a key step toward airline readiness, as it enhances your credentials and broadens your career opportunities.",
      ],
      imagePath: "/src/assets/LAFA-ME-cover.jpg",
      imageAlt: "LA Flight Academy multi-engine aircraft on the runway",
    },
    {
      title: "Advanced & Add-On Training",
      link: "/programs/advanced-trainings",
      lists: [
        {
          title: "Advanced Training Programs:",
          items: [
            "Complex Aircraft Training",
            "High-Performance Aircraft Training",
            "Spin Recovery Training",
          ],
        },
        {
          title: "Checks and Reviews:",
          items: [
            "Biennial Flight Reviews (BFRs)",
            "Instrument Proficiency Checks (IPCs)",
          ],
        },
      ],
      paragraphs: [
        "Each advanced training program is structured to provide an in-depth focus on specific areas of aviation expertise. From mastering high-performance aircraft to preparing for real-world flight challenges, our instructors are here to guide you every step of the way.",
      ],
      imagePath: "/src/assets/lafa-flight-training.jpg",
      imageAlt:
        "LA Flight Academy Pilot undergoing advanced flight training in a complex aircraft",
    },
  ],
  finalParagraph:
    "Ready to take the first step in your aviation journey? Enroll in LA Flight Academy’s Private Pilot Course today and begin your path to becoming an airline pilot.",
  finalButton: {
    name: "Get More Info",
    link: "#contactUs",
    primary: true,
  },
};

export default programsRoadmap;
