import React from 'react';
import { Container } from './styles';

export const Subscribe = () => {
  return (
    <Container>
      <div className="subscribe__container">
        <p className="subscribe__title">
          Sign up to our newsletter and don’t miss any news, press release, and updates
        </p>

        <div className="app__subscribe">
          <input type="text" placeholder="Enter Email Address" />
          <button>Subscribe</button>
        </div>

        <p className="subscribe__subtitle">You can also connect with us in our Telegram community</p>

        <div className="app__connect">
          <p>
            <img
              src="https://res.cloudinary.com/gigx-technologies/image/upload/v1653434722/xpad-assets/telegram_vqt8wq.svg"
              alt=""
            />
            GIGX Community
          </p>
        </div>
      </div>
    </Container>
  );
};
