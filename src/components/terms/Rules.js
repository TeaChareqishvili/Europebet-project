import React from "react";
import styled from "styled-components";

export default function AdditionalRules({ isActive }) {
  return (
    <>
      {isActive ? (
        <RulesContent>
          <p>
            აქცია დაიწყება 1 აპრილს 00:00 საათზე და დასრულდება 30 აპრილს 23:59
            საათზე
          </p>
          <p>
            კამპანიის ფარგლებში, თამაშდება სხადასხვა კატეგორიის The Festival in
            Malta-ს საგზურები
          </p>
        </RulesContent>
      ) : isActive ? (
        <AboutRules>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          varius, quam nec sodales vehicula, arcu leo lobortis mi, in auctor
          nisl urna quis nunc. Aenean maximus turpis ligula, ut mollis lacus
          consequat eget. Duis fringilla posuere neque at semper. Proin in
          rhoncus purus. Sed leo orci, pulvinar ac urna a, venenatis volutpat
          nulla. Donec ac nulla sodales, lacinia enim eget, finibus urna.
          Praesent ultrices libero id urna ornare, vel finibus tortor commodo.
          Quisque ut urna at ligula vestibulum mattis id a elit. In sem turpis,
          ultrices at ante a, dignissim placerat sapien.
        </AboutRules>
      ) : isActive ? (
        <General>
          <p>
            ნებისმიერი სახის არასამართლიანი თამაში დაისჯება ევროპაბეთის წესების
            შესაბამისად და ასეთ ქმედებაში შემჩნეული მოთამაშე, კომპანიის
            გადაწყვეტილებით, მოიხსნება გათამაშებიდან და ვერ მიიღებს
            არასამართლიანად მოგებულ პრიზს.
          </p>
        </General>
      ) : (
        <></>
      )}
    </>
  );
}

export const RulesContent = styled.div`
  padding: 20px 10px;

  p {
    color: #ffffff;
    font-size: 15px;
    text-align: left;
    line-height: 1.6;
    font-weight: bold;
  }
`;
export const AboutRules = styled.div`
  padding: 20px 10px;

  p {
    color: #ffffff;
    font-size: 15px;
    text-align: left;
    line-height: 1.6;
    font-weight: bold;
  }
`;

export const General = styled.div`
  padding: 20px 10px;

  p {
    color: #ffffff;
    font-size: 15px;
    text-align: left;
    line-height: 1.6;
    font-weight: bold;
  }
`;
