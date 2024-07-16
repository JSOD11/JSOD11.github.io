import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterEffect = (props) => {

    const { strings, delay } = props;

  return (
    <div className="typewriter">
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          deleteSpeed: 15,
          delay: delay
        }}
      />
    </div>
  );
};

export default TypewriterEffect;
