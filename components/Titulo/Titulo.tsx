export const Titulo = ({
  children,
  as = "h1",
  color = "gray",
}: {
  children: React.ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "gray" | "white";
}) => {
  const AsComponent = as;

  const c = {
    gray: "text-gray-900",
    white: "text-white",
  };

  const asComponentStyles = {
    h1: `text-4xl font-bold ${c} mb-6`,
    h2: `text-3xl font-bold ${c} mb-6`,
    h3: `text-2xl font-bold ${c} mb-6`,
    h4: `text-xl font-bold ${c} mb-6`,
    h5: `text-lg font-bold ${c} mb-6`,
    h6: `text-base font-bold ${c} mb-6`,
  };

  return (
    <AsComponent className={asComponentStyles[as]}>{children}</AsComponent>
  );
};
