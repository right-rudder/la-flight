import {
  COMPANY_NAME
} from "/src/consts.ts";

// Dynamically import all images from the folder
const images = import.meta.glob("/public/gallery/*.{jpeg,jpg,JPG,png,gif,webp}", { eager: true });

const galleryData = {
  data: {
    // SEO Header Stuff
    pageTitle: `Gallery | ${COMPANY_NAME}`,
    pageDescription:
      "Explore LA Flight Academy’s photo gallery featuring images of our fleet, training sessions, student achievements, and life at Van Nuys Airport. See what makes us the top choice for aspiring pilots in Southern California.",
    pageKeywords:
      "flight training photos, LA Flight Academy gallery, aviation school images, pilot training Van Nuys, fleet and facilities gallery, student pilot achievements",

    // Top Header
    header: {
      stars: false,
      imagePath: "/src/assets/LAFA-welcome-inside-plane.jpg",
      imageAlt: "The inside of one of our planes",
      headerH1: `Gallery <br><span>Snapshots of LAFA</span>`,
      paragraph: `Step inside LA Flight Academy through our photo gallery. From well-maintained aircraft to moments of achievement and camaraderie, these snapshots capture the essence of our aviation community.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Contact Us",
          link: "/contact-us",
          primary: false,
        },
      ],
    },

    // Dynamically populate pictures array
    pictures: Object.keys(images).map((path) => {
      const filename = path.split("/").pop(); // Get file name for alt text
      return {
        imagePath: path,
        imagePathPub: path.replace("/public", ""), // Remove `/public` URL
        imageAlt: filename?.replace(/[-_]/g, " ").replace(/\.[^/.]+$/, "") || "Gallery image", // Generate alt text from filename
      };
    }),
  },
};

export default galleryData;
