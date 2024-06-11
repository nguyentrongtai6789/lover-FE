import { Input } from "antd";
import { ErrorMessage, FieldProps } from "formik";
interface IInputCustomProps extends FieldProps {
  isRequired?: boolean;
  label?: string;
  styleWrapper?: React.CSSProperties;
  styleInput?: React.CSSProperties;
}

export const InputCustom: React.FC<IInputCustomProps> = ({
  field,
  form: { touched, errors },
  isRequired,
  label,
  styleWrapper,
  styleInput,
  ...rest
}) => {
  return (
    <>
      <div style={styleWrapper}>
        <span>
          {label || ""} {isRequired && <span style={{ color: "red" }}>*</span>}
        </span>
        <Input {...field} {...rest} style={styleInput} />
        <div>
          {errors[field.name] && touched[field.name] && (
            <span
              style={{ fontStyle: "italic", color: "red", fontSize: "12px" }}
            >
              <ErrorMessage name={field.name || ""} />
            </span>
          )}
        </div>
      </div>
    </>
  );
};
