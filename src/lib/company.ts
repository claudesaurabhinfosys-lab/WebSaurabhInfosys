/* Company facts, kept apart from data.ts on purpose: client components import
   this directly, and importing it from data.ts would pull the whole content
   file (every blog post and case study) into the browser bundle. */
export const COMPANY = {
  name: "Saurabh Infosys",
  tagline: "AI-first software development studio",
  location: "Ahmedabad, Gujarat, India",
  website: "saurabhinfosys.com",
  email: "info@saurabhinfosys.com",
  phone: "+91 8735001217",
  whatsapp: "918735001217",
  stats: {
    clients: "80+",
    projects: "150+",
    years: "4+",
    saasProducts: "3",
    clutchRating: "4.9",
    clutchReviews: "33",
  },
};
