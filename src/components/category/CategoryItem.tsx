import type { CategoryItemProps } from "../../types/categoryItemTypes";

const CategoryItem = ({ item }: { item: CategoryItemProps }) => {
  return (
    <div className="w-[230px] py-[15px] bg-primary-2 text-white rounded-[25px]">
      <span className="flex justify-center">{item.svgIcon}</span>

      <h3 className="font-anek mt-2.5 font-semibold text-2xl text-center">
        {item.name}
      </h3>
    </div>
  );
};

export default CategoryItem;
