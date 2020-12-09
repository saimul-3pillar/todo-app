import { Button, CardHeader, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function DashboardPage() {
    const history = useHistory();
    // if()
    return (
        <Container>
            <CardHeader title="Welcome to dashboard" />
            {/* <Link to='/' >Logout</Link> */}
            <Button color="secondary" variant="contained" onClick={() => history.push('/')}>Logout</Button>
        </Container>
    );
}
export default DashboardPage;