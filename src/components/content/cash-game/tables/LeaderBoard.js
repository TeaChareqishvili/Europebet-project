import React from "react";

import {
  RowTable,
  SubTitle,
  TableHeader,
  TableWrapper,
  TableContent,
} from "../CashGameStyle";
import infoIcon from "../../../../assets/example-icon.png";
import giftIcon from "../../../../assets/gift.png";
import mechanicIcon from "../../../../assets/mechanic-icon.png";

export default function LeaderBoard({ title, data, icon }) {
  return (
    <>
      <SubTitle icon={icon}>
        <p>{title}</p>
        <img src={icon ? mechanicIcon : infoIcon} alt="infoicon" />
      </SubTitle>
      <TableWrapper>
        <TableHeader>
          <p>ადგილი</p>
          <div className="giftIcon">
            <img src={giftIcon} alt="gifticon" />
            <span>ვაუჩერი</span>
          </div>
          <p>პრიზი</p>
        </TableHeader>
        <div className="tableContainer">
          <TableContent>
            <div className="tableBox">
              {data.map((item, id) => (
                <RowTable key={id}>
                  <span>{id + 1}</span>
                  <p>{item.value}</p>
                  <p>
                    {item.prize.img && (
                      <img src={item.prize.img} alt={item.prize.img} />
                    )}
                    {item.prize.text}
                  </p>
                </RowTable>
              ))}
            </div>
          </TableContent>
        </div>
      </TableWrapper>
    </>
  );
}
