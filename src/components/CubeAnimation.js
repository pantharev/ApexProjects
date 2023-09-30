import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function CubeAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);

  const bigCubeProps1 = useSpring({
    from: { transform: 'scale(1)', backgroundColor: 'blue' },
    to: { transform: isAnimating ? 'scale(0.5)' : 'scale(1)', backgroundColor: 'blue' },
  });

  const bigCubeProps2 = useSpring({
    from: { transform: 'scale(1)', backgroundColor: 'yellow' },
    to: { transform: isAnimating ? 'scale(0.5)' : 'scale(1)', backgroundColor: 'yellow' },
  });

  const cubeProps = useSpring({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: async (next) => {
      await next({ transform: 'translate3d(-50px, 0, 0)' });
      await next({ transform: 'translate3d(-100px, 0, 0)' });
      await next({ transform: 'translate3d(-150px, 0, 0)' });
      await next({ transform: 'translate3d(-200px, 0, 0)' });
      await next({ transform: 'translate3d(-250px, 0, 0)' });
      await next({ transform: 'translate3d(-300px, 0, 0)' });
      await next({ transform: 'translate3d(-350px, 0, 0)' });
      await next({ transform: 'translate3d(-400px, 0, 0)' });
      await next({ transform: 'translate3d(-450px, 0, 0)' });
      await next({ transform: 'translate3d(-500px, 0, 0)' });
    },
    config: { duration: 1000 },
    reset: isAnimating,
  });

  return (
    <div>
      <button onClick={() => setIsAnimating(!isAnimating)}>Animate</button>
      <animated.div style={bigCubeProps1}>
        <animated.div style={bigCubeProps2}>
          <div style={{ display: 'flex' }}>
            <animated.div style={cubeProps}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'red',
                  margin: '10px',
                }}
              ></div>
            </animated.div>
            <animated.div style={cubeProps}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'green',
                  margin: '10px',
                }}
              ></div>
            </animated.div>
            <animated.div style={cubeProps}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'blue',
                  margin: '10px',
                }}
              ></div>
            </animated.div>
          </div>
        </animated.div>
      </animated.div>
    </div>
  );
}