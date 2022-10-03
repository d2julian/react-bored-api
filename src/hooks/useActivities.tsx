import { useQuery } from "react-query";
import { ActivityListType } from "../types/types";

const url = "http://www.boredapi.com/api/activity/";

const getActivities = async (numberOfActivities: number) => {
  const activities: ActivityListType = [];
  let response;
  let data: any;
  const saveActivities: ActivityListType = JSON.parse(localStorage.getItem("Activities") as string);
  if (!saveActivities) {
    while (activities.length < numberOfActivities) {
      response = await fetch(url);
      data = await response.json();
      // Evitar añadir actividades duplicadas
      if (!activities.some(({ key }) => key === data.key)) {
        activities.push(data);
      }
    }
    localStorage.setItem("Activities", JSON.stringify(activities));
    return activities;
  } else {
    return saveActivities;
  }
};

export default function useActivities(numberOfActivities: number) {
  return useQuery<ActivityListType, Error>(["activities", numberOfActivities], () => getActivities(numberOfActivities));
}
