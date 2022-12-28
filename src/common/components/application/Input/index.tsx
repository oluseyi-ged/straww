import React, { FC, useState } from 'react';
import { Subscribe, Footer, Download } from '@modules/application';
import { Container } from './styles';

interface Props {
  type?: string;
  placeholder?: string;
  icon?: string;
  onChange?: (e: any) => void;
  value?: any | string | number;
  style?: any;
  suffix?: string;
  prefix?: string;
  max?: number;
  title?: string;
  onFocus?(): void;
  autoFocus?: boolean;
  disabled?: boolean;
  label?: any;
  //   passwordHint?: boolean;
}

const Input: FC<Props> = ({
  type,
  placeholder,
  icon,
  onChange,
  value,
  style,
  suffix,
  prefix,
  max,
  title,
  onFocus,
  autoFocus,
  disabled,
  label
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <Container>
      <p className="input__label">{label}</p>
      <div className="input__container" style={style}>
        {type === 'password' ? (
          <input type={passwordShown ? 'text' : 'password'} placeholder={placeholder} autoFocus={autoFocus} />
        ) : (
          <input type={type} placeholder={placeholder} autoFocus={autoFocus} />
        )}
        {type === 'password' ? <p onClick={togglePassword}>{passwordShown ? 'hide' : 'show'}</p> : null}
      </div>
    </Container>
  );
};

export default Input;
