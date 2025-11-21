/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactUs from '../src/components/ContactUs';

describe("ContactUs Component Tests", () => {

    beforeAll(() => {
        console.log("Before All");

    })

    beforeEach(() => {
        console.log("Before Each");

    })

    afterAll(() => {
        console.log("After All");

    })

    afterEach(() => {
        console.log("After Each");

    })


    test('Should renders Contact us component correctly', () => {
        render(<ContactUs />);

        const heading = screen.getByRole("heading");
        // assertion
        expect(heading).toBeInTheDocument();



        screen.getByText('Contact Us');
        screen.getByPlaceholderText('Name');
        screen.getByPlaceholderText('Message');
        screen.getByText('Submit');
    });


    test("Should load button inside contact us component", () => {
        render(<ContactUs />);
        const buttonElement = screen.getByRole("button");

        expect(buttonElement).toBeInTheDocument();
    });



});



// You can wite test/it for same purpose



describe("Contact Us Part 2", () => {
    it("Should load 2 input fields inside contact us component", () => {
        render(<ContactUs />);

        //Querying all input elements
        const inputElements = screen.getAllByRole("textbox");

        //Assertion
        expect(inputElements.length).not.toBe(3);
        expect(inputElements.length).toBe(2);
    });
});

