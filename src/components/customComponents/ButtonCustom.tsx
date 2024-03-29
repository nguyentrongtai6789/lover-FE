import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  FileTextOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  SyncOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import { ReactNode } from "react";
import { FaMinus, FaPlus, FaRegEye } from "react-icons/fa";
import { TbArrowBigRight } from "react-icons/tb";

const icons: Record<string, ReactNode> = {
  add: <PlusCircleOutlined />,
  edit: <EditOutlined style={{ color: "#555555" }} />,
  search: <SearchOutlined />,
  refresh: <SyncOutlined />,
  infor: <FaRegEye style={{ color: "#555555" }} />,
  reject: <CloseCircleOutlined style={{ color: "red" }} />,
  approval: <CheckCircleOutlined style={{ color: "green" }} />,
  sum: <FileTextOutlined />,
  arrowLeft: <ArrowLeftOutlined />,
  arrowRight: <TbArrowBigRight style={{ color: "green" }} />,
  downLoad: <DownloadOutlined />,
  preview: <EyeOutlined />,
  addField: <FaPlus />,
  delete: <DeleteOutlined style={{ color: "red" }} />,
  deduction: <FaMinus />,
};

interface CustomButtonProps extends ButtonProps {
  tooltip?: string;
  title?: string;
  icon?: keyof typeof icons;
}

export const ButtonCustom = ({
  tooltip,
  title,
  icon,
  name,
  style,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
      name={name}
      icon={icon ? icons[icon] : void 0}
      {...rest}
      style={style}
    >
      {title}
    </Button>
  );
};
