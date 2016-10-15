var _ = require('ramda');

function f(a, b, options = {}) {
  const defaultOptions = { value: 42, local: true };
  const finalOptions = merge(defaultOptions, options);
}
