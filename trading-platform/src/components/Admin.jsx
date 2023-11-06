import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const AdminDashboard = () => {
  useEffect(() => {
    // Line Chart Configuration
    const generateLabels = (count) => {
      return Array.from({ length: count }, (_, i) => `Label ${i + 1}`);
    };

    const generateData = (count) => {
      return Array.from({ length: count }, () => Math.floor(Math.random() * 200) - 100);
    };

    const inputs = {
      count: 8,
    };

    const dataLine = {
      labels: generateLabels(inputs.count),
      datasets: [
        {
          label: 'Dataset',
          data: generateData(inputs.count),
          borderColor: 'red',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
        },
      ],
    };

    const configLine = {
      type: 'line',
      data: dataLine,
      options: {
        plugins: {
          filler: {
            propagate: false,
          },
          title: {
            display: true,
            text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill,
          },
        },
        interaction: {
          intersect: false,
        },
      },
    };

    const canvasLine = document.getElementById('myLineChart');
    let myLineChart = new Chart(canvasLine, configLine);

    // Pie Chart Configuration
    const handleHover = (evt, item, legend) => {
      legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
        colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
      });
      legend.chart.update();
    };

    const handleLeave = (evt, item, legend) => {
      legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
        colors[index] = color.length === 9 ? color.slice(0, -2) : color;
      });
      legend.chart.update();
    };

    const dataPie = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#27AE60', '#884EA0', '#D35400'],
      }]
    };

    const configPie = {
      type: 'pie',
      data: dataPie,
      options: {
        plugins: {
          legend: {
            onHover: handleHover,
            onLeave: handleLeave
          }
        }
      }
    };

    const canvasPie = document.getElementById('myPieChart');
    let myPieChart = new Chart(canvasPie, configPie);

    // Destroy charts to prevent conflicts
    return () => {
      myLineChart.destroy();
      myPieChart.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <aside className="bg-black text-white w-1/4 p-4 border-r border-black">
        <h2 className="text-xl font-bold mb-4" style={{ color: '#00df9a' }}>Admin Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <a href="/admin/stocks" className="block py-2 px-4 rounded-md text-white hover:bg-gray-700" style={{ backgroundColor: '#00df9a' }}>Manage Stocks</a>
          </li>
          <li>
            <a href="/admin/nfts" className="block py-2 px-4 rounded-md text-white hover:bg-gray-700" style={{ backgroundColor: '#00df9a' }}>NFTs Dashboard</a>
          </li>
          <li>
            <a href="/admin/crypto" className="block py-2 px-4 rounded-md text-white hover:bg-gray-700" style={{ backgroundColor: '#00df9a' }}>Crypto Analytics</a>
          </li>
          <li>
            <a href="/admin/users" className="block py-2 px-4 rounded-md text-white hover:bg-gray-700" style={{ backgroundColor: '#00df9a' }}>User Management</a>
          </li>
          <li>
            <a href="/admin/settings" className="block py-2 px-4 rounded-md text-white hover:bg-gray-700" style={{ backgroundColor: '#00df9a' }}>Settings</a>
          </li>
        </ul>
      </aside>
      <main className="flex-grow p-4">
        <header className="bg-gray-800 text-white p-4">
          <h1>Admin Panel Dashboard</h1>
          <p>Welcome, Admin</p>
        </header>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h2>Line Chart Section</h2>
            <canvas id="myLineChart" width="400" height="400"></canvas>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2>Pie Chart Section</h2>
            <canvas id="myPieChart" width="400" height="400"></canvas>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Section 1</h2>
          <div className="bg-white p-4 rounded shadow-md">
            {/* Sample text or buttons */}
            <p>Sample Text 1</p>
            <button className="bg-gray-500 text-white rounded p-2">Button 1</button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Section 2</h2>
          <div className="bg-white p-4 rounded shadow-md">
            {/* Sample text or buttons */}
            <p>Sample Text 2</p>
            <button className="bg-gray-500 text-white rounded p-2">Button 2</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
