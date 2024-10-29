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
  timeForm: function (date, opt) {
    const start = new Date(date);
    const end = new Date(); // 현재 날짜
    const diff = (end - start) / 1000; // 경과 시간
    const times = [
        { name: '년', milliSeconds: 60 * 60 * 24 * 365, icon: 'calendar-days' },
        { name: '개월', milliSeconds: 60 * 60 * 24 * 30, icon: 'calendar-days' },
        { name: '일', milliSeconds: 60 * 60 * 24, icon: 'calendar-days' },
        { name: '시간', milliSeconds: 60 * 60, icon: 'clock' },
        { name: '분', milliSeconds: 60, icon: 'clock' },
    ];
    // 년 단위부터 알맞는 단위 찾기
    for (const value of times) {
        const betweenTime = Math.floor(diff / value.milliSeconds);
        // 큰 단위는 0보다 작은 소수 단위 나옴
        if (betweenTime > 0) {
            if (opt == true) {
                return `${betweenTime}${value.name} 전`;
            } else {
                return `${value.icon} <b>${betweenTime}${value.name} 전</b>`;
            }
        }
    }
    // 모든 단위가 맞지 않을 시
    return "방금 전";
  },
  textHtml: (text, opt) => {
    // console.log(text,opt);
    if (opt == 'incode') { return text.replace(/\u0020/g, '&nbsp;').replace(/\n/g, '<br>'); }
    if (opt == 'decode') { return text.replace(/<br>/ig, '\n').replace(/&nbsp;/g, '\u0020'); }
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('ui', ui);
  if (typeof window !== 'undefined') {
    window.$ui = ui;
  }
});
