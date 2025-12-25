export type AvailabilityStatus = "available" | "full";

export interface StatusContent {
  status: AvailabilityStatus;
  weekLabel: string;
  projectsDelivered: number;
}

export const statusContent: StatusContent = {
  status: "available",
  weekLabel: "Next week",
  projectsDelivered: 12,
};
