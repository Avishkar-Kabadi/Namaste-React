/** @jest-environment jsdom */


import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import RestaurantCard from "../src/components/RestaurantCard"
import { withPromotedLabel } from "../src/components/RestaurantCard"
import resCardMock from "./mocks/resCardMock.json"


it("It should render RestaurantCard component with data", () => {

    render(
        <BrowserRouter>
            <RestaurantCard info={resCardMock} />
        </BrowserRouter>
    )

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument;


})


it("Should render RestaurantCard component with Veg Label", () => {

    const PromotedCard = withPromotedLabel(RestaurantCard);
    render(
        <BrowserRouter>
            <PromotedCard info={resCardMock} />
        </BrowserRouter>)

    const promoted = screen.getByText("Pure Veg");

    expect(promoted).toBeInTheDocument;
})  