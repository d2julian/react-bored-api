import { render, screen } from "@testing-library/react";
import ActivityList from "./ActivityList";
import { ActivityListType } from "../types/types";
import { dataActivities } from "../mocks/data";

describe("ActivityList component", () => {
  test("renders posts", () => {
    const data: ActivityListType = dataActivities;
    render(<ActivityList data={data} />);
    const listTitle = screen.getByText(/List of Activities/i);
    expect(listTitle).toBeInTheDocument();
  });
});
