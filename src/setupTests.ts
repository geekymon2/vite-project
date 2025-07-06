import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';
import { expect, vi } from 'vitest';

expect.extend(matchers);
vi.mock('react-router-dom', async () => {
    return {
        ...(await vi.importActual('react-router-dom')),
        useNavigate: () => vi.fn(),
    };
});
