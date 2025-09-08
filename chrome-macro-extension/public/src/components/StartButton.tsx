import React from 'react';

const StartButton: React.FC<{ onStart: () => void }> = ({ onStart }) => {
    return (
        <button onClick={onStart} className="start-button">
            Start Macro
        </button>
    );
};

export default StartButton;