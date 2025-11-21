/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "../src/components/Cart";
import Header from "../src/components/Header";
import RestaurantMenuPage from "../src/components/RestaurantMenuPage";
import appStore from "../utils/appStore";


it("should render Restaurant Menu Component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenuPage />
                </Provider>
            </BrowserRouter>
        );
    });

    // WAIT for Recommended(5)
    const accordionText = await screen.findByText("Recommended(5)");
    expect(accordionText).toBeInTheDocument();
    fireEvent.click(accordionText);

    // 

});



it("should render items by clicking accordion", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenuPage />
                </Provider>
            </BrowserRouter>
        );
    });

    const accordionText = await screen.findByText("Recommended(5)");
    expect(accordionText).toBeInTheDocument();
    fireEvent.click(accordionText);


})



it("should render 5 add button and click on first add button", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenuPage />
                </Provider>
            </BrowserRouter>
        );
    });

    const accordionText = await screen.findByText("Recommended(5)");
    expect(accordionText).toBeInTheDocument();
    fireEvent.click(accordionText);


    const addToCartBtn = await screen.findAllByTestId("food-items");
    expect(addToCartBtn.length).toBe(5);

    // Click first Add button
    fireEvent.click(addToCartBtn[0]);

});



it("should render updated cart items", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
    });

    waitFor(() => {
        const cartLink = screen.findByRole("link", { name: /cart/i });
        expect(cartLink).toHaveTextContent("1");
    })
});


it("should have 1 cart item", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    });

    waitFor(() => {
        const cartItems = screen.getAllByTestId("food-items");

        expect(cartItems.length).toBe(1)
    })
});