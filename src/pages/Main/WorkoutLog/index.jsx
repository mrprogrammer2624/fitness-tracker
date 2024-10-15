import { Form, DatePicker, Select, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { logWorkout } from "@/action";
import { Button } from "@/components";
import { useTitle } from "@/App";

const { Option } = Select;

export const WorkoutLog = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Log Workout");
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(logWorkout(values))
      .then(() => {
        toast.success("Workout logged successfully");
      })
      .catch((error) => {
        toast.error("Failed to log workout: " + error.message);
      });
  };

  return (
    <div>
      <Form name="workout_log" onFinish={onFinish}>
        <Form.Item
          name="activityType"
          rules={[
            { required: true, message: "Please select an activity type!" },
          ]}
        >
          <Select placeholder="Select activity type">
            <Option value="running">Running</Option>
            <Option value="cycling">Cycling</Option>
            <Option value="swimming">Swimming</Option>
            <Option value="weightlifting">Weightlifting</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="duration"
          rules={[{ required: true, message: "Please input the duration!" }]}
        >
          <InputNumber min={1} placeholder="Duration (minutes)" />
        </Form.Item>
        <Form.Item
          name="caloriesBurned"
          rules={[{ required: true, message: "Please input calories burned!" }]}
        >
          <InputNumber min={0} placeholder="Calories burned" />
        </Form.Item>
        <Form.Item
          name="date"
          rules={[{ required: true, message: "Please select a date!" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log Workout
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
