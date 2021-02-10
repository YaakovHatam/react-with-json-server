import { Container, Grid } from 'semantic-ui-react';
import FormAddress from './form-address';
import FormMailingAddres from './form-mailing-address';
import FormOtherInfo from './form-other-info';
import FormName from './form-name';

function UserForm() {

    const formObject = {
        nameFormObject: null,
        otherInfoFormObject: null
    }

    const onChildFormUpdate = (subFormName, subFormObject) => formObject[subFormName] = subFormObject;

    const saveForm = () => fetch('http://localhost:3000/users', {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        method: 'POST',
        body: JSON.stringify(formObject)
    });

    return (<Container>
        <Grid celled='internally'>
            <Grid.Row>
                <Grid.Column width={6}>
                    <FormName formName='nameFormObject' onFormUpdate={onChildFormUpdate} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <FormOtherInfo />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={6}>
                    <FormMailingAddres />
                </Grid.Column>
                <Grid.Column width={6}>
                    <FormAddress />
                    <button onClick={saveForm}>Log</button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>);
}
export default UserForm;
