// ── Trip Plans — Type Definitions ─────────────────────────────────

export type GroupType = "solo" | "couple" | "family" | "group";
export type Pace = "relaxed" | "moderate" | "packed";
export type Theme =
  | "history"
  | "culture"
  | "nature"
  | "wildlife"
  | "beach"
  | "religious"
  | "photography"
  | "surfing"       // reserved, not implemented
  | "hiking"        // reserved, not implemented
  | "food";         // reserved, not implemented

export type StopCategory =
  | "landmark"      // forts, ruins, UNESCO sites
  | "religious"     // temples, stupas, mosques, churches
  | "nature"        // national parks, forests, waterfalls
  | "wildlife"      // safari, turtle watching, whale watching
  | "beach"         // beaches, lagoons, coastal spots
  | "viewpoint"     // hills, scenic overlooks
  | "city"          // city/town base, transit hub
  | "market"        // local markets, food streets
  | "activity";     // surfing, diving, white water rafting etc.

export type Region =
  | "Western"
  | "Southern"
  | "Central"
  | "North Central"
  | "Northern"
  | "Eastern"
  | "North Western"
  | "Uva"
  | "Sabaragamuwa";

// ── Stop ──────────────────────────────────────────────────────────

export interface PlanStop {
  /** Display name of the location */
  name: string;
  /** Optional image for the stop */
  image?: string;
  /** Latitude (WGS84) */
  lat: number;
  /** Longitude (WGS84) */
  lon: number;
  /** Which day(s) this stop is visited. Array for multi-day stays. */
  day: number | [number, number];
  /** Primary category for map marker styling */
  category: StopCategory;
  /** Province/region - for filtering */
  region: Region;
  /** Optional short tip shown in map popup and plan detail */
  note?: string;
  /** Rough time needed - for reader orientation */
  duration?: "1-2 hours" | "half-day" | "full-day" | "overnight" | "2+ nights";
  /** Whether this is a base/sleep location rather than a day-visit */
  isBase?: boolean;
}

// ── Plan ──────────────────────────────────────────────────────────

export interface TripPlan {
  /** Unique slug — used as URL: /trip-plans/[id] */
  id: string;
  /** Human-readable title */
  title: string;
  /** One-sentence description for cards and meta tags */
  description: string;
  /** Total trip duration in days */
  days: number;
  /** Who this plan suits best */
  groupTypes: GroupType[];
  /** Overall travel intensity */
  pace: Pace;
  /** Main themes - used for recommender scoring */
  themes: Theme[];
  /** Sri Lanka provinces covered */
  regions: Region[];
  /** Where the trip starts (almost always Colombo or Negombo) */
  startCity: string;
  /** Where the trip ends */
  endCity: string;
  /** Ordered list of stops */
  stops: PlanStop[];
  /** Year the itinerary was designed | last verified. */
  year: number;
  /** Optional highlight bullet points shown on the plan card. */
  highlights?: string[];
  /** If plan was inspired by or adapted from a public source */
  credit?: { name: string; url: string };
}
