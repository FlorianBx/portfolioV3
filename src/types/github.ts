export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}
export type ContributionWeek = ContributionDay[];
export interface ContributionsApiResponse {
  contributions: ContributionWeek[];
}
