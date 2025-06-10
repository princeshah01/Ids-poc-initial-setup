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
        className={` ${open ? "w-20 h-10" : "w-15 mr-3"}`}
      />
    </a>
  );
};
