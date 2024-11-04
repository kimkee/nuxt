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
  dateForm: (date, opt = 'medium')=> {
    date = new Date(date);
    return new Intl.DateTimeFormat('ko-KR', { dateStyle: opt, timeStyle: opt }).format(date);
  },
  timeVer: function (params) {
    const d = new Date();
    let opt = Object.assign({
        YY: d.getFullYear(),
        MM: d.getMonth() + 1,
        DD: d.getDate(),
        HH: d.getHours(),
        MN: d.getMinutes(),
        SC: d.getSeconds(),
    }, params);

    return opt.YY + "" + opt.MM + "" + opt.DD + "" + opt.HH + "" + opt.MN + "" + opt.SC;
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

  alert: function (msg, params) { // 커스텀 알럿

    let opt = Object.assign({
        msg: msg,
        tit: "",
        cls: "",
        ycb: "",
        ybt: "확인"
    }, params);

    if (document.querySelectorAll(".ui-alert").length) return;

    ui.lock.using(true);
    console.log(opt.tit);

    var lyAlert =
        `<article class="ui-alert ${opt.cls}" tabindex="0">
        <div class="pbd">
            <div class="phd"><span class="ptit">${opt.tit}</span></div>
            <div class="pct"><div class="msg">${opt.msg}</div></div>
            <div class="pbt">
                <button type="button" class="btn btn-confirm">${opt.ybt}</button>
            </div>
            <!-- <button type="button" class="btn-close"><i class="fa-regular fa-xmark"></i></button> -->
        </div>
    </article>`;
    const body = document.querySelector("body");
    body.insertAdjacentHTML("beforeend", lyAlert);

    const uiAlert = document.querySelector(".ui-alert");
    body.classList.add("is-alert");
    setTimeout(() => uiAlert.classList.add("open"));
    opt.tit && uiAlert.querySelector(".pbd>.phd").classList.add("is-tit");

    uiAlert.focus();
    uiAlert.querySelector(".btn-confirm").addEventListener("click", () => window.setTimeout(opt.ycb));

    uiAlert.querySelectorAll(".btn-confirm, .btn-close").forEach((btn) => { btn.addEventListener("click", alertClose); })
    // $(".ui-alert").find(".btn-close , .btn-confirm").on("click",alertClose);

    function alertClose() {
      uiAlert.remove();
      body.classList.remove("is-alert");
      if (document.querySelectorAll(".pop-layer").length < 1) {
          ui.lock.using(false);
      }
    }
  },
  confirm: function (msg, params) { // 커스텀 컨펌
    let opt = Object.assign({
        msg: msg,
        tit: "",
        cls: "",
        ycb: "",
        ybt: "확인",
        ncb: "",
        nbt: "취소"
    }, params);

    if (document.querySelectorAll(".ui-alert").length) return;

    ui.lock.using(true);

    let lyConfirm =
    `<article class="ui-alert ${opt.cls}" tabindex="0">
        <div class="pbd">
            <div class="phd"><span class="ptit">${opt.tit}</span></div>
            <div class="pct"><div class="msg">${opt.msg}</div></div>
            <div class="pbt">
                <button type="button" class="btn btn-cancel">${opt.nbt}</button>
                <button type="button" class="btn btn-confirm">${opt.ybt}</button>
            </div>
            <!-- <button type="button" class="btn-close"><i class="fa-regular fa-xmark"></i></button> -->
        </div>
    </article>`;
    const body = document.querySelector("body");
    body.insertAdjacentHTML("beforeend", lyConfirm);

    const uiConfirm = document.querySelector(".ui-alert");
    body.classList.add("is-confrim");
    setTimeout(() => uiConfirm.classList.add("open"));
    opt.tit && uiConfirm.querySelector(".pbd>.phd").classList.add("is-tit");
    uiConfirm.focus();
    uiConfirm.querySelector(".btn-confirm").addEventListener("click", () => window.setTimeout(opt.ycb));
    uiConfirm.querySelector(".btn-cancel").addEventListener("click", () => window.setTimeout(opt.ncb));

    uiConfirm.querySelectorAll(".btn-confirm, .btn-close , .btn-cancel").forEach((btn) => { btn.addEventListener("click", confirmClose); })

    function confirmClose() {
      uiConfirm.remove();
      body.classList.remove("is-confrim");
      if (document.querySelectorAll(".pop-layer").length < 1) {
          ui.lock.using(false);
      }
    }
  },
  lock: { // 스크롤 막기,풀기
    sct: 0,
    gap: ()=> window.innerWidth - document.body.clientWidth,
    stat: false,
    els: ".pop-layer  , .ui-alert , .ui-alert",
    set: function () {
      if (document.querySelectorAll(this.els).length <= 0) {
          this.using(false);
      }
    },
    using: function (opt) {
      const body = document.querySelectorAll("body , html");
      const html = document.querySelector("html");
      if (opt === true && this.stat === false) {
          document.documentElement.style.setProperty('--scrPad', `${this.gap()}px`);
          this.stat = true;
          ui.lock.sct = window.scrollY;
          body.forEach(body => body.classList.add("is-lock", "is-lock-end"));
          html.style.top = -ui.lock.sct + "px";
          // $(this.els).bind("touchmove scroll", function(e){ e.preventDefault(); });
      }
      if (opt === false && document.querySelectorAll(this.els).length <= 0 && html.classList.contains("is-lock")) {
          this.stat = false;
          body.forEach(body => body.classList.remove("is-lock"));
          html.style.top = "";
          window.scrollTo(0, ui.lock.sct)
          // $(this.els).unbind("touchmove scroll");
          setTimeout(() => {
              body.forEach(body => body.classList.remove("is-lock-end"));
          }, 50);
          document.documentElement.style.setProperty('--scrPad', `0rem`);
      }
    }
  },

};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('ui', ui);
  if (typeof window !== 'undefined') {
    window.$ui = ui;
  }
});
