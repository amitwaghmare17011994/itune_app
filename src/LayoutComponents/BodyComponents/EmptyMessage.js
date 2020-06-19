import React from "react";
import { Empty } from "antd";

const EmptyMessage = () => <Empty     description="Songs Not Found For Searched Term" className="empty_message" image={Empty.PRESENTED_IMAGE_SIMPLE}  />;

export default EmptyMessage;
