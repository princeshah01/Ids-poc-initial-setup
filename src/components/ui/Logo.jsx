export const Logo = ({ open }) => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black h-10"
    >
      <img
      loading="lazy"
        src="https://idsil.com/images/IDS-logo.gif"
        alt="ids-logo"
        className={` ${open ? "md:w-25 md:h-14 md:translate-x-2" : "md:w-20 "}  w-20  transition duration-150`}
      />
    </a>
  );
};
