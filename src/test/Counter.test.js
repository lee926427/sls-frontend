import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Counter from "../components/counter";

describe("test <Counter/>",() => {
    afterEach(cleanup);
    test("測試是否正常 render", () => {
        const {getByTestId, getByText, container,} = render(<Counter/>);
        expect(getByTestId('display_count').textContent).toBe('點了0下');
        expect(getByText('點了0下').textContent).toBe('點了0下');
        expect(container.querySelector('span').innerHTML).toBe('點了0下');
    });
    test("加1按鍵是否正常", () => {
        const {getByTestId, getByText, container,} = render(<Counter/>);
        fireEvent.click(getByTestId('add_button_plus_1'));
        expect(getByTestId('add_button_plus_1').textContent).toBe('點我加 1');
    });
    test("加2按鍵是否正常", () => {
        const {getByTestId, getByText, container,} = render(<Counter/>);
        expect(getByTestId('add_button_plus_2').textContent).toBe('點我加 2');
    });
});
