import { BsCoin } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { memo } from "react";

const Coin = ({ authToken }) => {
  console.log(authToken);
  console.log("Coin component rendered");
  const { user } = useAuth();
  return (
    <>
      <div className="flex items-center gap-2 rounded-2xl border-2 border-rose-500 px-[6px] py-[6px]">
        <BsCoin className="h-5 w-5 text-yellow-500" />
        <span className="font-bold text-gray-800">80</span>
      </div>
    </>
  );
};
export default memo(Coin);
