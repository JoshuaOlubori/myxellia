
import logo from "../../assets/icons/header/petals.svg"; // adjust path if no alias

const HeaderLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={logo}
        alt="Myxellia Logo"
        className="h-6 w-auto" // ✅ this matches the styling you had before
      />
      <span className="font-arp-150">myxellia</span>
    </div>
  );
};

export default HeaderLogo;
