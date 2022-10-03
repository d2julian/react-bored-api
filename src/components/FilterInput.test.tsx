import { render, screen } from "@testing-library/react";
import FilterInput from "./FilterInput";
describe("FilterInput component", () => {
  test("render Filter", () => {
    const setFilter = jest.fn();
    const refetch = jest.fn();
    render(<FilterInput setFilter={setFilter} refetchData={refetch} />);
    const listTitle = screen.getByPlaceholderText(/Filter by Activity or Type/i);
    expect(listTitle).toBeInTheDocument();
  });
});
