import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

// Map URLs to files in app/routes/*
export default [
  index("routes/home.tsx"),           // "/"
  route("events", "routes/events.tsx"), // "/events"
  route("tour", "routes/tour.tsx")
] satisfies RouteConfig;
