import { SideLeaderBoard } from "../SideLeaderBoard";
import {
  CashGameContainer,
  CashGameHeader,
  CashGameWrapper,
  LeaderResults,
} from "./CashGameStyle";
import { data } from "./data";
import RulesAndCondition from "./RulesAndConditions";
import Slide from "./Slide";
import LeaderBoard from "./tables/LeaderBoard";
import TicketsList from "./tables/TicketsList";

function CashGame() {
  return (
    <CashGameContainer>
      <CashGameWrapper>
        <CashGameHeader>
          <h2>1₾ რეიქი = 1 ქულას</h2>
        </CashGameHeader>
        <LeaderBoard title="ჰოლდემის TOP20 ლიდერბორდი" data={data} />
        <TicketsList />
        <LeaderBoard title="TOP20 ლიდერბორდი ჰოლდემში" data={data} />
        <TicketsList />
        <LeaderResults>
          <p>* ლიდერბორდის შედეგები განახლდება</p>
          <span>პოკერის ლობიში</span>
        </LeaderResults>
      </CashGameWrapper>
      <SideLeaderBoard>
        <h2>ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ</h2>
        <p>* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.</p>
      </SideLeaderBoard>
      <RulesAndCondition/>
      <Slide/>
    </CashGameContainer>
  );
}

export default CashGame;
