import { Dummy } from '../src';

describe('dummy import test', () => {
  let thisDummy

  beforeAll(() => {
    thisDummy = new Dummy('hello world')
  })

  it('hello world', () => {
    expect(thisDummy.getMsg()).toEqual('hello world');
  });
});
