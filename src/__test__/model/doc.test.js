import {Doc} from '../../model/doc';

test('two plus two is four', () => {
  let doc = new Doc({filename: '../files/test.md'});
  expect(doc.test()).toBe(2);
})
