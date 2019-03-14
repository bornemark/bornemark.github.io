import { useState, useEffect } from 'react'

export default function useFetch(url, method = 'GET', body = null, deps) {
  const [fetching, setFetching] = useState(true)
  const [data, setData] = useState(null)

  const fetchUrl = async () => {
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        ...(body && { body: JSON.stringify(body) }),
      }
      const response = await fetch(url, options)
      const json = await response.json()

      setData(json)
    } catch (e) {
      // Log error?
    } finally {
      setFetching(false)
    }
  }

  useEffect(() => {
    fetchUrl()
  }, deps)

  return [data, fetching]
}
