/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../src/components/Body";
import MOCK_DATA from "./mocks/mockResListData.json";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);


it("Should render body component and change items matching search filter", async () => {

    await act(async () => await render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    // Initial Cards without filters
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);


    // Search bar
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
    fireEvent.change(searchBar, { target: { value: "cake" } });
    const resCards = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(2);

    // Reset button
    const resetBtn = screen.getByRole("button", { name: "Reset 🔄" });
    fireEvent.click(resetBtn);
    const cardsReset = screen.getAllByTestId("resCard");
    expect(cardsReset.length).toBe(20);


});



it("Should render Top and Low Rated Restaurants based on filter", async () => {

    await act(async () => await render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    // Initial Cards without filters
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);


    //Top Rated
    const topRatedBtn = screen.getByRole("button", { name: "Top Rated ⭐" });
    fireEvent.click(topRatedBtn);
    const topRatedCards = screen.getAllByTestId("resCard");
    expect(topRatedCards.length).toBe(8);

    // Low rated
    const lowRatedBtn = screen.getByRole("button", { name: "Low Rated ⚠️" });
    fireEvent.click(lowRatedBtn);
    const lowRatedCards = screen.getAllByTestId("resCard");
    expect(lowRatedCards.length).toBe(11);


    // Reset button
    const resetBtn = screen.getByRole("button", { name: "Reset 🔄" });
    fireEvent.click(resetBtn);
    const cardsReset = screen.getAllByTestId("resCard");
    expect(cardsReset.length).toBe(20);
})