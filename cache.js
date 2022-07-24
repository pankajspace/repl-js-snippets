function cacheFn(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg]) {
      return cache[arg];
    }
    else {
      cache[arg] = fn(arg);
      return cache[arg];
    }
  }
}
