import { Form, Input } from "antd";
import { FieldProps } from "formik";

export const InputCustom: React.FC<FieldProps> = ({
  field,
  form: { touched, errors },
  ...rest
}) => {
  const error = errors[field.name] as string | undefined; // Kiểm tra kiểu dữ liệu
  const showError = touched[field.name] && error;

  return (
    <Form.Item
      validateStatus={showError ? "error" : ""}
      help={showError && error}
    >
      <Input {...field} {...rest} />
    </Form.Item>
  );
};
