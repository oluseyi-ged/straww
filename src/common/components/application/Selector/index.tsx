import React, { FC, useState } from 'react';
import { Container } from './styles';

interface Props {}

const Selector: FC<Props> = ({}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [itemsList, setItemsList] = useState([
    {
      value: 'BTC',
      name: 'Bitcoin'
    },
    {
      value: 'CFX',
      name: 'Conflux'
    },
    {
      value: 'USDT',
      name: 'USDT BEP-20'
    },
    {
      value: 'BNB',
      name: 'Binance'
    }
  ]);

  const [selectedItemIndex, setSelectedItemIndex] = useState<any | null>(null);

  return (
    <Container>
      <div className="custom__dropdown">
        <div
          className={'custom__dropdown__selection ' + (isDropdownVisible ? 'visible' : '')}
          onClick={(e) => {
            setIsDropdownVisible(!isDropdownVisible);
          }}
        >
          {selectedItemIndex !== null ? itemsList[selectedItemIndex].name : itemsList[0].name}
        </div>
        {isDropdownVisible ? (
          <div className="item__holder">
            {itemsList.map((item, index) => (
              <div
                className="dropdown__item"
                key={item.value}
                onClick={(e) => {
                  setSelectedItemIndex(index);
                  setIsDropdownVisible(false);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default Selector;
