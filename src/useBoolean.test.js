import { act, renderHook } from '@testing-library/react-hooks';

import useBoolean from './useBoolean';

describe('useBoolean hook', () => {
    // https://jestjs.io/docs/api#testname-fn-timeout (`test()` or `it()`)
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
    it('should set true', () => {
        expect.assertions(2);

        const { result } = renderHook(() => useBoolean(false));

        expect(result.current[0]).toBe(false);
        act(() => result.current[1].setTrue());
        expect(result.current[0]).toBe(true);
    });

    it('should set false', () => {
        expect.assertions(2);

        const { result } = renderHook(() => useBoolean(true));

        expect(result.current[0]).toBe(true);
        act(() => result.current[1].setFalse());
        expect(result.current[0]).toBe(false);
    });

    it('should toggle', () => {
        expect.assertions(3);

        const { result } = renderHook(() => useBoolean(true));

        expect(result.current[0]).toBe(true);

        act(() => result.current[1].toggle());
        expect(result.current[0]).toBe(false);

        act(() => result.current[1].toggle());
        expect(result.current[0]).toBe(true);
    });

    it('should keep actions reference equality after value change', () => {
        expect.assertions(8);

        const { result } = renderHook(() => useBoolean(true));
        const [, originalActionsReference] = result.current;
        const { setFalse, setTrue, toggle } = originalActionsReference;

        expect(result.current[1]).toBe(originalActionsReference);
        expect(result.current[1].setFalse).toBe(setFalse);
        expect(result.current[1].setTrue).toBe(setTrue);
        expect(result.current[1].toggle).toBe(toggle);

        act(() => originalActionsReference.setFalse());

        expect(originalActionsReference).toBe(result.current[1]);
        expect(setFalse).toBe(result.current[1].setFalse);
        expect(setTrue).toBe(result.current[1].setTrue);
        expect(toggle).toBe(result.current[1].toggle);
    });
});
