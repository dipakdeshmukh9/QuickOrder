import { fireEvent, render , screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("should load Header Component with a login button", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
     <Header/>
     </Provider>
     </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name:"Login"});

    expect(loginButton).toBeInTheDocument();

});
it("should load Header Component with cart item 0", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
     <Header/>
     </Provider>
     </BrowserRouter>
    );

    const cartItem = screen.getByText("Cart - (0 items)");

    expect(cartItem).toBeInTheDocument();

});
it("should load Header Component with a cart item", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
     <Header/>
     </Provider>
     </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();

});
it("should load change Login button to Logout on click ", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
     <Header/>
     </Provider>
     </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login" });

  fireEvent.click(loginButton);

const logoutButton = screen.getByRole("button", {name: "Logout"});
    
    expect(logoutButton).toBeInTheDocument();

});