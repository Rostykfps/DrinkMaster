import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 40px;

  @media only screen and (min-width: 768px) {
    column-gap: 32px;
    @media only screen and (min-width: 1440px) {
      column-gap: 40px;
      width: 833px;
    }
  }
`;

export const ImageThumb = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
  background-size: cover;
  background-image: ${({ uri }) => (uri ? `url(${uri})` : 'none')};
  @media only screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    @media only screen and (min-width: 1440px) {
      width: 400px;
      height: 400px;
    }
  }
`;

export const DivAddImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
`;

export const DivTranslucent = styled.div`
  position: relative;
  top: 40%;
  display: flex;
  gap: 170px;
  align-items: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
`;

export const LabelTranslucent = styled.label`
  width: 70px;
  text-align: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
  cursor: pointer;
  :hover {
    text-shadow:
      1px 1px 2px #161f37,
      0 0 1em #bce6d2,
      0 0 0.2em #4070cd;
  }
`;

export const Label = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  background-color: #f3f3f3;
  color: #161f37;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #161f37;
    color: #f3f3f3;
    border: 1px solid #f3f3f350;
  }
  &:active {
    color: #161f37;
    border: 2px solid #4070cd50;
    background-color: #f3f3f3;
  }
`;
export const HiddenInput = styled.input`
  display: none;
`;

export const SpanAddImage = styled.span`
  font-size: 16px;
  font-weight: medium;
  line-height: 1.25;
  color: #f3f3f3;
`;

export const DivDesription = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 31px;
  letter-spacing: -0.02em;
  width: 335px;
  @media only screen and (min-width: 768px) {
    width: 352px;
    @media only screen and (min-width: 1440px) {
      width: 393px;
      gap: 40px;
    }
  }
`;

export const DivRow = styled.div``;

export const Input = styled.input`
  width: 100%;
  background-color: inherit;
  font-size: 14px;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  :hover {
    color: red;
    ::-webkit-input-placeholder {
      color: #f3f3f380;
    }
  }
`;
export const ErrorText = styled.div`
  display: flex;
  height: 14px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  border-bottom: 1px solid #f3f3f350;
  border-bottom: ${({ errors, value }) =>
    value && errors
      ? '1px solid #3cbc8150'
      : errors
      ? '1px solid #da141450'
      : '1px solid #f3f3f350'};
  @media only screen and (min-width: 768px) {
    height: 18px;
    font-size: 14px;
  }
`;
export const ErrorIconCategory = styled.span`
  position: relative;
  bottom: 22px;
  left: 105px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 18px;
  height: 18px;
  color: '#da1414';
  border: 2px solid #da1414;
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    left: 100px;
    width: 20px;
    height: 20px;
    @media only screen and (min-width: 1440px) {
      left: 140px;
    }
  }
`;

export const DivSelect = styled.div`
  background-color: inherit;
  color: #f3f3f3;
`;

export const DivFlexSelect = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpanSelect = styled.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DivAlcoholic = styled.div`
  display: flex;
  gap: 14px;
  color: #f3f3f3;
  font-size: 14px;
  letter-spacing: -0.02em;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const LabelAlcoholic = styled.label`
  opacity: ${({ isAlcoholic }) => (isAlcoholic === 'Alcoholic' ? '1' : '0.5')};
  cursor: pointer;
`;
export const LabelNonAlcoholic = styled.label`
  opacity: ${({ isAlcoholic }) =>
    isAlcoholic === 'Non alcoholic' ? '1' : '0.5'};
  cursor: pointer;
`;

export const RadioInput = styled.input`
  :checked {
    box-sizing: content-box;
    width: 10px;
    height: 10px;
    background-color: #f3f3f3;
    border: 3px solid black;
    outline: 1.3px ridge #f3f3f3;
    @media only screen and (min-width: 768px) {
      width: 12px;
      height: 12px;
      border: 3px solid black;
      outline: 2px ridge #f3f3f3;
    }
  }
  appearance: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1.3px solid rgba(243, 243, 243, 0.5);
  margin-right: 4px;
  margin-left: 0;
  position: relative;
  top: 3px;
  @media only screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
