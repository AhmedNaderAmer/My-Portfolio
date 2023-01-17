import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck, DiJavascript1 } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size="3rem" />
          <Span>AhmedNader</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href='https://github.com/AhmedNaderAmer'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons target="_blank" href='https://www.linkedin.com/in/ahmed-nader-amer-8860a7193'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      {/* <SocialIcons target="_blank" href='https://www.facebook.com/profile.php?id=100004511762894'>
        <AiFillFacebook size='3rem' />
      </SocialIcons> */}
      <SocialIcons target="_blank" href='mailto:amer36149@gmail.com'>
        <AiFillMail size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
