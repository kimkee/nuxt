const ui = {
  greet(name) {
    alert(name)
  },
  add(a, b) {
    return a + b;
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('ui', ui);
  if (typeof window !== 'undefined') {
    window.$ui = ui;
  }
});
