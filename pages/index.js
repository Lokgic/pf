import styled from "styled-components";
import work from "../static/work.json";
import { useState } from "react";
import Link from "next/link";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: 480px 480px;
  grid-auto-rows: 520px;
  grid-auto-flow: row; */
  /* grid-gap: 2rem; */
  justify-content: space-around;
  max-width: 1200px;
  @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    max-width: 900px;
  }
`;

const FlexBox = styled.div`
  background-image: ${props => `url(/static/images/${props.bg})`};
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 320px;
  height: 460px;
  /* padding: 40px; */
  margin: auto auto 4rem auto;
  /* @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    width: 100%;
    height: auto;
  } */
`;

const FlexText = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  h2 {
    margin: auto auto 5rem auto;
    font-family: ${props => props.theme.opensans};
    font-weight: 300;
    font-size: 2.3rem;
    width: 200px;
  }
  p {
    margin: 0 auto auto auto;
    font-family: ${props => props.theme.opensans};
    font-weight: 300;
    font-size: 1.8rem;
    width: 200px;
    text-transform: capitalize;
  }
`;
export default () => {
  const [hoverState, setHoverState] = useState(-1);
  return (
    <FlexContainer>
      {Object.keys(work).map((d, i) => (
        <Link href={`/${d}`}>
          <FlexBox
            bg={work[d].head}
            key={`fbox-${d}`}
            onMouseEnter={() => setHoverState(i)}
            onMouseLeave={() => setHoverState(-1)}
          >
            {hoverState === i ? (
              <FlexText>
                <h2>{work[d].title}</h2>
                <p>{work[d].desc}</p>
              </FlexText>
            ) : null}
          </FlexBox>
        </Link>
      ))}
    </FlexContainer>
  );
};
