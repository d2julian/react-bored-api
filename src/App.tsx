import "./App.css";
import ActivityList from "./components/ActivityList";
import { useState } from "react";
import useActivities from "./hooks/useActivities";
import FilterInput from "./components/FilterInput";
import { ActivityListType } from "./types/types";
import { UseQueryResult } from "react-query";

function App() {
  const [numberOfActivities, setNumberOfActivities] = useState(10);
  const { data, error, isFetching, refetch }: UseQueryResult<ActivityListType, Error> = useActivities(numberOfActivities);
  const [filter, setFilter] = useState("");
  console.log(data);
  const refetchHandler = () => {
    localStorage.setItem("Activities", JSON.stringify(null));
    refetch();
    setFilter("");
  };

  const filteredData = data
    ? data?.filter((a) => a.activity.toLowerCase().includes(filter.toLowerCase()) || a.type.toLowerCase().includes(filter.toLowerCase()))
    : [];

  if (isFetching)
    return (
      <div className="container">
        <div className="spinner"></div>
      </div>
    );
  if (error)
    return (
      <div className="container">
        <div className="error">Error has occurred</div>
      </div>
    );
  return (
    <div>
      <FilterInput setFilter={setFilter} refetchData={refetchHandler} />
      <ActivityList data={filteredData} />
    </div>
  );
}

export default App;
