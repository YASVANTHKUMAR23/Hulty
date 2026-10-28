// Route targets are placeholders: point them at real pages when they exist.
export const NAV_LINKS = [
  { label: "Home", href: "/#home", current: true },
  { label: "Project", href: "/project" },
  { label: "About Us", href: "/about" },
  { label: "FAQ’s", href: "/faq" },
];

export const FOOTER_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Management", href: "/management" },
  { label: "Project", href: "/project" },
  { label: "FAQ’s", href: "/faq" },
];

export const TESTIMONIALS = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  quote:
    "They make it super easy and safe to find a room for rent, prioritizing both convenience and safety. The customer support team is exceptionally responsive and genuinely helpful, ensuring a smooth experience. I wholeheartedly endorse this platform.",
  name: "Ashley Cooper",
}));

export const SERVICES = [
  {
    number: "01",
    titleLines: ["Furniture", "Design"],
    description:
      "The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences.",
    dark: true,
  },
  {
    number: "02",
    titleLines: ["Interior", "Details"],
    description:
      "Incorporating interior detailing introduces dimension, tactile qualities, and captivating visual elements to a room, enhancing the overall design through the addition of those final embellishments.",
  },
  {
    number: "03",
    titleLines: ["Home", "Revamping"],
    description:
      "The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences.",
  },
];
