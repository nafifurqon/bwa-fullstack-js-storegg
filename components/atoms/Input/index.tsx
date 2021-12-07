export interface InputProps {
  label: string;
  type: string;
  name: string;
}

export default function Input(props: InputProps) {
  const {
    label, type, name, ...nativeProps
  } = props;

  return (
    <>
      <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={name}
        name={name}
        aria-describedby={name}
        placeholder={`Enter your ${name}`}
        {...nativeProps}
      />
    </>
  );
}
