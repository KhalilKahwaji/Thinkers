import omarSam from "../assets/events/omar-sam.png";
import nicolasTawk from "../assets/events/nicolas-tawk.png";

export type Branch = "Zahle" | "Jounieh" | "Jbeil";

export type EventItem = {
  id: string;
  title: string;
  dateStartISO: string;   // show time
  doorsISO?: string;      // doors open
  branch: Branch;
  priceUSD: number;
  rsvpPhone?: string;     // tel: link
  image: string;          // imported poster
  description?: string;
  tags?: string[];
  mapsQuery?: string;     // Google Maps query for quick Directions button
  ticketsUrl?: string;    // optional external link
};

export const events: EventItem[] = [
  {
    id: "omar-layza-sam-ghazal-2025-09-20",
    title: "Omar Layza & Sam Ghazal — Stand-up Night",
    dateStartISO: "2025-09-20T21:00:00+03:00",
    doorsISO: "2025-09-20T20:30:00+03:00",
    branch: "Zahle",
    priceUSD: 25,
    rsvpPhone: "+96170178859",
    image: omarSam,
    description:
      "Full comedy night with Omar Layza & Sam Ghazal. Limited seats — RSVP recommended.",
    tags: ["Comedy", "Stand-up"],
    mapsQuery: "Thinkers%20C.C.C%20Zahle",
  },
  {
    id: "nicolas-tawk-2025-08-13",
    title: "Nicolas Tawk — Full Hour Show",
    dateStartISO: "2025-08-13T21:00:00+03:00",
    doorsISO: "2025-08-13T20:30:00+03:00",
    branch: "Zahle",
    priceUSD: 25,
    rsvpPhone: "+96170178859",
    image: nicolasTawk,
    description:
      "A full hour of Nicolas Tawk at Thinkers Zahle Branch.",
    tags: ["Comedy", "Arabic"],
    mapsQuery: "Thinkers%20C.C.C%20Zahle",
  },
];
