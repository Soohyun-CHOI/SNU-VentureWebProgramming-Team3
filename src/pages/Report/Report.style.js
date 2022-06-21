import styled from "@emotion/styled";
import { Paper, Select } from "@mui/material";

export const ReportForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
`;

export const ReportWrapper = styled(Paper)`
    width: 600px;
    left: calc(50vw - 300px);
    top: calc(50vh - 200px);
    padding: 2rem;
    box-sizing: border-box;
`;
