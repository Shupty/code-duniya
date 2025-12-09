const Title = ({
  mainTitle,
  subTitle,
}: {
  mainTitle: string;
  subTitle: string;
}) => {
  return (
    <div>
      <h2 className="text-[36px] font-anek text-black text-center font-bold">
        {mainTitle}
      </h2>
      <p className="text-[20px] mt-[15px] font-anek text-black text-center font-medium">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
