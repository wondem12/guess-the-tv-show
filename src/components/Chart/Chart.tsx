import { FC, useMemo } from "react";
import { Bar } from "react-chartjs-2";

interface Props {
  labels: Array<string>;
  datasets: Array<{
    label: string;
    data: Array<number>;
  }>;
}

const Chart: FC<Props> = (props) => {
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const chartData = useMemo(
    () => ({
      labels: props.labels,
      datasets: props.datasets.map((dataset) => ({
        label: dataset.label,
        backgroundColor: [
          "rgb(124,252,0)",
          "rgb(255, 99, 132)",
          "rgb(255, 206, 86)",
        ],
        data: dataset.data,
      })),
    }),
    [props]
  );
  return <Bar data={chartData} options={options} />;
};

export default Chart;
