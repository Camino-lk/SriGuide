// ── Plan: South Coast & Hill Country (8 days)

import type { TripPlan } from "./types";

const plan: TripPlan = {
  id: "south-and-hills-8d",
  title: "South Coast & Hill Country",
  description:
    "Eight days combining Sri Lanka's best beaches, colonial Galle Town, wildlife at Yala, and the cool tea-covered hills around Ella.",
  days: 8,
  groupTypes: ["solo", "couple", "family"],
  pace: "moderate",
  themes: ["beach", "nature", "wildlife", "history", "photography"],
  regions: ["Western", "Southern", "Uva"],
  startCity: "Colombo / Negombo",
  endCity: "Colombo",
  year: 2026,
  highlights: [
    "Wonderful beaches at Mirissa and Tangalle, with a chance to see nesting turtles at Rekawa",
    "Yala National Park for a chance to see leopards and elephants in the wild",
    "Morning hikes around Ella with stunning views over tea estates and the surrounding hills",
    "Galle Fort for a dose of history and colonial architecture, with great sunset instagram worthy shots",
  ],
  stops: [
    {
      name: "Colombo",
      lat: 6.91666,
      lon: 79.85536,
      day: 1,
      category: "city",
      region: "Western",
      duration: "half-day",
      isBase: true,
      note:
        "Transit day. If you arrive with time, Pettah Market or the Gangaramaya Temple are both worth a quick visit. Head south in the afternoon.",
    },
    {
      name: "Galle Fort",
      image: "/img/stops/galle-fort.avif",
      lat: 6.02704,
      lon: 80.21687,
      day: [1, 2],
      category: "landmark",
      region: "Southern",
      duration: "2+ nights",
      isBase: true,
      note:
        "A UNESCO-listed Dutch fort with good guesthouses inside the walls. Walk the ramparts at sunset. Plenty of photographic opportunities, historic buildings.",
    },
    {
      name: "Mirissa Beach",
      image: "/img/stops/mirissa-beach.avif",
      lat: 5.944865,
      lon: 80.458444,
      day: 3,
      category: "beach",
      region: "Southern",
      duration: "full-day",
      note:
        "30 minutes east of Galle. Tides may be strong during some seasons. Swimming, whale watching, snorkeling activities available.",
    },
    {
      name: "Tangalle",
      lat: 6.022686,
      lon: 80.800745,
      day: [3, 4],
      category: "beach",
      region: "Southern",
      duration: "overnight",
      isBase: true,
      note:
        "Quieter than Mirissa, longer beaches. Rekawa beach (20 min east) has turtle nesting. Caution with swimming here - strong currents at times and lifeguards may not be present.",
    },
    {
      name: "Rekawa Beach",
      lat: 6.043084,
      lon: 80.860610,
      day: 4,
      category: "wildlife",
      region: "Southern",
      duration: "1-2 hours",
      note:
        "Turtle nesting site and night functions available. Check with local places around here for activities. Not ideal for swimming and be responsible not to disturb the turtles.",
    },
    {
      name: "Yala National Park",
      image: "/img/stops/yala-national-park.avif",
      lat: 6.46365,
      lon: 81.47239,
      day: [4, 5],
      category: "wildlife",
      region: "Southern",
      duration: "overnight",
      isBase: true,
      note:
        "Best visited on a half-day morning safari. Leopards, elephants, and other wildlife are the main attraction. Book a jeep in advance.",
    },
    {
      name: "Ella",
      image: "/img/stops/ella.avif",
      lat: 6.87566,
      lon: 81.04705,
      day: [5, 7],
      category: "viewpoint",
      region: "Uva",
      duration: "2+ nights",
      isBase: true,
      note:
        "Drive or take the train from Ella Road station. The train journey from Kandy through the hills is famous.",
    },
    {
      name: "Nine Arch Bridge",
      image: "/img/stops/nine-arch-bridge.avif",
      lat: 6.87683,
      lon: 81.06070,
      day: 6,
      category: "landmark",
      region: "Uva",
      duration: "1-2 hours",
      note:
        "A short walk from Ella town. Best to visit around morning time or check the train schedule to catch a train. Arrive early for a spot since it can get busy during peak season.",
    },
    {
      name: "Little Adam's Peak",
      image: "/img/stops/little-adams-peak.avif",
      lat: 6.86511,
      lon: 81.06307,
      day: 6,
      category: "viewpoint",
      region: "Uva",
      duration: "half-day",
      note:
        "An easy 2-hour hike through tea estates. Go in the morning before cloud builds or plan for evening sunset. Much easier than Adam's Peak with nearly as good a payoff.",
    },
    {
      name: "Lipton's Seat",
      image: "/img/stops/liptons-seat.avif",
      lat: 6.78065,
      lon: 81.01551,
      day: 7,
      category: "viewpoint",
      region: "Uva",
      duration: "half-day",
      note:
        "A short tuk-tuk ride from Ella. Nice views over the surrounding tea estates. Almost always in the clouds by 10am - go early.",
    },
    {
      name: "Colombo",
      lat: 6.93348,
      lon: 79.85004,
      day: 8,
      category: "city",
      region: "Western",
      duration: "half-day",
      isBase: true,
      note:
        "Return via train or expressway. The Ella - Colombo train is long (7+ hrs) but beautiful. Budget a full day if taking it.",
    },
  ],
};

export default plan;
