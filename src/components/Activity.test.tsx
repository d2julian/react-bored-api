import { render, screen } from "@testing-library/react";
import Activity from "./Activity";
describe("Activity component", () => {
  test("renders one", () => {
    const data = {
      activity: "Go to a music festival with some friends",
      type: "social",
      participants: 4,
      price: 0.4,
      link: "",
      key: "6482790",
      accessibility: 0.2,
    };
    render(<Activity data={data} />);
    const activityLabel = screen.getByText(/Activity:/i);
    expect(activityLabel).toBeInTheDocument();
  });
});
