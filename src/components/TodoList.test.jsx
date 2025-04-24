import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { TodoList } from "./TodoList";

describe("Given TodoList", () => {
  afterEach(() => {
    cleanup();
  });

  test("When todos list is empty Then it should render expected message", () => {
    const mockWEmptyTodosList = [];

    const { getByText } = render(<TodoList todosList={mockWEmptyTodosList} />);
    const headingElement = getByText(/empty/i);

    expect(headingElement.tagName).toBe("H3");
    expect(headingElement.textContent).toBe("Empty list");
  });

  test("When todos list has elements Then it should render a <ul> element", () => {
    const mockTodo = {
      id: 1,
      title: "Todo title",
      description: "Todo description",
      status: "Todo status",
    };

    const mockTodosList = [mockTodo];

    const { getByText } = render(<TodoList todosList={mockTodosList} />);

    const element = getByText("Todo title");

    expect(element.parentElement.parentElement.tagName).toBe("UL");
  });

  test.todo(
    "When todos list has elements Then it should render a <li> element with expected tags and texts"
  );
});
