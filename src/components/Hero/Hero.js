/** @format */

import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome
        <br />
        To My Portfolio
        <br />
        I'm Ahmed Nader
      </SectionTitle>
      <SectionText>
        i'm junior Full stack Mean developer ,
        seeking for position in the field of
        Software Development in a reputable
        company where my skill, educational
        background and experience can be fully
        utilized and enhanced
      </SectionText>
      <Button
      // onClick={() => window.location = 'mailto:amer36149@gmail.com'}
      >
        <a
          href='/resume.pdf'
          alt='alt text'
          target='_blank'
          rel='noopener noreferrer'>
          Learn More(CV)
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
