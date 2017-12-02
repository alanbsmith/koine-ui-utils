import padScale from '../padScale';

describe('padScale', () => {
  it('should return the correct value', () => {
    const scaledValue = padScale(3);
    expect(scaledValue).toBe(24);
  });
});
