import { useState, useEffect } from 'react'

const defaultOptions = {
  headers: { 'Content-Type': 'application/json' },
}

export default function useFetch({ url, options: userOptions }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const fullUrl = `${process.env.REACT_APP_API_URL}/${url}`
        userOptions.body = JSON.stringify(userOptions.body)
        const options = { ...defaultOptions, ...userOptions }
        const response = await fetch(fullUrl, options)

        if (response.ok) {
          const json = await response.json()
          setData(json)
        }
      } catch (e) {
        // Log error?
      }

      setLoading(false)
    })()
  }, [url, userOptions])

  return [data, loading]
}
