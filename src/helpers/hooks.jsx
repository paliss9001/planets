import { useState, useEffect } from "react"

export default function useWidth() {
  const [width, setWidth] = useState(document.documentElement.clientWidth)

  useEffect(() => {

    function handleResize() {
      setWidth(document.documentElement.clientWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [width])

  return width
}