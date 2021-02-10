import { Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CONTROL_TYPES = {
    INPUT: 'input',
    DROPDOWN: 'dropdown'
}

const options = [
    { key: 'mr', text: 'Mr.', value: 'mr' },
    { key: 'ms', text: 'Ms.', value: 'ms' }
]

function FormName(props) {

    const nameFormObject = {
        last: null,
        first: null,
        middle: null,
        suffix: null
    };

    const onChangeHandler = (controlType, key, event) => {
        switch (controlType) {
            case CONTROL_TYPES.INPUT:
                nameFormObject[key] = event.target.value;
                break;
            case CONTROL_TYPES.DROPDOWN:
                nameFormObject[key] = event;
                break;
            default:
                break;
        }

        props.onFormUpdate(props.formName, { ...nameFormObject });
    };

    return (
        <>
            <h1>Name</h1>
            <Form>
                <Form.Field inline>
                    <label>Last</label>
                    <Input onChange={e => onChangeHandler(CONTROL_TYPES.INPUT, 'last', e)} />
                </Form.Field>
                <Form.Field inline>
                    <label>First</label>
                    <Input onChange={e => onChangeHandler(CONTROL_TYPES.INPUT, 'first', e)} />
                </Form.Field>
                <Form.Field inline>
                    <label>Middle</label>
                    <Input onChange={e => onChangeHandler(CONTROL_TYPES.INPUT, 'middle', e)} />
                </Form.Field>
                <Form.Field inline>
                    <Form.Select
                        onChange={(e, { value }) => onChangeHandler(CONTROL_TYPES.DROPDOWN, 'suffix', value)}
                        inline
                        label='Suffix'
                        options={options}
                    />
                </Form.Field>
            </Form>
        </>
    )
}

FormName.propTypes = {
    formName: PropTypes.string.isRequired,
    onFormUpdate: PropTypes.func.isRequired
}

export default FormName;