/**
 * Calculates the time elapsed since the given date and returns a human-readable string.
 * @param date - The date to calculate the time elapsed from.
 * @returns UI string with 'x unit(s) ago' format
 */
export function timeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const units: { name: string; seconds: number }[] = [
    { name: "year", seconds: 31536000 },
    { name: "month", seconds: 2592000 },
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  for (const unit of units) {
    if (diffInSeconds >= unit.seconds) {
      const value = Math.floor(diffInSeconds / unit.seconds);
      return `${value} ${unit.name}${value === 1 ? "" : "s"} ago`;
    }
  }

  return "just now";
}
