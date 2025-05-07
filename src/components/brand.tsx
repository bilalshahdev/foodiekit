import Image from "next/image";

const Brand = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleScrollToTop}
      className="flex items-center gap-2 cursor-pointer h-full "
    >
      <Image src={"/images/logo.png"} alt="Foodie" width={100} height={100} />
    </button>
  );
};

export default Brand;
