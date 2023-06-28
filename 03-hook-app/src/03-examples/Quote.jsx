import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ author, quote }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width});
    // console.log(pRef.current.getBoundingClientRect);
  }, [quote])

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p className="mb-1" ref={ pRef }>{ quote }</p>
        <footer className="blockquote-footer">{ author }</footer>
      </blockquote>
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
