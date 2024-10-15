import { Card, Row, Col } from "antd";
import { useSelector } from "react-redux";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useTitle } from "@/App";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement
);

export const Statistics = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("statistics");
  const { workoutData, activityTypes } = useSelector((state) => state.fitness);

  const validWorkoutData =
    workoutData && workoutData.length > 0 ? workoutData : [];
  const validActivityTypes =
    activityTypes && activityTypes.length > 0 ? activityTypes : [];

  const lineData = {
    labels: validWorkoutData.map((item) => item.date),
    datasets: [
      {
        label: "Duration",
        data: validWorkoutData.map((item) => item.duration),
        borderColor: "#1890ff",
        backgroundColor: "rgba(24, 144, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const lineOptions = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Duration (mins)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  const pieData = {
    labels: validActivityTypes.map((item) => item.type),
    datasets: [
      {
        data: validActivityTypes.map((item) => item.value),
        backgroundColor: ["#1890ff", "#f5222d", "#faad14", "#52c41a"],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const percentage = (
              (tooltipItem.raw /
                validActivityTypes.reduce((acc, cur) => acc + cur.value, 0)) *
              100
            ).toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Workout Trends">
            <Line data={lineData} options={lineOptions} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Activity Types Distribution">
            <Pie data={pieData} options={pieOptions} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
