import { useEffect, useState } from "react"

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const handler = setTimeout(() => {
      setDebouncedValue(value)
      setLoading(false)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  console.log(loading)
  return [debouncedValue, loading]
}

export default useDebounce
