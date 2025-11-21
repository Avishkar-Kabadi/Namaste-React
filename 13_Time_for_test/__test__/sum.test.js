/** @jest-environment jsdom */
import '@testing-library/jest-dom';

import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
// test("Sum function should calculate the sum of two number", () => {
//     expect(sum(2, 3)).toBe(5);
//     expect(sum(-1, 1)).toBe(0);
//     expect(sum(0, 0)).toBe(0);
//     expect(sum("hello"," World")).toBe("hello World");
// })


import Sum from "../src/components/Sum";


test("Should change the state of button onclick Login/Logout", async () => {

    render(<Sum />);

    const loginButton = await screen.findByRole("button", { name: /login/i });

    fireEvent.click(loginButton);

    const logoutButton = await screen.findByRole("button", { name: /logout/i });

    expect(logoutButton).toBeInTheDocument();
});
