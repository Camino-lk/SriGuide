// ── Trip Plans — Index & Recommender Scoring

import type { TripPlan, GroupType, Pace, Theme } from "./types";
import culturalTriangle from "./cultural-triangle-5d";
import southAndHills from "./south-and-hills-8d";
// import longWeekend from "./long-weekend-3d";
// import fullIsland from "./full-island-14d";

// ── Master list ───────────────────────────────────────────────────────────────
export const ALL_PLANS: TripPlan[] = [
  culturalTriangle,
  southAndHills,
  // longWeekend,
  // fullIsland,
  // TODO: add more plans
];

// ── Recommender ───────────────────────────────────────────────────────────────

export interface RecommenderInput {
  days: number;          // exact or max days available
  groupType: GroupType;
  pace: Pace;
  themes: Theme[];       // user's top interests (1-3)
}

/**
 * Score a single plan against user preferences.
 * Returns int 0-100. Higher = better match.
 */
export function scorePlan(plan: TripPlan, input: RecommenderInput): number {
  let score = 0;

  // ── Days proximity (40 pts) ────────────────────────────────────────────────
  // Exact match = full points. Tapers off as difference grows.
  // Never recommend a plan longer than the user has available.
  if (plan.days > input.days) return 0; // hard exclude
  const dayDiff = input.days - plan.days;
  if (dayDiff === 0)      score += 40;
  else if (dayDiff <= 1)  score += 32;
  else if (dayDiff <= 2)  score += 24;
  else if (dayDiff <= 4)  score += 14;
  else                    score += 6;

  // ── Group type (20 pts) ───────────────────────────────────────────────────
  if (plan.groupTypes.includes(input.groupType)) score += 20;

  // ── Pace (20 pts) ─────────────────────────────────────────────────────────
  if (plan.pace === input.pace) score += 20;
  else if (Math.abs(paceIndex(plan.pace) - paceIndex(input.pace)) === 1) score += 10; // adjacent pace

  // ── Theme overlap (20 pts) ────────────────────────────────────────────────
  const overlap = input.themes.filter((t) => plan.themes.includes(t)).length;
  score += Math.min(20, overlap * 8);

  return score;
}

/** Returns top N plans sorted by score, excluding zero-score plans */
export function recommendPlans(
  input: RecommenderInput,
  count = 3
): Array<{ plan: TripPlan; score: number }> {
  return ALL_PLANS.map((plan) => ({ plan, score: scorePlan(plan, input) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function paceIndex(pace: Pace): number {
  return { relaxed: 0, moderate: 1, packed: 2 }[pace];
}

export type { TripPlan, GroupType, Pace, Theme };
export type { PlanStop, Region, StopCategory } from "./types";
