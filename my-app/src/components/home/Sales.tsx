import { NextPage } from "next";
import Tag from "@/src/components/tag/Tag";
import ItemSales from "@/src/components/item/ItemSales";
export interface Props {}
const Sales: NextPage<Props> = () => {
  return (
    <div className="container sales">
      <Tag status={true} text={"Today’s"} desc={"Flash Sales"}></Tag>
      <div className="sales_list">
        <ItemSales sale={true}></ItemSales>
        <ItemSales sale={true}></ItemSales>
        <ItemSales sale={true}></ItemSales>
        <ItemSales sale={true}></ItemSales>
      </div>
      <div className="btn-123">
        <button type="button" className="btn btn-outline-danger">
          View All Product
        </button>
      </div>
    </div>
  );
};
export default Sales;
