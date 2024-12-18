import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  const [data, setData] = React.useState<any[]>([])

  async function getData() {
    const res = await axios.get("https://newsapi.org/v2/everything?q=finance&domains=thenextweb.com", {
      headers: {
        Authorization: import.meta.env.VITE_NEWS_API_KEY
      }
    })

    return res
  }

  React.useEffect(() => {
    getData()
      .then((response) => {
        const data = response.data
        setData(data)
      })
  }, [])

  return (
    <div className="p-2">
      <h3>Welcome to about aveg</h3>
      {JSON.stringify(data)}
    </div>
  )
}
