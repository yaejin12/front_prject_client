import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {};

S.Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexCenterColumn}

  @media screen and (max-width: 300px) {
    .tag {
      color: #000;
    }
  }
`;

S.ImageWrapper = styled.div`
  flex: 0.7;
  ${flexCenter}
`;

S.ButtonWrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 100px 0;
`;

export default S;
