import styled from 'styled-components';

export const PageContentCol1 = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: inherit;
    height: 100vh;
    overflow: auto;

    > *:nth-child(1),
    > *:nth-child(2) {
        margin-left: 60px;
    }
`;