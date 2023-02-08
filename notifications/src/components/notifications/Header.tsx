interface HeaderProps {
  count: number;
  setCount: (count: number) => void;
}

const Header = ({ count, setCount }: HeaderProps) => {
  return (
    <div className="sticky top-0 z-10 flex justify-between bg-white pt-6  md:pt-8">
      <div className="flex items-center">
        <h1 className="text-xl font-extrabold leading-[25px] md:text-2xl md:leading-[30px]">
          Notifications
        </h1>
        {count === 0 ? null : (
          <span className="ml-3 rounded-md bg-primary-blue px-[11px] pb-1 pt-[1px] font-extrabold leading-5 text-white">
            {count}
          </span>
        )}
      </div>

      <button
        className="text-sm leading-[17px] text-dark-grayish active:text-primary-blue md:text-base"
        onClick={() => setCount(0)}
      >
        Mark all as read
      </button>
    </div>
  );
};

export default Header;
