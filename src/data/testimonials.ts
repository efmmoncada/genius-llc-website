type Testimonial = {
  logoSrc: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    logoSrc: "/vinesh_lal.jpg",
    company: "Vinesh Lal",
    quote:
      "Genius Express Delivery owner was extremely professional, courteous, customer-focused, and committed to staying on the forefront of delivery excellence. Knowing time was of the essence, Genius Express Delivery was extremely efficient and quick to respond to any special requests we made.",
  },
  {
    logoSrc: "/shane.png",
    company: "Shane Jorgensen - Canby Signs and Graphics",
    quote:
      "I appreciate the smiles that show up when Genius Express trucking arrives with our delivery. Ravin is a good man and though our interactions are typically brief I’m left happier for the encounter. Ravin Singh and his wonderful wife radiate warmth and well being that always seems to brighten my day. I certainly appreciate them and I think you will too.",
  },
];

export default testimonials;
