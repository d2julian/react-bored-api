import classes from "./ActivityList.module.css";
import { ActivityListProps, ActivityType } from "../types/types";
import Activity from "./Activity";

function ActivityList({ data }: ActivityListProps) {
  return (
    <div className={classes.container}>
      <h1>List of Activities</h1>
      <div className={classes.wrapper}>
        {data?.map((data: ActivityType) => (
          <Activity key={data.key} data={data} />
        ))}
      </div>
    </div>
  );
}

export default ActivityList;
