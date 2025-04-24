import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { TodoItem } from "./TodoItem";

describe("TodoItem", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render a H3 element with expected text", () => {
    //Arrange
    const mockTodo = {
      id: 1742235298723,
      title: "Todo title",
      description: "Todo description",
      status: "pending",
    };

    // Act
    const { getByText } = render(<TodoItem item={mockTodo} />);

    const title = getByText("Todo title");

    // Assert
    expect(title.tagName).toBe("H3");
    expect(title.textContent).toBe(mockTodo.title);
  });

  test("should render a P element with expected text", () => {
    //Arrange
    const mockTodo = {
      id: 1742235298723,
      title: "Todo title",
      description: "Todo description",
      status: "pending",
    };

    // Act
    const { getByText } = render(<TodoItem item={mockTodo} />);

    const paragraph = getByText("Todo description");

    // Assert
    expect(paragraph.textContent).toBe(mockTodo.description);
    expect(paragraph.tagName).toBe("P");
  });
});
