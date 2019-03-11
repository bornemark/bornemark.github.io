import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchUrl = async () => {
    try {
      const response = await fetch(url)
      const json = await response.json()

      setData(json)
    } catch (e) {
      // Log error?
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  return [data, loading]
}
