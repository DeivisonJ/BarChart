import React, { Component } from 'react';
import BarChart from './BarChart';

class App extends Component {
  render() {
    const data = [
      {
        xField: "Janeiro",
        yField: 100
      },
      {
        xField: "Fevereiro",
        yField: 80
      },
      {
        xField: "Março",
        yField: 76
      },
      {
        xField: "Abril",
        yField: 90
      },
      {
        xField: "Maio",
        yField: 57
      },
      {
        xField: "Junho",
        yField: 62
      },
      {
        xField: "Julho",
        yField: 57
      }
    ];

    return (
      <div className="App">
        <BarChart
          width="750"
          height="500"
          title="Vendas do Produto X"
          data={data}
          xRange={[0, 700]}
          xDomain={data.map((s) => s.xField)}
          yRange={[340, 0]}
          yDomain={[0, 100]}>
        </BarChart>
      </div>
    );
  }
}

export default App;
