import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ChartDisplay from './components/ChartDisplay';
import './App.css';

function App() {
  const [chartData, setChartData] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // Function to handle file upload success and set chart data
  const handleFileUpload = async (data) => {
    setChartData(data);
    const minYear = Math.min(...Object.keys(data).map(year => parseInt(year, 10)));
    setSelectedYear(minYear);
  };

  // Handle year change
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  return (
    <div className="App">
      <h1>Financial Data Visualization</h1>
      <FileUpload onUploadSuccess={handleFileUpload} />
      {chartData && (
        <>
          <div style={{ margin: '20px 0' }}>
            <label htmlFor="year-select">Select Year: </label>
            <select id="year-select" onChange={handleYearChange} value={selectedYear}>
              {Object.keys(chartData).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <ChartDisplay data={chartData} selectedYear={selectedYear} />
        </>
      )}
    </div>
  );
}

export default App;
