// interface BotaoProps with HTMLButtonElement props and color prop
interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "green" | "red" | "blue" | "gray";
}

export const Botao = (props: BotaoProps) => {
  const { children, color = "gray" } = props;

  const c = {
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    gray: "bg-gray-900 hover:bg-gray-800",
  };

  return (
    <button
      className={`mt-4 px-4 py-2 ${c[color]} text-white rounded transition-colors duration-300 ease-in-out`}
      {...props}
    >
      {children}
    </button>
  );
};
