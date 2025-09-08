import React from 'react';

interface StopConditionDropdownProps {
    onChange: (value: string) => void;
}

const StopConditionDropdown: React.FC<StopConditionDropdownProps> = ({ onChange }) => {
    const stopConditions = [
        { value: 'time', label: '時間' },
        { value: 'count', label: '回数' },
        { value: 'key', label: '特定のキー' },
    ];

    return (
        <select onChange={(e) => onChange(e.target.value)}>
            {stopConditions.map(condition => (
                <option key={condition.value} value={condition.value}>
                    {condition.label}
                </option>
            ))}
        </select>
    );
};

export default StopConditionDropdown;