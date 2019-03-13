import { useState, useEffect } from 'react'
import { debounce } from 'lodash'

export default function useFetch(url, method = 'GET', body = null, deps = []) {
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

  const debouncedFetch = debounce(fetchUrl, 1000)

  useEffect(() => {
    debouncedFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return [data, fetching]
}
