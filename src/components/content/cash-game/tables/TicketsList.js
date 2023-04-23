import { TicketsWrapper,TicketTable } from "../Tickets"
import { dataTicket } from "../data"



export default function TicketsList(){
    return(
      <>
       <TicketsWrapper>
            {dataTicket.map((item, id) => (
              <TicketTable key={id}>
                <img src={item.image} alt="icon" />
                <p>{item.text}</p>
              </TicketTable>
            ))}
          </TicketsWrapper>
      </>
    )
  }