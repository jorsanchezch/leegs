import * as React from 'react';
import Card from '../components/card';
import Layout from '../components/layout'
import Calendar from '../components/calendar';
import { useState } from 'react';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
}

interface HomeProps {
    loggedIn: boolean;
    users: User[];
}

const Home: React.FC<HomeProps> = ({ loggedIn, users }) => {
    const leagues = [
        {
          id: 1,
          category: "football",
          names: ["soccer town", "santa fe FC"]
        },
        {
          id: 2,
          category: "basketball",
          names: ["olimpico"]
        },
        {
          id: 3,
          category: "super smash brothers",
          names: ["battlezone"]
        },
        {
          id: 4,
          category: "apex",
          names: ["battlezone"]
        },
        {
          id: 5,
          category: "rocket",
          names: ["battlezone"]
        },
        {
          id: 6,
          category: "volley",
          names: ["battlezone"]
        },
      ]

      const leagueRows = leagues.map((league) => {
        return (
          <Link 
            key={league.category} 
            href={`/league/${encodeURIComponent(league.id)}`}
          >
            <Card
              key={league.category}
              title={league.category}
              content={league.names.join(', ')}
              image="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
            /> 
          </Link>
        )
      });

      const [value, onChange] = useState(new Date());

    return (
        <Layout>
            <h1 className="text-primary">Welcome to <br/> the Home Page</h1>
            <div className='mx-auto my-3 md:mx-0'>
              {/* <Calendar value={value}/> */}
            </div>

            {!loggedIn ? (
              <div className="grid-cols-auto justify-center" style={{ display: 'grid', gap: '1.5rem' }}>
                  {leagueRows}
              </div>
            ) : (
                <p>Please log in to view the users.</p>
            )}
        </Layout>
    );
};

export default Home;