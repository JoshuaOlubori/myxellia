import logo from "../../assets/icons/header/petals.svg";

const HeaderLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Myxellia Logo" className="h-6 w-auto" />
      <span className="font-arp-150">myxellia</span>
    </div>
  );
};

export default HeaderLogo;
