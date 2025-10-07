// app/data/events.ts
import omarSam from "../assets/events/omar-sam.png";
import nicolasTawk from "../assets/events/nicolas-tawk.png";
import ahmadRodrigue from "../assets/events/ahmad_rodrigue.png";

import ev1 from "../assets/events/event1.png"; // John Achkar / group
import ev2 from "../assets/events/event2.png"; // Ladies' Happy Hour (Jounieh)
import ev3 from "../assets/events/event3.png"; // The Perfect Venue
import ev4 from "../assets/events/event4.png"; // DJ Night

export type Branch = "Zahle" | "Jounieh" | "Jbeil";

export type EventItem = {
  id: string;
  title: string;
  dateStartISO: string; // event start time (ISO)
  doorsISO?: string; // doors open time (ISO)
  branch: Branch;
  priceUSD: number;
  rsvpPhone?: string; // tel: link
  image: string; // poster / photo
  description?: string;
  tags?: string[];
  mapsQuery?: string; // for Directions button
  ticketsUrl?: string; // optional external link
};

// Branch → RSVP phone
const branchPhone: Record<Branch, string> = {
  Zahle: "+961 70 178 859",
  Jbeil: "+961 81 135 993",
  Jounieh: "+961 70 178 859",
};

// Branch → Google Maps query
const mapsByBranch: Record<Branch, string> = {
  Zahle: "Thinkers%20C.C.C%20Zahle",
  Jbeil: "Thinkers%20C.C.C%20Jbeil",
  Jounieh: "Thinkers%20C.C.C%20Jounieh",
};

export const events: EventItem[] = [
  // ——— PAST ———
  {
    id: "john-achkar-watch-2025-08-10",
    title: "Community Watch Night: “John Achkar — Tryin’”",
    dateStartISO: "2025-08-10T20:30:00+03:00",
    doorsISO: "2025-08-10T20:00:00+03:00",
    branch: "Zahle",
    priceUSD: 0, // free community hangout
    rsvpPhone: branchPhone["Zahle"],
    image: ev1,
    description: "Community gathering and discussion after the screening.",
    tags: ["Community", "Screening"],
    mapsQuery: mapsByBranch["Zahle"],
  },
  {
    id: "ladies-happy-hour-2025-09-10",
    title: "Ladies’ Happy Hour (Jounieh) — At Half the Price",
    dateStartISO: "2025-09-10T18:00:00+03:00",
    doorsISO: "2025-09-10T18:00:00+03:00",
    branch: "Jounieh",
    priceUSD: 0, // promo — prices discounted at POS
    rsvpPhone: branchPhone["Jounieh"],
    image: ev2,
    description:
      "Bring your besties and unwind. All drinks at half price from 6:00–8:00 PM.",
    tags: ["Promo", "Drinks"],
    mapsQuery: mapsByBranch["Jounieh"],
  },

  // ——— UPCOMING ———
  {
    id: "the-perfect-venue-2025-10-05",
    title: "The Perfect Venue — Outdoor Showcase",
    dateStartISO: "2025-10-05T19:30:00+03:00",
    doorsISO: "2025-10-05T19:00:00+03:00",
    branch: "Jbeil",
    priceUSD: 0,
    rsvpPhone: branchPhone["Jbeil"],
    image: ev3,
    description:
      "Explore our outdoor setup for private events, catering, and unforgettable moments.",
    tags: ["Showcase", "Catering", "Outdoor"],
    mapsQuery: mapsByBranch["Jbeil"],
  },
  {
    id: "dj-night-2025-11-12",
    title: "DJ Night — Live Set",
    dateStartISO: "2025-09-12T21:00:00+02:00",
    doorsISO: "2025-11-12T20:30:00+02:00",
    branch: "Zahle",
    priceUSD: 12,
    rsvpPhone: branchPhone["Zahle"],
    image: ev4,
    description: "A high-energy night with guest DJs and coffee specials.",
    tags: ["Music", "Nightlife"],
    mapsQuery: mapsByBranch["Zahle"],
  },

  // ——— Posters with exact details ———
  {
    id: "omar-layza-sam-ghazal-2025-09-20",
    title: "Omar Layza & Sam Ghazal — Stand-up Night",
    dateStartISO: "2025-09-20T21:00:00+03:00",
    doorsISO: "2025-09-20T20:30:00+03:00",
    branch: "Zahle",
    priceUSD: 25,
    rsvpPhone: branchPhone["Zahle"],
    image: omarSam,
    description:
      "Full comedy night with Omar Layza & Sam Ghazal. Limited seats — RSVP recommended.",
    tags: ["Comedy", "Stand-up"],
    mapsQuery: mapsByBranch["Zahle"],
  },
  {
    id: "nicolas-tawk-2025-08-13",
    title: "Nicolas Tawk — Full Hour Show",
    dateStartISO: "2025-08-13T21:00:00+03:00",
    doorsISO: "2025-08-13T20:30:00+03:00",
    branch: "Zahle",
    priceUSD: 25,
    rsvpPhone: branchPhone["Zahle"],
    image: nicolasTawk,
    description: "A full hour of Nicolas Tawk at Thinkers Zahle Branch.",
    tags: ["Comedy", "Arabic"],
    mapsQuery: mapsByBranch["Zahle"],
  },
  {
  id: "ahmad-rodrigue-2025-10-11",
  title: "Ahmad Seifeddine & Rodrigue Zgheib — Stand-up Comedy Show",
  dateStartISO: "2025-10-11T20:00:00+03:00",
  doorsISO: "2025-10-11T20:00:00+03:00",
  branch: "Zahle",
  priceUSD: 10,
  rsvpPhone: branchPhone["Zahle"],
  image: ahmadRodrigue,
  description: "Stand-up Comedy Show you won't forget!.",
  tags: ["Comedy", "Arabic"],
  mapsQuery: mapsByBranch["Zahle"],
},
];
