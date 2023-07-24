import { MenuLateralItem } from "./MenuLateralItem";

export const MenuLateral = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="py-4 bg-gray-300 text-gray-800 flex justify-center items-center">
        <span>Menu</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="flex flex-col justify-center items-center w-full">
          <MenuLateralItem title="Trilhas" to="/trilhas" />
        </ul>
      </div>
    </div>
  );
};
