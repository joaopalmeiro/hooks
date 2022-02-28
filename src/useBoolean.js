import { useState, useCallback, useMemo } from 'react';

const useBoolean = (initial) => {
    const [value, setValue] = useState(initial);

    const toggle = useCallback(() => setValue((v) => !v), []);
    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);

    const actions = useMemo(
        () => ({ setFalse, setTrue, setValue, toggle }),
        [setFalse, setTrue, toggle]
    );

    return [value, actions];
};

export default useBoolean;
