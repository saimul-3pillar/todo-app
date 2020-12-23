import { Button, CardHeader, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function DashboardPage() {
    const history = useHistory();
    return (
        <Container>
            <CardHeader title="Welcome to dashboard" />
            <Button data-testid="btn" color="secondary" variant="contained" onClick={() => history.push('/')}>Logout</Button>
        </Container>
    );
}
export default DashboardPage;