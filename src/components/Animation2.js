import { useSpring, animated } from '@react-spring/web'

export default function Animation2() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  return <animated.div style={props}>Hello World</animated.div>
}