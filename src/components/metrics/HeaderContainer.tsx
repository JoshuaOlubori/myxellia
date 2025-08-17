import SalesOverview from "./SalesOverview";
import Overview from "./Overview";
import home from "@/assets/icons/metrics/home.svg"
import users from "@/assets/icons/metrics/users.svg"

const HeaderContainer = () => {
  return (
    //   <!-- Main Grid Container -->
    <div className="container font-euclid-circular-b mx-auto bg-[#fbfcfc]">
      <p className="font-semibold text-2xl pt-4 ml-5">Welcome Ahmed</p>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full  p-4">
          {/* <!-- Box 1: Twice as wide and tall as the others -->
    <!-- The `row-span-2` className makes this element span two rows, fulfilling the height requirement. --> */}
          <div className="row-span-2 col-span-2 text-white text-2xl font-bold border rounded-[20px]  outline-1 outline-gray-300 ">
            {/* <div className="flex justify-between">
    <div><p>Sales Overview</p>
    <p>Showing overview Jan 2022 - Sep 2022</p></div>
    <div className="rounded-full border">View transactions </div>
   </div> */}

            <SalesOverview />
          </div>

          {/* <!-- Box 2 --> */}
         
           <Overview
           title = "Listings Overview"
           kpi1 = "Total"
           kpi2 = 'Active'
          kpi3 = 'Archived'
          kpi1Value = "1.8K"
          kpi2Value = '80'
          kpi3Value = "1k"
          iconSrc = {home}
           />
         

          {/* <!-- Box 3 --> */}
          
           <Overview
           title = "Users Overvew"
           kpi1 = "Total"
           kpi2 = "Riders"
          kpi3 = "Subscribers"
          kpi1Value = "20.7k"
          kpi2Value = "8.5k"
          kpi3Value = "7.5k"
          iconSrc = {users}
           />
       
        </div>
      </div>
    </div>
  );
};
export default HeaderContainer;
