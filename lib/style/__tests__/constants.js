import constants from '../constants';

describe('Constants', () => {
  it('contains the correct fontWeights', () => {
    const {
      light,
      normal,
      semiBold,
      bold
    } = constants.fontWeights;

    expect(light).toBe(300);
    expect(normal).toBe(400);
    expect(semiBold).toBe(600);
    expect(bold).toBe(700);
  });
});
