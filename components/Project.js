import styled from "styled-components";

import Link from "next/link";

export const ProjContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: 1fr;
  grid-templategrid-auto-rows: 520px;
  grid-auto-flow: row;
  grid-gap: 2rem; */
  /* justify-content: space-around; */
  width: 100vw;
  margin: 0 auto;
  max-width: 70rem;
  @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    max-width: 900px;
  }
  @media (max-width: ${props => props.theme.breakpoint.w[0]}) {
    max-width: 900px;
    max-width: 1200px;
  }
  button {
    background: #dd603e;
    border: none;
    color: white;
    text-transform: uppercase;
    padding: 1rem;
    margin: 2rem 1rem 3rem auto;
    cursor: pointer;
    box-shadow: inset 0 0.1rem 0 rgb(247, 119, 21),
      0 3px 5px hsla(0, 0%, 0%, 0.2);
    -webkit-transition: background 600ms cubic-bezier(0.2, 0.965, 0, 1.005);
    transition: background 600ms cubic-bezier(0.2, 0.965, 0, 1.005);
    border-radius: 5px;
    /* height:100%; */
    :hover {
      box-shadow: none;
    }
  }
`;

export const ProjBox = styled.div`
  background-image: ${props => `url(/static/images/${props.bg})`};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  margin: auto 0;
`;

export const ProjHeadPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  h2 {
    margin: 1rem auto auto 1rem;
    font-family: ${props => props.theme.opensans};
    /* text-transform: uppercase; */
    font-weight: 400;
    font-size: 4.5rem;
    /* width: 200px; */
  }
  h3 {
    margin: 2rem auto auto 1rem;
    font-family: ${props => props.theme.opensans};
    /* text-transform: uppercase; */
    font-weight: 400;
    font-size: 1.8rem;
    /* width: 200px; */
    text-transform: uppercase;
    color: grey;
  }
  p {
    margin: 1rem auto 1rem 1rem;
    font-family: ${props => props.theme.opensans};
    font-weight: 300;
    font-size: 1.5rem;
    /* width: 200px; */
    /* text-transform: capitalize; */
  }

  a {
    margin: 1rem auto auto 1rem;
    font-family: ${props => props.theme.opensans};
    font-weight: 300;
    font-size: 1.5rem;
    color: black;
    /* width: 200px; */
    /* text-transform: capitalize; */
  }
`;

const ProjGallery = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  flex-wrap: wrap;
`;

const GalleryItem = styled.div`
  background-image: ${props => `url(${props.bg})`};
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  width: 45%;
  height: 300px;
  /* padding: 40px; */
  margin: auto auto 4rem auto;
`;

export default ({ projectName, data }) => {
  const structure = Object.keys(data.info);
  return (
    <ProjContainer>
      <ProjText>
        <h2>{data.title}</h2>
        {structure.map((d, i) => [
          <h3 key={`subheader_${d}`}>{d}</h3>,
          d === "link" ? (
            <a target="_blank" href={data.info[d]} key={`paragraph_${d}`}>
              {data.info[d]}
            </a>
          ) : d === "resume" ? (
            <a target="_blank" href={data.info[d]} key={`paragraph_${d}`}>
              Current resume
            </a>
          ) : (
            <p key={`paragraph_${d}`}>{data.info[d]}</p>
          )
        ])}
      </ProjText>
      <ProjHeadPic src={`/static/images/${projectName}/${data.headpic}`} />
      <Link href="/">
        <button>Back</button>
      </Link>
      {data.gallery ? (
        <ProjGallery>
          {data.gallery.map((d, i) => (
            <GalleryItem
              key={`gallery_${i}`}
              bg={`/static/images/${projectName}/${d}`}
            />
          ))}
        </ProjGallery>
      ) : null}
    </ProjContainer>
  );
};
