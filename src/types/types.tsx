export type ActivityType = {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
};

export interface ActivityTypeProps {
  data: ActivityType;
}
export type ActivityListType = ActivityType[];

export interface ActivityListProps {
  data: ActivityListType;
}
