import { NextPage } from "next";

export interface Props {
  status: boolean;
  text: string;
  desc: string;
}
const Tag: NextPage<Props> = ({ status, text, desc }) => {
  return (
    <div className="sales_today">
      <span className="sales_today-text">{text}</span>
      <div className="sales_flash">
        <span className="sales_flash-desc">{desc}</span>
        {status === true && (
          <div className="sales_flash-time">
            <div className="sales_flash-day">
              <span className="sales_flash-day-1">Days</span>
              <span className="sales_flash-day-2">03</span>
            </div>
            <div className="sales_flash-day">
              <span className="sales_flash-day-1">Hours</span>
              <span className="sales_flash-day-2">23</span>
            </div>
            <div className="sales_flash-day">
              <span className="sales_flash-day-1">Minutes</span>
              <span className="sales_flash-day-2">19</span>
            </div>
            <div className="sales_flash-day1">
              <span className="sales_flash-day-1">Seconds</span>
              <span className="sales_flash-day-2">56</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Tag;
