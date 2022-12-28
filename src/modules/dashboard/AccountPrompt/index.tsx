import React from 'react';
import { Container } from './styles';

export const AccountPrompt = () => {
  return (
    <Container>
      <p className="welcome__text">Welcome {`Harold`},</p>
      <div className="prompt__container">
        <div className="prompt__left">
          <p className="prompt__title">Complete your account setup</p>
          <p className="prompt__subtitle">
            You’re close to finishing your account setup. Add a valid means of identification <span>Go to profile</span>
          </p>
        </div>
        <div className="prompt__right">
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  );
};
