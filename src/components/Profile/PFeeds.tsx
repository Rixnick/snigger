import { useQuery } from '@apollo/client';
import React from 'react';
import { MY_TIMELINE } from '../../graphql/Snigger';
import MPost from './Post';
import MStory from './Story';

type Props = {};

const PFeeds: React.FC<Props> = () => {
  const { data, loading, error} = useQuery(MY_TIMELINE, {fetchPolicy: 'network-only'});

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ... Ops!</p>

  // console.log('scream timeline: ', data)


  return (
    <div className='profile_feeds'>
      <div className="profile__feed__wrapper">
        <MStory />
        {
          data &&
          data.mytimeline.map((snigger) => (
            <MPost snigger={snigger} key={ snigger.id }/>
          ))
        }
      </div>
    </div>
  );
};

export default PFeeds;
