import { NextPage } from "next";
import Tag from "@/src/components/tag/Tag";
import ItemSales from "@/src/components/item/ItemSales";

export interface Props {}
const BestProduct: NextPage<Props> = () => {
  return (
    <section className="container product">
      <Tag
        status={false}
        text={"This Month"}
        desc={"Best Selling Products"}
        btn={true}
      ></Tag>
      <div className="sales_list">
        <ItemSales sale={false}></ItemSales>
        <ItemSales sale={false}></ItemSales>
        <ItemSales sale={false}></ItemSales>
        <ItemSales sale={false}></ItemSales>
      </div>
    </section>
  );
};
export default BestProduct;
