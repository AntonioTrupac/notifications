interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="flex h-[45px] w-[45px] flex-shrink-0 items-center justify-center rounded-full">
      <img src={imageUrl} alt={alt} className="rounded-full" />
    </div>
  );
};

export default Avatar;
