import { Button } from "./styles";

export default function ButtonModal({
  id,
  onClick,
  type = "submit",
  className = "",
  children,
  ...props
}) {
  return (
    <Button
      id={id}
      onClick={onClick}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}
