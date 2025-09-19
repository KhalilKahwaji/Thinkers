import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),             // "/"
  route("events", "routes/events.tsx"), // "/events"
  route("tour", "routes/tour.tsx"),     // "/tour"

  route("contact", "routes/contact.tsx"),
  route("concept", "routes/concept.tsx"),
  route("expansion", "routes/expansion.tsx"),
  route("community", "routes/community.tsx"),
  route("mission", "routes/mission.tsx"),
] satisfies RouteConfig;
