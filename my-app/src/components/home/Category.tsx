import { NextPage } from "next";
import Tag from "@/src/components/tag/Tag";
import ItemCategory from "@/src/components/item/ItemCategory";
export interface Props {}
const Category: NextPage<Props> = () => {
  return (
    <section className="container category">
      <Tag status={false} text={"Categories"} desc={"Browse By Category"}></Tag>
      <div className="category_list">
        <ItemCategory></ItemCategory>
        <ItemCategory></ItemCategory>
        <ItemCategory></ItemCategory>
        <ItemCategory></ItemCategory>
        <ItemCategory></ItemCategory>
        <ItemCategory></ItemCategory>
      </div>
    </section>
  );
};
export default Category;
