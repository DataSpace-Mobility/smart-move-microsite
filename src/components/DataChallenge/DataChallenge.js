import React from "react";
import { DataContainer, DataHeading, DataPara, DataParaList } from "./DataChallenge.elements";

const DataChallenge = () => {
  return (
    <DataContainer>
      <DataHeading>DATA CHALLENGE STATEMENT</DataHeading>
      <DataPara>
          <DataParaList>How to generate insights and creating value from the mobility data.</DataParaList>
          <DataParaList>How to learn more on commuter behaviours and preferences with data gathered currently with various transit agencies and private transport operators.</DataParaList>
          <DataParaList>How to influence decision making for a traveller to consider travel at a different time and / or using alternate options, so transportation demand including public transport demand is more evenly distributed through the day.</DataParaList>
      </DataPara>
    </DataContainer>
  );
};

export default DataChallenge;


