import styled from 'styled-components';

export const PageContent = styled.div`
    display: flex;
    min-height: inherit;
    max-width: inherit;
    position: relative;

    &.one-column {
        #pageHeader {
            position: sticky;
            top: 0;
            background: #fff;
            z-index: 1;
        }
        #pageHeader, #pageFooter {
            padding-right: 600px;

            @media screen and (min-width: 1600px) {
                padding-right: 800px;
            }
        }
    }
`;

export const MobilePageContent = styled.div`
    position: relative;
    flex-grow: 1;
    
    &.one-column {
        #pageHeader {
            position: sticky;
            top: 0;
            background: #fff;
            z-index: 1;
        }
    }
`;