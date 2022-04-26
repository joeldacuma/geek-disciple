import styled, { device, themeGet } from "@theme/utils";

export const PageBreadcrumbWrap = styled.div`
    background-color: #fafafa;
    padding: 60px 0;
    ${device.medium} {
        padding: 80px 0;
    }
`;

export const PageTitleContent = styled.div`
    & .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0;
        margin-bottom: 1rem;
        list-style: none;
        justify-content: center;
        ol {
            list-style: none;
            display: flex;
            align-items: center;
            color: #ffff;

            padding: 10px 20px;
            background-color: #41273c;
            border-radius: 15px;

            & .breadcrumb__separator {
                margin-right: 10px;
                margin-left: 10px;
            }
            .breadcrumb__link {
                color: #ffff;
                font-size: 15px;
                font-weight: 500;
                margin-bottom: 8px;
                &.breadcrumb__link__active {
                    color: #ffff;
                }
            }
        }
    }
`;
