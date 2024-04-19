# Alcohol Data Statistics

This code is a React and TypeScript application that calculates statistics for different properties of alcohol data and displays them in a table format. The sample data used in this code.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run this application, follow these steps:

    Make sure you have Node.js installed on your system.

    Clone this repository or copy the code into a new React project.

    Open a terminal and navigate to the project directory.

    Install the required dependencies by running:

npm install

Start the development server:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How It Works

The code contains the following components:

1. statsUtils file

This function takes an array of alcohol data objects and a property name as input. It calculates the mean, median, and mode for each class of alcohol based on the provided property. The results are returned as an array of objects, where each object represents statistics for a specific class of alcohol. 

2. StatTable Component
This component receives data (array of alcohol data) and property (the property name for which statistics are calculated) as props. It utilizes the calculateStatistics function to calculate statistics whenever the data or property prop changes.

The StatTable component renders a table displaying the mean, median, and mode values for each class of alcohol. 

3. App Component
The main component of the application is the App component. It imports and uses the StatTable component twice to display statistics for different properties:

a. Flavanoids Statistics
It displays statistics for the "Flavanoids" property of the alcohol data.

b. Gamma Statistics
It calculates a new property called "Gamma" based on the formula (Ash \* Hue) / Magnesium, and then displays statistics for this new property.

## Customization

To use this code with your own data and properties, follow these steps:

    Replace the data.json with your actual data. Each object in the array should represent an instance of alcohol data, and the properties of the object should match your dataset.

    Modify the App component to display statistics for the properties you are interested in. You can add more instances of the StatTable component with different property props to display statistics for multiple properties.

    If you need to perform additional data processing or transformations, you can modify the calculateStatistics function or create new functions to suit your specific needs.

## Important Notes

    Ensure that your data is in the correct format and the property names match the data you are providing to the StatTable component.

    The code assumes that the data prop passed to the StatTable component is an array of objects, each containing the Alcohol property to distinguish different classes of alcohol.

    The code uses React hooks (useState and useEffect) to manage the state and recompute statistics when the data or property props change.

## Display of the Outputis as below :

![Wine-data](https://github.com/brahmanand09/Mean-Median-Mode-Wine-Data-Set/assets/123508275/e42d66ac-7802-475c-968f-6dd380951454)


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
