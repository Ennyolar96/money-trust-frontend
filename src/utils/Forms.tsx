import { useField } from "formik";
import {
  Fragment,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  error?: string;
}
export const InputForm = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <Fragment>
      <div className="">
        <label
          className="text-sm font-medium text-[#140706] mb-1 block"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        <input
          className={`w-full focus:outline-none focus:ring-0 text-sm p-3 rounded text-black bg-white border placeholder:text-gray-400 placeholder:text-xs ${
            meta.touched && meta.error ? "text-red-500" : "border-black/15"
          }`}
          {...field}
          {...props}
          title=""
        />
        {meta.touched && meta.error ? (
          <div className="text-xs text-red-500">{meta.error}</div>
        ) : null}
      </div>
    </Fragment>
  );
};

interface CheckboxProps extends InputProps {
  children?: ReactNode;
}
export const Checkbox = ({ children, label, ...props }: CheckboxProps) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <input type="checkbox" {...field} {...props} />
      <label className="text-xs text-[#140706] ms-1">{label}</label>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs">{meta.error}</div>
      ) : null}
    </div>
  );
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}
export const Select = ({ label, ...props }: SelectProps) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="text-sm text-[#140706] font-medium"
      >
        {label}
      </label>
      <select
        {...field}
        {...props}
        title=""
        className="w-full h-11 min-h-[2.5rem] focus:outline-none focus:ring-0 text-xs p-2.5 rounded text-black bg-white border border-black/15 appearance-none"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs">{meta.error}</div>
      ) : null}
    </div>
  );
};
