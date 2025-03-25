import React from 'react';
import { styled } from 'styled-components';

const ResultText = styled.p`
  font-size: 18px;
  color: #000;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const ResultsContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #e0e0e0; /* Alterado para um tom mais escuro */
  border-radius: 5px;
`;

type ResultsProps = {
  results: { add: number; subtract: number; multiply: number; divide: string | number };
};



const Results: React.FC<ResultsProps> = ({ results }) => {
  const formatForDisplay = (num: number): string => {
    return num.toLocaleString('en-US', { 
      useGrouping: false, 
      maximumFractionDigits: 2 
    });
  };

  return (
    <ResultsContainer>
      <ResultText>Adição: {formatForDisplay(results.add)}</ResultText>
      <ResultText>Subtração: {formatForDisplay(results.subtract)}</ResultText>
      <ResultText>Multiplicação: {formatForDisplay(results.multiply)}</ResultText>
      <ResultText>Divisão: {formatForDisplay(results.divide)}</ResultText>
    </ResultsContainer>
  );
};

export default Results;
