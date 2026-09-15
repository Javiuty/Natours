import nat8 from "../assets/nat-8.jpg";
import nat9 from "../assets/nat-9.jpg";

export interface NavLink {
  /** Se muestra delante de la etiqueta, en su propio <span> */
  index: string;
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { index: "01", label: "About Natours", href: "#" },
  { index: "02", label: "Your benefits", href: "#" },
  { index: "03", label: "Popular tours", href: "#" },
  { index: "04", label: "Stories", href: "#" },
  { index: "05", label: "Book now", href: "#" },
];

export interface Feature {
  /** Clase de la fuente de iconos linea-basic (ver public/css/styles.css) */
  icon: string;
  title: string;
  text: string;
}

const featureText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa ipsam eius dolorum voluptas?";

export const features: Feature[] = [
  { icon: "icon-basic-world", title: "Explore the world", text: featureText },
  { icon: "icon-basic-compass", title: "Meet nature", text: featureText },
  { icon: "icon-basic-map", title: "Find your way", text: featureText },
  { icon: "icon-basic-heart", title: "Live a healthier life", text: featureText },
];

/** Cada tour usa una de las tres parejas de color del tema. La paleta elegida
 *  determina también qué foto lleva la cara frontal. */
export type TourPalette = "secondary" | "primary" | "tertiary";

export interface Tour {
  palette: TourPalette;
  title: string;
  details: string[];
  price: string;
}

export const tours: Tour[] = [
  {
    palette: "secondary",
    title: "The Sea Explorer",
    details: [
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy",
      "Difficulty: easy",
    ],
    price: "$297",
  },
  {
    palette: "primary",
    title: "The forest hiker",
    details: [
      "7 day tour",
      "Up to 40 people",
      "6 tour guides",
      "Sleep in provided tents",
      "Difficulty: medium",
    ],
    price: "$497",
  },
  {
    palette: "tertiary",
    title: "The snow adventurer",
    details: [
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy",
      "Difficulty: easy",
    ],
    price: "$897",
  },
];

export interface Story {
  image: ImageMetadata;
  name: string;
  title: string;
  text: string;
}

const storyText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi minima repellendus eum consequuntur earum atque incidunt nulla laboriosam similique, eligendi voluptas laborum odio iusto in facere adipisci maxime quisquam consequuntur earum atque.";

export const stories: Story[] = [
  {
    image: nat8,
    name: "Mary Smith",
    title: "I had the best week with my family",
    text: storyText,
  },
  {
    image: nat9,
    name: "Jack Wilson",
    title: "WOW! My life is completely different now",
    text: storyText,
  },
];

export const footerLinks = [
  { label: "Company", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Terms", href: "#" },
];
