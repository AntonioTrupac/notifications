interface HeaderProps {
  count: number;
  setCount: (count: number) => void;
}

const Header = ({ count, setCount }: HeaderProps) => {
  return (
    <div className="sticky top-0 z-10 flex justify-between bg-white pt-8">
      <div className="flex items-center">
        <h1 className="text-2xl font-extrabold">Notifications</h1>
        {count === 0 ? null : (
          <span className="rad ml-3 rounded-md bg-primary-blue px-[11px] pt-[1px] pb-1 font-extrabold text-white">
            {count}
          </span>
        )}
      </div>

      <button
        className="text-dark-grayish active:text-primary-blue"
        onClick={() => setCount(0)}
      >
        Mark all as read
      </button>
    </div>
  );
};

export default Header;
