
import React from "react";
import { calculateFlavanoidsStatistics, calculateGammaStatistics } from "../utils/statsUtils";
import "./StatisticsTable.css";

const StatisticsTable: React.FC = () => {
  // Require the data from data,json file
  const data = require("../data.json");

  const flavanoidsStatistics = calculateFlavanoidsStatistics(data);
  const gammaStatistics = calculateGammaStatistics(data);

  const measures = Object.keys(flavanoidsStatistics);

  return (
    <>
      <h2>Flavanoids Statistics</h2>
      <table className="statistics-table">
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(flavanoidsStatistics).map((measure) => (
              <th key={measure}>{measure}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {measures.map((measure) => (
            <tr key={measure}>
              <td>{measure}</td>
              {Object.entries(flavanoidsStatistics[measure]).map(([cls, value]) => (
                <td key={cls}>{value.toFixed(3)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Gamma Statistics</h2>
      <table className="statistics-table">
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(gammaStatistics).map((measure) => (
              <th key={measure}>{measure}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {measures.map((measure) => (
            <tr key={measure}>
              <td>{measure}</td>
              {Object.entries(gammaStatistics[measure]).map(([cls, value]) => (
                <td key={cls}>{value.toFixed(3)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StatisticsTable;
