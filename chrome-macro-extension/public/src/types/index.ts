export type MacroKey = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'Enter' | 'Escape' | 'Space' | 'Tab' | 'Shift' | 'Control' | 'Alt' | 'Meta' | 'CustomKey';

export interface MacroSettings {
    key: MacroKey;
    interval: number; // in milliseconds
    stopCondition: StopCondition;
}

export type StopCondition = 'time' | 'count' | 'specificKey';

export interface MacroState {
    isActive: boolean;
    settings: MacroSettings;
}