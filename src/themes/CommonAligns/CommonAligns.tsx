import styled from "styled-components";
import { JSX } from "react";

type StyledElement = keyof JSX.IntrinsicElements;

export const RowStart = (element: StyledElement) => styled(element)`
 display: flex;
 justify-content: center;
 align-items: flex-start;
`;

export const RowAround = (element: StyledElement) => styled(element)`
 display: flex;
 justify-content: space-around;
 align-items: center;
`;

export const RowBetween = (element: StyledElement) => styled(element)`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

export const RowBetweenStart = (element: StyledElement) => styled(element)`
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
`;

export const RowEnd = (element: StyledElement) => styled(element)`
 display: flex;
 justify-content: flex-end;
 align-items: center;
`;

export const ColumnStart = (element: StyledElement) => styled(element)`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
`;

export const ColumnAround = (element: StyledElement) => styled(element)`
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
`;

export const ColumnBetween = (element: StyledElement) => styled(element)`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
`;

export const ColumnBetweenStart = (element: StyledElement) => styled(element)`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: flex-start;
`;

export const ColumnEnd = (element: StyledElement) => styled(element)`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
`;
