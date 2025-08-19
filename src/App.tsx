import Header from "@/components/header/Header";
import StatsSection from "@/components/metrics/StatsSection";
import ImageRoll from "@/components/imageRoll/ImageRoll";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Header />
      <StatsSection />
      <ImageRoll />
      <Analytics/>
    </div>
  );
}

export default App;
