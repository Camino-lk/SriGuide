// ── Plan: Cultural Triangle Classic (5 days)

import type { TripPlan } from "./types";

const plan: TripPlan = {
  id: "cultural-triangle-5d",
  title: "Cultural Triangle Classic",
  description:
    "Sri Lanka's greatest ancient sites in five days: Sigiriya, Polonnaruwa, Dambulla, and Kandy, without the rush.",
  days: 5,
  groupTypes: ["solo", "couple", "group"],
  pace: "moderate",
  themes: ["history", "culture", "religious", "photography"],
  regions: ["Western", "North Central", "Central"],
  startCity: "Colombo / Negombo",
  endCity: "Colombo",
  year: 2026,
  highlights: [
    "Visit the Dambulla Cave Temple, a complex of Buddhist cave shrines with impressive murals and statues",
    "Climb Sigiriya Rock Fortress: the iconic 'Lion Rock', and Pidurangala with stunning views",
    "Explore the ancient city of Polonnaruwa, a UNESCO World Heritage site with well-preserved ruins",
    "Visit the Temple of the Tooth in Kandy, a sacred Buddhist site, and stroll around Kandy Lake",
  ],
  stops: [
    {
      name: "Negombo",
      lat: 7.20478,
      lon: 79.85113,
      day: 1,
      category: "city",
      region: "Western",
      duration: "overnight",
      isBase: true,
      note:
        "Arrive here from the airport. Low-key beach town - good for a first night. You can explore the lagoon, local markets or prior to arrival, book a driver to pick you up and head straight to Dambulla if you want to skip Negombo.",
    },
    {
      name: "Dambulla Cave Temple",
      image: "/img/stops/dambulla.avif",
      lat: 7.85489,
      lon: 80.65059,
      day: 2,
      category: "religious",
      region: "North Central",
      duration: "half-day",
      note:
        "Visit in the morning on the way north. Cave shrines with many Buddha statues. Remove shoes and cover shoulders. You will have to walk up a bit to reach the top.",
    },
    {
      name: "Sigiriya",
      lat: 7.94850,
      lon: 80.75951,
      day: [2, 3],
      category: "landmark",
      region: "North Central",
      duration: "2+ nights",
      isBase: true,
      note:
        "Base here for two nights. The rock fortress is the centerpiece, pidurangala rock is also nearby and worth a visit.",
    },
    {
      name: "Sigiriya Rock Fortress",
      image: "/img/stops/sigiriya.avif",
      lat: 7.95687,
      lon: 80.75991,
      day: 3,
      category: "landmark",
      region: "North Central",
      duration: "half-day",
      note:
        "Go early morning to avoid crowds & heat, make sure to check the weather. Stunning views from the top. You have to climb a lot of stairs and not recommended for people with mobility issues/fear of heights. Be cautious of wasps and obey all safety signs.",
    },
    {
      name: "Pidurangala Rock",
      image: "/img/stops/pidurangala.avif",
      lat: 7.96621,
      lon: 80.76170,
      day: 3,
      category: "viewpoint",
      region: "North Central",
      duration: "1-2 hours",
      note:
        "Do this in the late afternoon for the best view of Sigiriya. Easier climb than Sigiriya, fraction of the cost. You can see the rock fortress from above and it's a great spot for sunset photos.",
    },
    {
      name: "Polonnaruwa Ancient City",
      image: "/img/stops/polonnaruwa.avif",
      lat: 7.95169,
      lon: 81.00467,
      day: 4,
      category: "landmark",
      region: "North Central",
      duration: "full-day",
      note:
        "The ruins are spread out over several locations. The Gal Vihara rock sculptures, the Royal Palace, and the Vatadage are the highlights. You can rent a bicycle at the entrance and spend the day exploring at your own pace.",
    },
    {
      name: "Kandy",
      lat: 7.29172,
      lon: 80.64089,
      day: [4, 5],
      category: "city",
      region: "Central",
      duration: "overnight",
      isBase: true,
      note:
        "Drive up into the hills. Cooler, greener, slower pace. Base here for the night and visit the Temple of the Tooth the next day. If you have time, take a stroll around Kandy Lake or visit the local market.",
    },
    {
      name: "Temple of the Tooth",
      image: "/img/stops/temple-of-tooth.avif",
      lat: 7.29360,
      lon: 80.64132,
      day: 5,
      category: "religious",
      region: "Central",
      duration: "1-2 hours",
      note:
        "Aim for a puja ceremony 'Thevava' (5:30am, 9:30am, or 6:30pm) when the inner shrine opens, may get crowded though. Dress modestly, sarongs/lungis available at the entrance. Check out the museum too if you're interested in the history.",
    },
    {
      name: "Colombo",
      lat: 6.93348,
      lon: 79.85004,
      day: 5,
      category: "city",
      region: "Western",
      duration: "half-day",
      isBase: true,
      note: "Return to Colombo in the afternoon. 3-4 hours by train from Kandy: one of the best scenic rail journeys on the island.",
    },
  ],
};

export default plan;
