import { useSpring, animated, to } from 'react-spring';

export default function ETLAnimation() {

    const [springs, api] = useSpring(() => ({
        from: { x: 0, backgroundColor: 'red', rotate: 0, scale: 1 },
    }));

    const handleClick = () => {
        api.start({
            from: {
                backgroundColor: 'red',
                x: -100,
                scale: 1,
            },
            to: {
                backgroundColor: 'blue',
                rotate: springs.x.to((x) => x / 1),
                scale: 0.8,
                x: 150,
            },
            onRest: () => {
                api.start({
                  from: {
                    backgroundColor: 'green',
                    x: 150,
                    scale: 0.8,
                  },
                  to: {
                    backgroundColor: 'yellow', // <-- added missing comma here
                    rotate: springs.x.to((x) => x / 1),
                    x: 250,
                    scale: 0.6,
                  },
                  onRest: () => {
                    api.start({
                        from: {
                            backgroundColor: 'yellow',
                            x: 300,
                            scale: 0.6,
                        },
                        to: {
                            backgroundColor: 'purple',
                            rotate: springs.x.to((x) => x / 1),
                            x: 450,
                            scale: 0.4,
                        }
                    })
                  }
                }); // <-- added missing closing curly brace
            }
        })
    }

    return (
        <>
            <button className="rounded-lg bg-indigo-400 hover:bg-indigo-200 p-3" onClick={handleClick}>
                ETL loop
            </button>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <div style={{ position: 'relative' }}>
                        <animated.div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 80,
                            height: 80,
                            background: '#ff6d6d',
                            borderRadius: 8,
                            ...springs,
                        }}
                        />
                        <animated.div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 120,
                            width: 80,
                            height: 80,
                            background: '#ff6d6d',
                            borderRadius: 8,
                            ...springs,
                        }}
                        />
                        <animated.div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 240,
                            width: 80,
                            height: 80,
                            background: '#ff6d6d',
                            borderRadius: 8,
                            ...springs,
                        }}
                        />
                    </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '150px' }}>
                    <div className="h-[80px] w-[100px] bg-blue-400 text-center z-0">
                        <img src="./img/Api.png" alt="Api" />
                        API
                    </div>
                    <div className="h-[80px] w-[100px] bg-blue-400 text-center z-0">
                        <img src="./img/database.jpg" alt="Database" />
                        Data Warehouse
                    </div>
                    <div className="h-[80px] w-[160px] bg-blue-400 text-center z-0" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <img src="./img/reports.jpg" alt="Reports" className="h-inherit w-inherit" />
                        Reports
                    </div>
                </div>
            </div>
        </>
      );
  }