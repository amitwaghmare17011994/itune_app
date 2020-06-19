import React from "react";
import { Empty } from "antd";

const EmptyMessage = ({ msg }) => (
  <Empty
    description={msg}
    className="empty_message"
    image={Empty.PRESENTED_IMAGE_SIMPLE}
  />
);

export default EmptyMessage;
