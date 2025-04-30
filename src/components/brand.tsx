import Image from "next/image";
import logo from "../../public/images/logo.png";

const Brand = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleScrollToTop}
      className="flex items-center gap-2 cursor-pointer h-full "
    >
      <Image src={logo} alt="Foodie" width={100} height={100} />
    </button>
  );
};

export default Brand;
