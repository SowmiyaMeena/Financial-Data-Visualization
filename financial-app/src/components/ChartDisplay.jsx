import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const getCategoryColors = (categories) => {
  const colors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)'
  ];
  return categories.reduce((colorMap, category, index) => {
    colorMap[category] = colors[index % colors.length];
    return colorMap;
  }, {});
};

const ChartComponent = ({ data, selectedYear }) => {  
  const categories = Object.keys(data[selectedYear] || {});
  const categoryColors = getCategoryColors(categories);

  // Prepare data for Bar Chart
  const barData = {
    labels: Object.keys(data), // Years
    datasets: Object.keys(data[Object.keys(data)[0]]).map(category => ({
      label: category,
      data: Object.values(data).map(yearData => yearData[category]),
      backgroundColor: categoryColors[category],
    })),
  };

  // Prepare data for Pie Chart for the selected year
  const pieData = {
    labels: Object.keys(data[selectedYear] || {}),
    datasets: [{
      data: Object.values(data[selectedYear] || {}),
      backgroundColor: categories.map(cat => categoryColors[cat]),
    }],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ flex: 1, minWidth: '600px'  }}>
        <h2>Yearly Expense Breakdown</h2>
        <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Expenses by Category per Year' }, }}} />
      </div>

      <div style={{ flex: 1, boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Category Breakdown for {selectedYear}</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', minWidth: '100px', maxwidth: '600px', minHeight: '100px', maxHeight: '600px' }}>
          <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: 'top', display: true }, title: { display: true, text: `Expense Distribution for ${selectedYear}` } }}} />
        </div>
      </div>


    </div>
  );
};

export default ChartComponent;
