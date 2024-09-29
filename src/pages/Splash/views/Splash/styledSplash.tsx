import styled from '@emotion/styled';

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 38px;
  margin-left: -92px;
  width: fit-content;
  height: 100%;
  gap: 24px;
  & > span {
    color: var(--green-60);
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    line-height: 38px;
  }
  @media (max-width: 1440px) {
    margin-left: -79px;
  }
  @media (max-width: 1016px) {
    margin-left: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div<{ empty: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.empty ? 'center' : 'stretch')};
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 30px;
`;
