import React, {
  DetailedHTMLProps,
  FC,
  FocusEventHandler,
  InputHTMLAttributes,
} from "react";
import "./Input.css";

type InputProps = {
  value?: string | number;
  name?: string;
  onChange?: (value: any) => void;
  type: string;
  className?: string;
  onBlur?: (
    e:
      | FocusEventHandler<HTMLInputElement>
      | undefined
      | DetailedHTMLProps<
          InputHTMLAttributes<HTMLInputElement>,
          HTMLInputElement
        >
  ) => void;
  placeholder?: string;
};

const Input: FC<InputProps> = ({
  value,
  name,
  onChange,
  type,
  className,
  onBlur,
  placeholder,
}) => {
  // const onInputChange = (event: any) => {
  //   if (event.target) {
  //     onChange(event.target.value);
  //   }
  // };

  return (
    <input
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      className={className}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

export default Input;
