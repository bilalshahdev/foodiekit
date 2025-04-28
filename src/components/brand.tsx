import { H3 } from "./ui/typography";

const Brand = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const brand = "Foodie";
  return (
    <button
      onClick={handleScrollToTop}
      className="flex items-center gap-2 cursor-pointer"
    >
      <H3 className="">
        <span className="text-signature">{brand[0]}</span>
        {brand.slice(1)}
      </H3>
    </button>
  );
};

export default Brand;
