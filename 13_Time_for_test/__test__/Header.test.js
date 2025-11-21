/** @jest-environment jsdom */
import '@testing-library/jest-dom';


Object.defineProperty(window, 'localStorage', {
    value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
    },
    writable: true,
});

import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from "../src/components/Header";
import AppStore from '../utils/appStore';

it("Should render header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // Querying button element
    const buttons = screen.getByRole("button", { name: "Logout" });

    // assertion
    screen.getByText('Logout');
    expect(buttons).toBeInTheDocument();
    expect(buttons).toHaveTextContent("Logout");
});


it("Should render header component with online status", () => {
    render(
        <BrowserRouter>

            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    // Querying online status element
    const onlineStatus = screen.getByText(/Online Status:/i);
    // assertion
    expect(onlineStatus).toBeInTheDocument();
    expect(onlineStatus).toHaveTextContent("Online Status:");
}
);


it("Should render header component with cart items count ", () => {
    render(
        <BrowserRouter>

            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    // Querying cart items element
    const cartItems = screen.getByText(/Cart 🛒 :/i);


    // assertion
    expect(cartItems).toBeInTheDocument();
    expect(cartItems).toHaveTextContent(/Cart 🛒 :/i);
}
);