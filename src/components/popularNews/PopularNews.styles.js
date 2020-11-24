import styled from 'styled-components';

//prettier-ignore

export const PopularNewsContainer = styled.div `
  width: 650px;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  overflow-y: scroll;
  /* overflow-x: hidden; */
`;

export const SectionTitle = styled.h5 `
  font-family: var(--font-sub-header);
  font-weight: var(--weight-highlight);
  text-align: left;
  margin-left: 2rem;
  /* margin-bottom: 5px; */
`;

export const SectionContent = styled.div `
  padding-bottom: 1.5rem;
  h1 {
    font-size: var(--size-sub-header);
    font-family: var(--font-header);
    font-weight: var(--weight-header);
  }
`;

export const SectionHeader = styled.div `
  padding-top: 1.5rem;
  padding-right: 2rem;
  display: flex;
  justify-content: space-between;

  img {
    width: 20px;
  }

  h6 {
    color: var(--orange);
    font-family: var(--font-header);
    font-weight: var(--weight-regular);
    margin-top: 0;
  }
`;

export const SectionHeaderSquare = styled.div `
  position: relative;

  p {
    position: absolute;
    bottom: 10px;
    right: -16px;
    font-family: var(--font-header);
    font-size: 0.7rem;
  }

  img {
    position: absolute;
    z-index: -1;
  }
`;

export const SectionContainer = styled.div `
  padding: 10px 0 10px 2rem;

  :nth-child(5n) {
    ${SectionContent} {
      h1 {
        font-family: var(--font-rest);
        font-weight: var(--weight-highlight);
      }
    }
  }

  :nth-child(3n) {
    background: black;

    ${SectionHeader} {
      h6 {
        color: white;
      }
    }

    ${SectionHeaderSquare} {
      p {
        color: white;
      }
    }

    ${SectionContent} {
      h1 {
        color: var(--orange);
        height: 100%;
      }

      img {
      }
    }
  }

  :nth-child(7n) {
    background: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

    ${SectionHeader} {
      h6 {
        color: white;
        text-shadow: 1px 1px var(--orange);
      }
    }

    ${SectionHeaderSquare} {
      p {
        color: white;
        text-shadow: 1px 1px var(--orange);
      }
    }
    ${SectionContent} {
      h1 {
        font-style: italic;
        color: white;
        text-shadow: 1.5px 1.5px var(--orange);
      }

      img {
        display: ${(props) => (props.url ? 'none' : 'block')};
      }
    }
  }
`;