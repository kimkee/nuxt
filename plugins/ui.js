const ui = {
  greet(name) {
    alert(name)
  },
  add(a, b) {
    return a + b;
  },
  commas:{
    add: (str)=> str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    del: (str)=> parseInt(str.replace(/,/g , '') || 0)
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('ui', ui);
  if (typeof window !== 'undefined') {
    window.$ui = ui;
  }
});
