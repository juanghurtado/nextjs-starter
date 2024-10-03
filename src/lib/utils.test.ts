import { cn } from './utils';

describe('Utils', () => {
  describe('cn()', () => {
    it('should merge classes', () => {
      const result = cn(['a', 'b']);

      expect(result).toBe('a b');
    });
  });
});
