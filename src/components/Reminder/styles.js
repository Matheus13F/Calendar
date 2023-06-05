import styled from "styled-components";
import { MediaQueries } from "../../constants/MediaSettings";

export const ReminderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: #3174b0;
  padding: 3px 3px 3px 5px;
  border-radius: 8px;
  color: white;

  @media ${MediaQueries.XLARGE}, ${MediaQueries.LARGE}, ${MediaQueries.MEDIUM} {
    font-size: 14px;
    text-overflow: ellipsis;
  }

  @media ${MediaQueries.XSMALL}, ${MediaQueries.SMALL} {
    padding: 3px 20px 20px 5px;

    > span {
      display: none;
    }
  }
`;
