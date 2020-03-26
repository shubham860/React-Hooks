import React, {useState} from 'react';

const NewCustomHook = (labels,defaultState,options) => {
    const [state, setState] = useState(defaultState);
    const Dropdown = () => {
        return <div>
                {labels}
            <select value={state} onChange={ e => setState(e.target.value) }>
                <option>All</option>
                {options.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    }
    return [state,Dropdown,setState];
}

export default NewCustomHook;
