import styled from "styled-components";
import Head from "next/head";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Domain Parked</title>
      </Head>

      <Main>
        <Title>
          Hey there, You found some goodies!
        </Title>
        <Description>
          This domain has been parked courtesy of the Infinity Development Team.
        </Description>
        <Description>
          This means that we are working on something new and exciting which will be hosted on this domain.
        </Description>
      </Main>
      
      <br /><br />

      <Footer>
        <FooterText>
         © 2021 - 2022 Infinity Bot List  -{" "}
          <Website href="https://infinitybotlist.com">toxicdev.me</Website> -{" "}
          <Twitter href="https://twitter.com/InfinityBotList">
            @InfinityBotList
          </Twitter>
        </FooterText>
        <svg viewBox="0 0 120 28">
         <defs> 
             <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
          </defs> 
           <use id="wave3" className="wave" xmlnsXlink="#wave" x="0" y="-2" ></use> 
           <use id="wave2" className="wave" xmlnsXlink="#wave" x="0" y="0" ></use>
          <use id="wave1" className="wave" xmlnsXlink="#wave" x="0" y="1" />
        </svg>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  background-color: #0f0f0e;
  font-family: "Quicksand", sans-serif;
  padding: 85px 0 285px 0;
  border: 5px solid #0090FF;
  border-radius: 5px;
`;

const FooterInner = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 120px;
    max-width: 1170px;
    position: relative;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  color: white;
`;

const P = styled.span`
  margin-right: 5px;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0;
  margin-top: 20px;
  color: white
`;

const FooterText = styled.p`
  color: white;
`;

const Twitter = styled.a`
  text-decoration: none;
  color: #025683;
`;

const Website = styled.a`
  text-decoration: none;
  color: #025683;
`;
