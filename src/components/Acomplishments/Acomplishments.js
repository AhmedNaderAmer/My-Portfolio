/** @format */

import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
} from "./AcomplishmentsStyles";

const data = [
  { number: 40, text: "React Projects" },
  { number: 10, text: "Node Project" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Acomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
