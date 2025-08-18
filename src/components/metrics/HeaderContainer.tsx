import SalesOverview from "./SalesOverview";
import Overview from "./Overview";
import home from "@/assets/icons/metrics/home.svg";
import users from "@/assets/icons/metrics/users.svg";

const HeaderContainer = () => {
  return (
    <div className="font-euclid-circular-b container mx-auto bg-[#fbfcfc]">
      <p className="ml-5 pt-4 text-2xl font-semibold">Welcome Ahmed</p>
      <div className="flex items-center justify-center">
        <div className="grid w-full grid-cols-3 grid-rows-2 gap-4 p-4">
          <div className="col-span-2 row-span-2 rounded-[20px] border text-2xl font-bold text-white outline-1 outline-gray-300">
            <SalesOverview />
          </div>

          <Overview
            title="Listings Overview"
            kpi1="Total"
            kpi2="Active"
            kpi3="Archived"
            kpi1Value="1.8K"
            kpi2Value="80"
            kpi3Value="1k"
            iconSrc={home}
          />

          <Overview
            title="Users Overvew"
            kpi1="Total"
            kpi2="Riders"
            kpi3="Subscribers"
            kpi1Value="20.7k"
            kpi2Value="8.5k"
            kpi3Value="7.5k"
            iconSrc={users}
          />
        </div>
      </div>
    </div>
  );
};
export default HeaderContainer;
