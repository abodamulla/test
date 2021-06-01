import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels(props) {
    const [state, setState] = useState(false);

    const handleChange = () => {
        props.turn ? setState(true) : setState(false);
        
    };

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                    />
                }
                label= {state.checkedA ? 'Turn OFF Filter' : 'Turn ON Filter'}
                
            />
        </FormGroup>
    );
}
