const Store = {
  counter: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    if (property === 'counter') {
      window.dispatchEvent(new Event('countchange'));
    }

    return true;
  },
});

export default proxiedStore;
