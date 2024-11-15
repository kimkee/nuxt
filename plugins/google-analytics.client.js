export default ({ app }) => {
  if (process.client) {
    window.ga = window.ga || function() {
      (ga.q = ga.q || []).push(arguments);
    };
    ga('create', 'G-ZFPVJH3PJW', 'auto');
    ga('send', 'pageview');
  }
};
  