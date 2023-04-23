import React from "react";

import TournamentContent, { Tournament } from "./Tournament";
import { TournamentHeader } from "./Tournament";
import LeaderBoard from "../cash-game/tables/LeaderBoard";
import { data } from "../cash-game/data";
import TicketsList from "../cash-game/tables/TicketsList";
import {
  CashGameWrapper,
  CashGameHeader,
  LeaderResults,
} from "../cash-game/CashGameStyle";
import Satellite from "./EverydaySatellites";

export default function SpringSeries() {
  return (
    <>
      <Tournament>
        <TournamentHeader>
          <h2>ტურნირები და სატელიტები</h2>
        </TournamentHeader>
        <TournamentContent />
      </Tournament>
      <CashGameWrapper>
        <CashGameHeader>
          <h2>მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით</h2>
        </CashGameHeader>
        <LeaderBoard title="ჰოლდემის TOP20 ლიდერბორდი" data={data} />
        <TicketsList />
        <LeaderResults>
          <p>
            * ლიდერბორდის შედეგები განახლდება <span>პოკერის ლობიში</span>
          </p>
          <p>
            * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
            სატელიტები
          </p>
        </LeaderResults>
      </CashGameWrapper>
      <Satellite />
    </>
  );
}
