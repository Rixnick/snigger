import { useQuery } from '@apollo/client'
import React from 'react'
import { MY_TIMELINE } from '../../../graphql/Snigger'

type Props = {}

const SniggerCount: React.FC<Props> = () => {
  const { data, loading, error } = useQuery(MY_TIMELINE);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  return (
    <div className="user__post__count">
      <h3>{ data.mytimeline.length }</h3>
      <p>Sniggers</p>
    </div>
  )
}

export default SniggerCount;