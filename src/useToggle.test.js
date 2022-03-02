import { act, renderHook } from '@testing-library/react-hooks';

import useToggle from './useToggle';

describe('useToggle hook', () => {
    it('should toggle', () => {
        expect.assertions(3);

        const { result } = renderHook(() => useToggle());

        expect(result.current[0]).toBe(false);

        act(() => result.current[1]());
        expect(result.current[0]).toBe(true);

        act(() => result.current[1]());
        expect(result.current[0]).toBe(false);
    });

    it('should toggle if the initial value is not the default one', () => {
        expect.assertions(3);

        const { result } = renderHook(() => useToggle(true));

        expect(result.current[0]).toBe(true);

        act(() => result.current[1]());
        expect(result.current[0]).toBe(false);

        act(() => result.current[1]());
        expect(result.current[0]).toBe(true);
    });

    it('should keep toggle reference equality after value change', () => {
        expect.assertions(2);

        const { result } = renderHook(() => useToggle());
        const [, originalToggle] = result.current;

        expect(result.current[1]).toBe(originalToggle);

        act(() => originalToggle());

        expect(originalToggle).toBe(result.current[1]);
    });
});
