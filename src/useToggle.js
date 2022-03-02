// Source:
// - https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/
// - https://usehooks.com/useToggle/

import { useCallback, useState } from 'react';

const useToggle = (initial = false) => {
    const [value, setValue] = useState(initial);

    // useCallback is used in order to preserve the reference to the setter function.
    // const toggle = () => setValue((v) => !v);
    const toggle = useCallback(() => setValue((v) => !v), []);

    return [value, toggle];
};

export default useToggle;
