
export interface WineData {
    Alcohol: number;
    Flavanoids: number;
    Ash: number;
    Hue: number;
    Magnesium: number;
  }

  // Calculate Flavanoids Statistics
  export function calculateFlavanoidsStatistics(data: WineData[]) {
    const classWiseFlavanoids: Record<number, number[]> = {};
  
    data.forEach((point) => {
      const { Alcohol, Flavanoids, Ash, Hue, Magnesium } = point;
      const gamma = (Ash * Hue) / Magnesium;
      const wineClass = Math.floor(Alcohol); // Assuming Alcohol represents the class
  
      if (!classWiseFlavanoids[wineClass]) {
        classWiseFlavanoids[wineClass] = [];
      }
  
      classWiseFlavanoids[wineClass].push(Flavanoids);
    });
  
    const statistics: Record<string, number[]> = {};
  
    for (const wineClass in classWiseFlavanoids) {
      const flavanoids = classWiseFlavanoids[wineClass];
      statistics[`Class ${wineClass}`] = [
        calculateMean(flavanoids),
        calculateMedian(flavanoids),
        calculateMode(flavanoids),
      ];
    }
  
    return statistics;
  }
  
  // Calculate Gamma Statistics
  export function calculateGammaStatistics(data: WineData[]) {
    const classWiseGamma: Record<number, number[]> = {};
  
    data.forEach((point) => {
      const { Alcohol, Flavanoids, Ash, Hue, Magnesium } = point;
      const gamma = (Ash * Hue) / Magnesium;
      const wineClass = Math.floor(Alcohol); // Assuming Alcohol represents the class
  
      if (!classWiseGamma[wineClass]) {
        classWiseGamma[wineClass] = [];
      }
  
      classWiseGamma[wineClass].push(gamma);
    });
  
    const statistics: Record<string, number[]> = {};
  
    for (const wineClass in classWiseGamma) {
      const gamma = classWiseGamma[wineClass];
      statistics[`Class ${wineClass}`] = [
        calculateMean(gamma),
        calculateMedian(gamma),
        calculateMode(gamma),
      ];
    }
  
    return statistics;
  }
  
  // Calculate Mean
  function calculateMean(data: number[]) {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  }
  
  // Calculate Median
  function calculateMedian(data: number[]) {
    const sortedData = [...data].sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      return sortedData[mid];
    }
  }
  
  // Calculate Mode
  function calculateMode(data: number[]) {
    const frequencyMap: Record<number, number> = {};
    data.forEach((val) => {
      frequencyMap[val] = (frequencyMap[val] || 0) + 1;
    });
    let mode: number | null = null;
    let maxFrequency = 0;
    for (const val in frequencyMap) {
      if (frequencyMap[val] > maxFrequency) {
        mode = parseFloat(val);
        maxFrequency = frequencyMap[val];
      }
    }
    return mode !== null ? mode : 0; // Return 0 if mode is null
  }
  