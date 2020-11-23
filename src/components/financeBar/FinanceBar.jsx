import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchForex } from '../../redux/actions/chart';

import {
  FinanceBarContainer,
  Ticker,
  TickerStyles,
  TickerPercentage,
} from './FinanceBar.styles';

const FinanceBar = () => {
  const { forex } = useSelector((chart) => chart.chart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchForex());
  }, [dispatch]);

  return (
    <FinanceBarContainer>
      {forex.map((ticker) => {
        return (
          <Ticker key={ticker.symbol}>
            <TickerStyles>
              {ticker.name ? ticker.name : ticker.symbol}
            </TickerStyles>
            <TickerStyles light>{ticker.price.toFixed(2)}</TickerStyles>
            {ticker.changesPercentage > 0 ? (
              <TickerPercentage>{ticker.changesPercentage}%</TickerPercentage>
            ) : (
              <TickerPercentage style={{ color: '#C60808' }}>
                {ticker.changesPercentage}%
              </TickerPercentage>
            )}
          </Ticker>
        );
      })}
    </FinanceBarContainer> //
  );
};

export default FinanceBar;
