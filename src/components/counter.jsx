import React, { useState } from "react";

const Counter = () => {
    const [count, changeCount] = useState(0);
    const add = (value) => changeCount(count + value);
    return (
        <div>
            <span
                data-testid="display_count"
            >
                {`點了${count}下`}
            </span>
            <br />
            <button
                className="add_button"
                data-testid="add_button_plus_1"
                type="button"
                onClick={() => add(1)}
            >
                點我加 1
          </button>
            <button
                className="add_button"
                data-testid="add_button_plus_2"
                type="button"
                onClick={() => add(2)}
            >
                點我加 2
          </button>
        </div>
    );
}
export default Counter