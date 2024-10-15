import { Form, Select } from "antd";
import { useDispatch } from "react-redux";
import { setGoal } from "@/action";
import toast from "react-hot-toast";
import { Button, Input } from "@/components";
import { useTitle } from "@/App";

const { Option } = Select;

export const GoalSetting = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Set Fitness Goal");
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(setGoal(values))
      .then(() => {
        toast.success("Goal set successfully");
      })
      .catch((error) => {
        toast.error("Failed to set goal: " + error.message);
      });
  };

  return (
    <div>
      <Form name="goal_setting" onFinish={onFinish}>
        <Form.Item
          name="goalType"
          rules={[{ required: true, message: "Please select a goal type!" }]}
        >
          <Select placeholder="Select goal type">
            <Option value="weekly">Weekly</Option>
            <Option value="monthly">Monthly</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="goalValue"
          rules={[{ required: true, message: "Please input your goal!" }]}
        >
          <Input type="number" min={1} placeholder="Number of workouts" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Set Goal
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
