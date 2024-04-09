import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  FacebookOutlined,
  FileTextOutlined,
  GoogleOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Button, ButtonProps, Image } from "antd";
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
  facebook: <FacebookOutlined style={{ color: "red" }} />,
  google: <GoogleOutlined />,
};

interface CustomButtonProps extends ButtonProps {
  tooltip?: string;
  icon?: keyof typeof icons;
  className?: string;
  urlImage?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const ButtonCustom = ({
  title,
  icon,
  style,
  className,
  onClick,
  urlImage,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
      className={className}
      icon={icon ? icons[icon] : void 0}
      {...rest}
      style={style}
      onClick={onClick}
    >
      <div>
        {urlImage && <Image src={urlImage} preview={false} />}
        {title}
      </div>
    </Button>
  );
};
