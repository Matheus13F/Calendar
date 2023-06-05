import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &.none {
    display: none;
  }
`;

export const ContainerModal = styled.div`
  width: min(90vw, 600px);
  height: auto;

  border-radius: 8px;
  background: white;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 8rem;

  > header {
    padding: 10px 20px;
    border-bottom: 1px solid #3174b0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;

    > h1 {
      font-weight: 400;
      font-size: 1.4rem;
    }

    > svg {
      cursor: pointer;

      &:hover {
        background-color: #dbdbdb;
        border-radius: 50%;
      }
    }
  }

  > main {
    padding: 10px 20px;

    input,
    textarea {
      width: 100%;
      padding: 0.8rem 3rem 0.8rem 1rem;
      margin-bottom: 1rem;
      font-weight: 400;
      text-overflow: Ellipsis;
      border: 0;

      color: #555;
      border-radius: 0.5rem;
      background-color: #e5ebf1;

      &:focus {
        border: 1px solid #3174b0;
        border-radius: 0.5rem;
      }
    }

    > textarea {
      max-width: 100%;
      min-width: 100%;
      max-height: 160px;
      min-height: 150px;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;

      > textarea {
        max-width: 100%;
        min-width: 100%;
        max-height: 80px;
        min-height: 100px;
      }

      > input {
        &.cursor {
          cursor: pointer;
        }
      }

      > .buttons {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        > div {
          display: flex;
          gap: 10px;
        }

        > span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }
    }
  }
`;
