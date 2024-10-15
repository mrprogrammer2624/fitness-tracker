import { useTitle } from "@/App";
import { Card, Col, List, Progress, Row } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { recentWorkouts, weeklyGoal, progress } = useSelector(
    (state) => state.fitness
  );
  const { setHeaderText } = useTitle();
  setHeaderText("Dashboard");
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Weekly Goal">
            <Progress type="circle" percent={progress} />
            <p>Goal: {weeklyGoal} workouts</p>
            <Link to="/goals">Update Goal</Link>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Recent Workouts">
            <List
              dataSource={recentWorkouts}
              renderItem={(item) => (
                <List.Item>
                  {item.activityType} - {item.duration} minutes
                </List.Item>
              )}
            />
            <Link to="/workout-log">Log Workout</Link>
          </Card>
        </Col>
      </Row>
    </>
  );
};
