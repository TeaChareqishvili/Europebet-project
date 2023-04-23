import React from 'react'

import { TicketsWrapper, TicketTable } from "../Tickets";
import { dataTicket } from "../data";

export default function TicketsList() {
  return (
    <>
      <TicketsWrapper>
        {dataTicket.map((item, id) => (
          <TicketTable
            key={id}
            widthDesktop={item.widthDesktop}
            widthMobile={item.widthMobile}
          >
            <div className="img-wrapper">
              <img src={item.image} alt="icon" />
            </div>
            <p>{item.text}</p>
          </TicketTable>
        ))}
      </TicketsWrapper>
    </>
  );
}
