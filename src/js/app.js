// TODO: write your code here
import Validator from './basic';

const names = ['test', '1test', 'test23', '_test', 'test_', '-test', 'test-', 't-e_st', 'te1s-t', 'te_st', 'test#', '?test', 'Wtest', 'Wt-est',
  'te111_st', 'te1234st', 'te12-34st', 'Wtes123-4t', 'Wt-e123456st', 'W1111st', '1234', 'teu', 'tu', 't', '1', ''];

// eslint-disable-next-line no-console
names.forEach((name) => console.log(name, Validator.validateUsername(name, true)));
