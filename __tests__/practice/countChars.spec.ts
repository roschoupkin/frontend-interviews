import { counter } from '@practice/countChars';

describe('Count chars into string', () => {
  it('Should return a new string with counted characters', () => {
    expect(counter('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');
  });
  it('Should return error', () => {
    expect(() => counter('AAAABBBCCXYZDDDDEEEfffFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toThrow('Invalid string');
  });
});
