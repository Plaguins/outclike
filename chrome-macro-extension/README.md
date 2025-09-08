# Chrome Macro Extension

This project is a Chrome extension that allows users to create and manage macros for automating tasks in the browser. The extension provides a user-friendly interface for setting up macros, including selecting keys, defining intervals, and specifying stop conditions.

## Features

- **Macro Key Selection**: Choose from a variety of keys, including special keys, to trigger macros.
- **Macro Interval**: Set the interval for macro execution in milliseconds.
- **Stop Conditions**: Define how the macro should stop, whether by time, count, or a specific key press.
- **User Interface**: A clean and intuitive popup UI for managing macro settings.

## Project Structure

```
chrome-macro-extension
├── src
│   ├── background.ts        # Background script for managing extension functionality
│   ├── content.ts          # Content script for interacting with web pages
│   ├── popup
│   │   ├── Popup.tsx       # Main component for the popup UI
│   │   └── Popup.css       # Styles for the popup UI
│   ├── components
│   │   ├── MacroKeyDropdown.tsx  # Dropdown for selecting macro keys
│   │   ├── IntervalInput.tsx      # Input for macro interval
│   │   ├── StopConditionDropdown.tsx # Dropdown for stop conditions
│   │   └── StartButton.tsx        # Button to start the macro
│   └── types
│       └── index.ts          # TypeScript types and interfaces
├── public
│   ├── manifest.json         # Configuration file for the Chrome extension
│   └── popup.html            # HTML template for the popup UI
├── package.json               # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd chrome-macro-extension
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `public` directory of the project.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Select the desired macro key from the dropdown.
3. Enter the macro interval in milliseconds.
4. Choose a stop condition for the macro.
5. Click the "Start" button to begin the macro.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.