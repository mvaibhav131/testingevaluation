


import { render,screen,} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Input } from "../Components/Input";



describe("should have Input box", () => {
 
    test('should render input', () => {
      render(<Input />);
   
      const inputEl = screen.getByTestId("text-input");
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "text");
    });
   
    test('pass valid email to test input field', () => {
      render(<Input />);
   
      const inputEl = screen.getByTestId("text-input");
      userEvent.type(inputEl, "test@mail.com");
   
      expect(screen.getByTestId("text-input")).toHaveValue("test@mail.com");
      expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
   
    test('pass invalid email to test input value', () => {
      render(<Input />);
   
      const inputEl = screen.getByTestId("text-input");
      userEvent.type(inputEl, "test");
   
      expect(screen.getByTestId("text-input")).toHaveValue("test");
      expect(screen.getByTestId("error-msg")).toBeInTheDocument();
      expect(screen.getByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
    });
   
  });