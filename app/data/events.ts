import omarSam from "../assets/events/omar-sam.png";
import nicolasTawk from "../assets/events/nicolas-tawk.png";
import ev1 from "../assets/events/event1.png";
import ev2 from "../assets/events/event2.png";
import ev3 from "../assets/events/event3.png";
import ev4 from "../assets/events/event4.png";


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
  {
    id: "event-1-2025-08-10",
    title: "Acoustic Evening — Local Artists",
    dateStartISO: "2025-08-10T20:30:00+03:00",
    doorsISO: "2025-08-10T20:00:00+03:00",
    branch: "Jounieh",
    priceUSD: 10,
    rsvpPhone: "+96171000000",
    image: ev1,
    description: "Chill acoustic sets with coffee pairings.",
    tags: ["Music", "Acoustic"],
    mapsQuery: "Thinkers%20C.C.C%20Jounieh",
  },
  {
    id: "event-2-2025-09-10",
    title: "Latte Art Mini-Workshop",
    dateStartISO: "2025-09-10T19:00:00+03:00",
    doorsISO: "2025-09-10T18:30:00+03:00",
    branch: "Zahle",
    priceUSD: 15,
    rsvpPhone: "+96171000000",
    image: ev2,
    description: "Basics of steaming and pouring. Beginners welcome.",
    tags: ["Workshop", "Coffee"],
    mapsQuery: "Thinkers%20C.C.C%20Zahle",
  },

  // UPCOMING
  {
    id: "event-3-2025-10-05",
    title: "Stand-up Night — Open Mic",
    dateStartISO: "2025-10-05T20:30:00+03:00",
    doorsISO: "2025-10-05T20:00:00+03:00",
    branch: "Jbeil",
    priceUSD: 12,
    rsvpPhone: "+96171000000",
    image: ev3,
    description: "Open mic for rising comedians. Good vibes only.",
    tags: ["Comedy", "Community"],
    mapsQuery: "Thinkers%20C.C.C%20Jbeil",
  },
  {
    id: "event-4-2025-11-12",
    title: "Board Games & Brews",
    dateStartISO: "2025-11-12T19:30:00+02:00", // (DST could shift later; +02/+03 both okay)
    doorsISO: "2025-11-12T19:00:00+02:00",
    branch: "Zahle",
    priceUSD: 8,
    rsvpPhone: "+96171000000",
    image: ev4,
    description: "Casual gaming night with coffee specials.",
    tags: ["Games", "Community"],
    mapsQuery: "Thinkers%20C.C.C%20Zahle",
  },
];
