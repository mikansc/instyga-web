export const Botao = ({
  children = "empty!",
}: {
  children: React.ReactNode;
}) => {
  return (
    <button
      className="
    mt-4
    px-4
    py-2
    bg-gray-900
    text-white
    rounded
    hover:bg-gray-800
    transition-colors
    duration-300
    ease-in-out
    "
    >
      {children}
    </button>
  );
};
