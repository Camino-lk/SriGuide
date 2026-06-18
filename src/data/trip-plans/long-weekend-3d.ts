// ── Plan: Long Weekend Escape (3 days)
// This content is AI generated and not to be enabled for production until reviewed

import type { TripPlan } from "./types";

const plan: TripPlan = {
  id: "long-weekend-3d",
  title: "Long Weekend Escape",
  description:
    "Three days, one iconic rock fortress, and the best beach within striking distance of the airport. Built for short stays.",
  days: 3,
  groupTypes: ["solo", "couple"],
  pace: "packed",
  themes: ["history", "beach", "photography"],
  regions: ["Western", "North Central", "North Western"],
  startCity: "Colombo / Negombo",
  endCity: "Colombo / Negombo",
  year: 2024,
  highlights: [
    "Sigiriya Rock in a focused day-trip without the multi-day loop",
    "Kalpitiya for quiet beaches away from the southern tourist trail",
    "In and out via Negombo — minimal airport transit time",
  ],
  stops: [
    {
      name: "Negombo",
      lat: 7.2008,
      lon: 79.8358,
      day: 1,
      category: "city",
      region: "Western",
      duration: "overnight",
      isBase: true,
      note:
        "Arrive and rest. Don't overthink Negombo — it's an airport town. Hamilton Canal area has a few decent local restaurants if you want to eat well.",
    },
    {
      name: "Sigiriya Rock Fortress",
      lat: 7.9520,
      lon: 80.7603,
      day: 2,
      category: "landmark",
      region: "North Central",
      duration: "half-day",
      note:
        "Hire a driver from Negombo (~2.5 hours each way). Arrive at opening time. Don't skip the water gardens at the base — underrated. Back in Negombo by early evening.",
    },
    {
      name: "Dambulla Cave Temple",
      lat: 7.8567,
      lon: 80.6487,
      day: 2,
      category: "religious",
      region: "North Central",
      duration: "1-2 hours",
      note: "Stop here on the return leg from Sigiriya — it's on the way. Roughly an hour is enough.",
    },
    {
      name: "Kalpitiya",
      lat: 8.2320,
      lon: 79.7650,
      day: [2, 3],
      category: "beach",
      region: "North Western",
      duration: "overnight",
      isBase: true,
      note:
        "If you want a beach day instead of Sigiriya, Kalpitiya is 2 hours north of Negombo. Quieter and less developed than the south. Dolphin watching trips run in the morning.",
    },
    {
      name: "Negombo Beach",
      lat: 7.2080,
      lon: 79.8310,
      day: 3,
      category: "beach",
      region: "Western",
      duration: "half-day",
      note:
        "Final morning at the beach before departure. Not Sri Lanka's best swimming beach but decent for a last few hours. Airport is 20 minutes away.",
    },
  ],
};

export default plan;
