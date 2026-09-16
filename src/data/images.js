/**
 * ============================================================
 *  SAARE IMAGES KA EK HI JAGAH PATH  -> src/data/images.js
 * ============================================================
 *  Tumhare images folder: src/assets/homepage/
 *
 *  Sirf NEECHE ke filename badalne hain (extension ke saath),
 *  jaisa tumhare folder me actual naam hai. Baaki poore project
 *  me kahin bhi image path chhune ki zaroorat NAHI hai.
 *
 *  Agar tum apni files ka naam neeche diye naam jaisa rakh do,
 *  to kuch bhi edit karne ki zaroorat nahi.
 * ============================================================
 */

import hero from "../assets/Homepage/hero.png";
import about from "../assets/homepage/about.jpeg";
import whyUs from "../assets/homepage/about.jpeg";
import approach from "../assets/homepage/approach.jpeg";
import court from "../assets/homepage/court.jpeg";

import team1 from "../assets/homepage/team-1.jpeg";
import team2 from "../assets/homepage/team-2.jpeg";
import team3 from "../assets/homepage/team-3.jpeg";

import insight1 from "../assets/homepage/insight-1.jpeg";
import insight2 from "../assets/homepage/insight-2.jpeg";
import insight3 from "../assets/homepage/insight-3.jpeg";

const images = {
  hero, // Hero section ka background (Lady Justice / pillars)
  about, // About section ka left card image (books + scales)
  whyUs, // "Why Meenakshi Law Associates" dark band ka right image
  approach, // "A Disciplined Approach" dark band ka left image
  court, // "Where We Practise" ka left image (Madras High Court)

  team1, // Adv. Meenakshi
  team2, // Adv. Arjun Krishnan
  team3, // Adv. Priya Sharma

  insight1, // Property Law article thumb
  insight2, // Corporate Law article thumb
  insight3, // Legal Insight article thumb
};

export default images;
