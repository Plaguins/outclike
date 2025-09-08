import React from 'react';

const macroKeys = [
    { value: 'Enter', label: 'Enter' },
    { value: 'Space', label: 'Space' },
    { value: 'ArrowUp', label: 'Up Arrow' },
    { value: 'ArrowDown', label: 'Down Arrow' },
    { value: 'ArrowLeft', label: 'Left Arrow' },
    { value: 'ArrowRight', label: 'Right Arrow' },
    { value: 'Escape', label: 'Escape' },
    { value: 'Control', label: 'Control' },
    { value: 'Shift', label: 'Shift' },
    { value: 'Alt', label: 'Alt' },
    { value: 'Tab', label: 'Tab' },
    { value: 'Backspace', label: 'Backspace' },
    // Add more keys as needed
];

const MacroKeyDropdown = ({ selectedKey, onKeyChange }) => {
    return (
        <select value={selectedKey} onChange={(e) => onKeyChange(e.target.value)}>
            {macroKeys.map((key) => (
                <option key={key.value} value={key.value}>
                    {key.label}
                </option>
            ))}
        </select>
    );
};

export default MacroKeyDropdown;