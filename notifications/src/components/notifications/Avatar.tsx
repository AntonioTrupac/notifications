interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="flex h-[39px] w-[39px] flex-shrink-0 items-center justify-center rounded-full md:h-[45px] md:w-[45px]">
      <img src={imageUrl} alt={alt} className="rounded-full" />
    </div>
  );
};

export default Avatar;
