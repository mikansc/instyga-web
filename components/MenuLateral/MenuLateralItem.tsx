interface MenuLateralItemProps {
  title: string;
  to: string;
}

export const MenuLateralItem = ({ title, to }: MenuLateralItemProps) => {
  return (
    <li className="w-full">
      <a
        href={to}
        className=" hover:bg-gray-400 hover:text-white w-full block text-center py-4"
      >
        {title}
      </a>
    </li>
  );
};
