import  { render , screen } from "@testing-library/react";
import Contact from  "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
    render(<Contact/>);
    
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("should load button inside contact us component", () => {
    render(<Contact/>);
    
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});

test("should load input name inside contact us component", () => {
    render(<Contact/>);
    
    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
});