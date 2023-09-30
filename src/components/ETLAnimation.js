import { useSpring, animated, to } from 'react-spring';

export default function ETLAnimation() {

    const [springs, api] = useSpring(() => ({
        from: { x: 0, backgroundColor: 'red', rotate: 0 },
    }));

    const handleClick = () => {
        api.start({
            from: {
                backgroundColor: 'red',
                x: 0,
            },
            to: {
                backgroundColor: 'blue',
                rotate: springs.x.to((x) => x / 1),
                x: 100,
            },
            onRest: () => {
                api.start({
                  from: {
                    backgroundColor: 'green',
                    x: 100,
                  },
                  to: {
                    backgroundColor: 'yellow', // <-- added missing comma here
                    rotate: springs.x.to((x) => x / 1),
                    x: 200,
                  },
                  onRest: () => {
                    api.start({
                        from: {
                            backgroundColor: 'yellow',
                            x: 200,
                        },
                        to: {
                            backgroundColor: 'purple',
                            rotate: springs.x.to((x) => x / 1),
                            x: 300,
                        }
                    })
                  }
                }); // <-- added missing closing curly brace
            }
        })
    }

    return (
        <>
            <button className="rounded-lg bg-indigo-400 hover:bg-indigo-200 p-3" onClick={handleClick}>ETL loop</button>
            <div className="flex justify-center">
                <div className="h-[80px] w-[100px] bg-blue-400 text-center z-0">API</div>
                <div className="flex gap-x-5">
                    <animated.div
                        style={{
                        width: 80,
                        height: 80,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...springs
                        }}
                    />
                    <animated.div
                        style={{
                        width: 80,
                        height: 80,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...springs
                        }}
                    />
                    <animated.div
                        style={{
                        width: 80,
                        height: 80,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...springs
                        }}
                    />
                </div>
                <div className="h-[80px] w-[100px] bg-blue-400 text-center z-0">Data Warehouse</div>
                <div className="ml-[100px]"></div>
                <div className="h-[80px] w-[100px] bg-blue-400 text-center z-0">Reports</div>
            </div>
        </>
    )
  }