const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-extrabold">Notifications</h1>
        <span className="rad ml-3 rounded-md bg-primary-blue px-[11px] pt-[1px] pb-1 font-extrabold text-white">
          3
        </span>
      </div>

      <button className="text-dark-grayish active:text-primary-blue">
        Mark all as read
      </button>
    </div>
  );
};

export default Header;
