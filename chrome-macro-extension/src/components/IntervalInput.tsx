import React, { useState } from 'react';

const IntervalInput = () => {
    const [interval, setInterval] = useState(1000); // Default interval in milliseconds

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!isNaN(value) && value >= 0) {
            setInterval(value);
        }
    };

    return (
        <div className="interval-input">
            <label htmlFor="interval">マクロ間隔 (ミリ秒): </label>
            <input
                type="number"
                id="interval"
                value={interval}
                onChange={handleChange}
                min="0"
            />
        </div>
    );
};

export default IntervalInput;