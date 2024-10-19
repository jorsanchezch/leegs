import React, { useState } from 'react';
import Layout from 'components/layout';
import League from 'models/league';
import { LeagueForm } from 'components/forms/league';

const LeagueCreationForm: React.FC = () => {
  const [league, setLeague] = useState<League>({
    name: '',
    description: '',
    participants: [],
    sport: 0,
    owner: 0,
    date: null,
    is_recurrent: false,
    is_active: true,
  });


  return (
    <Layout>
      <LeagueForm />
    </Layout>
  );
};

export default LeagueCreationForm;