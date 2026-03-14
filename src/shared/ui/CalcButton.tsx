type CalcButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "default" | "special" | "danger";
};

export const CalcButton = ({
  onClick,
  children,
  variant = "default",
}: CalcButtonProps) => {
  const base =
    "px-3 py-1.5 rounded border text-sm font-medium cursor-pointer transition-colors";

  const variants: Record<string, string> = {
    default: "border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
    special: "border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100",
    danger: "border-red-300 text-red-400 hover:bg-red-100 hover:text-gray-600",
  };

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};
