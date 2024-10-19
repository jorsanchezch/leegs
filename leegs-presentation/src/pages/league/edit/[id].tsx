import { useRouter } from 'next/router';

const LeaguePage = () => {
    const router = useRouter();
    const { id } = router.query;

    // TODO: Fetch league data and participant list based on the id

    return (
        <>
            <h1 className='text-primary'>League {id}</h1>
            {/* Render league information and participant list here */}
        </>
    );
};

export default LeaguePage;