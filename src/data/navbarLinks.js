export const navbarLinks = [
  {
    name: "Home",
    link: "/",
    mobileLink: true,
    submenu: [],
  },
  {
    name: "Career Path",
    link: "/path",
    mobileLink: true,
    submenu: [],
  },
  {
    name: "Courses",
    link: "/programs",
    mobileLink: false,
    submenu: [
      {
        name: "Private Pilot",
        link: "/programs/private-pilot-course",
      },
      {
        name: "Instrument Rating",
        link: "/programs/instrument-rating",
      },
      {
        name: "Commercial Pilot",
        link: "/programs/commercial-pilot",
      },
      {
        name: "Multi-Engine Rating",
        link: "/programs/multi-engine-rating",
      },
      {
        name: "Flight Instructor",
        link: "/programs/certified-flight-instructor",
      },
      {
        name: "Advanced Training",
        link: "/programs/advanced-trainings",
      },
    ],
  },
  // {
  //   name: "Packages",
  //   link: "/packages/gallery",
  //   mobileLink: false,
  //   submenu: [
  //     {
  //       name: "Gallery",
  //       link: "/packages/gallery",
  //     },
  //     {
  //       name: "Fleet",
  //       link: "/packages/fleet",
  //     },
  //     {
  //       name: "Crew",
  //       link: "/packages/crew",
  //     },
  //   ],
  // },
  {
    name: "Fleet",
    link: "/packages/fleet",
    mobileLink: true,
    submenu: [],
  },
  {
    name: "Instructors",
    link: "/packages/crew",
    mobileLink: true,
    submenu: [],
  },
  {
    name: "Financing",
    link: "/financing",
    mobileLink: false,
    submenu: [
      {
        name: "Financing",
        link: "/financing",
      },
      {
        name: "Insurance",
        link: "https://www.avemco.com/products/renter?partner=LA16",
      },
    ],
  },
  {
    name: "About",
    link: "/about",
    mobileLink: false,
    submenu: [
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Gallery",
        link: "/packages/gallery",
      },
      {
        name: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    name: "Enroll Today",
    link: "/enroll-now",
    mobileLink: true,
    submenu: [],
  },
];
