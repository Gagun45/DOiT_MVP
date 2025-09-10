import { useSelector } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import CommentDialog from "./CommentDialog";
import "@testing-library/jest-dom";
import type { CommentInterface } from "@/utils/types";

jest.mock("react-redux", () => ({ useSelector: jest.fn() }));

describe("comments dialog", () => {
  const mockedUseSelector = useSelector as jest.MockedFunction<
    typeof useSelector
  >;
  test("button must be NOT rendered if no comments", () => {
    mockedUseSelector.mockReturnValue([]);
    const { queryByTestId } = render(<CommentDialog />);
    expect(queryByTestId("comment-button")).toBeNull();
  });
  test("button is being renred and opens dialog when clicked", () => {
    const testComments: CommentInterface[] = [
      {
        body: "body",
        email: "qwe@qwe",
        id: 2,
        name: "Test blaa",
        postId: 3,
      },
      {
        body: "body",
        email: "qwe@qwe",
        id: 23,
        name: "Test comment",
        postId: 3,
      },
    ];
    mockedUseSelector.mockReturnValue(testComments);
    render(<CommentDialog />);
    const button = screen.getByTestId("comment-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("2");

    fireEvent.click(button);
    expect(screen.getByTestId("comment-dialog")).toBeInTheDocument();
    expect(screen.getByText("Test comment")).toBeInTheDocument();
  });
});
