import React, { useState } from 'react';
import './Popup.css';
import MacroKeyDropdown from '../components/MacroKeyDropdown';
import IntervalInput from '../components/IntervalInput';
import StopConditionDropdown from '../components/StopConditionDropdown';
import StartButton from '../components/StartButton';

const Popup = () => {
    const [macroKey, setMacroKey] = useState('');
    const [macroInterval, setMacroInterval] = useState(1000); // default to 1000 ms
    const [stopCondition, setStopCondition] = useState('');

    const handleMacroKeyChange = (key) => {
        setMacroKey(key);
    };

    const handleIntervalChange = (interval) => {
        setMacroInterval(interval);
    };

    const handleStopConditionChange = (condition) => {
        setStopCondition(condition);
    };

    const handleStartMacro = () => {
        // Logic to start the macro with the selected settings
        console.log(`Starting macro with key: ${macroKey}, interval: ${macroInterval}, stop condition: ${stopCondition}`);
    };

    return (
        <div className="popup">
            <h1>Macro Settings</h1>
            <div className="form-group">
                <label>Macro Key:</label>
                <MacroKeyDropdown onChange={handleMacroKeyChange} />
            </div>
            <div className="form-group">
                <label>Macro Interval (ms):</label>
                <IntervalInput value={macroInterval} onChange={handleIntervalChange} />
            </div>
            <div className="form-group">
                <label>Stop Condition:</label>
                <StopConditionDropdown onChange={handleStopConditionChange} />
            </div>
            <StartButton onClick={handleStartMacro} />
        </div>
    );
};

export default Popup;