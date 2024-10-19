import { useRouter } from 'next/router';
import Layout from '../../components/layout';

const LeaguePage = () => {
    const router = useRouter();
    const { id } = router.query;

    // TODO: Fetch league data and participant list based on the id

    return (
        <Layout>
            <h1 className='text-primary'>League {id}</h1>
            {/* Render league information and participant list here */}
        </Layout>
    );
};

export default LeaguePage;