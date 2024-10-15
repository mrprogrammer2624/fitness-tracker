import { notificationsListing } from "@/constants";
import { List, Avatar, Typography } from "antd";

const { Title, Text } = Typography;

export const Notifications = () => {
  return (
    <div className="bg-dark text-white p-4">
      <List
        itemLayout="horizontal"
        dataSource={notificationsListing}
        renderItem={(item) => (
          <List.Item className="border-bottom border-secondary py-3">
            <List.Item.Meta
              avatar={<Avatar src={item?.src} />}
              title={
                <div className="d-flex justify-content-between align-items-center">
                  <Title level={5} className="text-white mb-0">
                    {item.title}
                  </Title>
                  <Text className="text-muted">{item.time}</Text>
                </div>
              }
              description={
                <Text className="text-secondary">{item.description}</Text>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};
