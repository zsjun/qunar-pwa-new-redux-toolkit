function debounce(fn, time) {
  let timer;
  function inlineDebounce() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, time);
  }
  inlineDebounce();
}

debounce(() => {
  console.log(111);
}, 1000);
