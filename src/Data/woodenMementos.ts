import wall3 from "../assets/sculptures/wall3.webp";
import wall3copy from "../assets/sculptures/wall3copy.webp";

import wall4 from "../assets/sculptures/wall4.webp";
import wall4copy from "../assets/sculptures/wall4copy.webp";
import type { ProductItem } from "./productHelpers";

export const woodenMementoProducts: ProductItem[] = [
  {
    id: "wall3",
    slug: "handcrafted-wooden-recognition-award-memento",
    name: "Wooden Recognition Award Memento",
    image: wall3,
    images: [wall3copy, wall3],
    material: "Natural Wood",
    dimensions: 'Approx. 10–12 in (H) × 4–5 in (W)',
    description:
      "Celebrate achievements with this handcrafted wooden recognition memento featuring a modern curved silhouette, vibrant tribal-inspired artwork, and precision laser engraving. Crafted from premium wood with a smooth natural finish, it offers an elegant blend of artistry and professionalism, making it an ideal keepsake for awards, certifications, appreciation ceremonies, and corporate recognition.",
    designType: "Contemporary Curved Design, Tribal-Inspired Artistic Pattern",
    occasion: "Corporate Recognition Awards, Employee Appreciation",
  },

  {
    id: "wall4",
    slug: "modern-wooden-curved-award-trophy-memento",
    name: "Modern Wooden Curved Award Trophy Memento",
    image: wall4,
    images: [wall4copy, wall4],
    material: "Natural Wood",
    dimensions: 'Approx. 10–12 in (H) × 4–5 in (W)',
    description:
      "Honor achievements with this handcrafted wooden award memento featuring a graceful curved silhouette and rich natural wood grain. Expertly polished for a premium finish, its contemporary design symbolizes growth and excellence, making it an elegant keepsake for corporate recognition, academic achievements, appreciation ceremonies, and prestigious commemorative events.",
      designType: "Modern Abstract Curved Design, Minimalist Contemporary Style",
    occasion: "Corporate Recognition Awards, Employee Appreciation",
  },
];
