import Header from "@/components/header/Header";

import HeaderContainer from "@/components/metrics/HeaderContainer";
import ImageRoll from "./components/imageRoll/ImageRoll";
import Calendar from "./components/modals/Calendar";


function App() {
  return (
    <div>
      <Calendar/>
      <Header />
      <HeaderContainer />
      <ImageRoll />
      {/* Your other page content */}
    </div>
  );
}

export default App;
