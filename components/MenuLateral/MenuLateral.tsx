import { MenuLateralItem, MenuLateralItemProps } from "./MenuLateralItem";

export const MenuLateral = ({
  menuItems = [],
}: {
  menuItems: MenuLateralItemProps[];
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="py-4 bg-gray-300 text-gray-800 flex justify-center items-center">
        <span>Menu</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="flex flex-col items-center w-full">
          {menuItems.map((item) => {
            return (
              <MenuLateralItem key={item.to} title={item.title} to={item.to} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
