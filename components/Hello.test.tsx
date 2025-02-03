import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("Hello 컴포넌트가 올바르게 렌더링되는지 확인", () => {
  render(<Hello name="Next.js" />);
  const heading = screen.getByText("Hello, Next.js!");
  expect(heading).toBeInTheDocument();
});
