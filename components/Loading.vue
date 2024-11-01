
<script setup>
const props = defineProps(['opts']);
const opts = ref(props.opts || null);
</script>
<template>
  <span :class="`ui-load-glx ${opts.class}`">
    <span class="gbx">
      <em class="bx">
        <i></i> <i></i>
        <i></i> <i></i>
      </em>
    </span>
  </span>
</template>


<style scoped>
.ui-load-glx{display: inline-block;position: relative;width: 18px;height: 18px;vertical-align: middle;} 
.ui-load-glx>.gbx{width: 18px;height: 18px;display: inline-block;}
.ui-load-glx>.gbx .bx{animation: rotate 1.2s linear infinite;display: flex;position: relative;width: 100%;height: 100%;top: 50%;left: 50%;margin-top: -9px;margin-left: -9px;}
.ui-load-glx>.gbx .bx i{width: 100%;height: 100%;position: absolute;left: 0;top: 0;}
.ui-load-glx>.gbx .bx i::before{animation: bounce 0.5s alternate infinite;position: absolute;left: 50%;top: 50%;width: 20%;height: 20%;background: #0481ff;border-radius: 10px;display: inline-flex;content:"";}
.ui-load-glx>.gbx .bx i:first-child::before {background: #00d593;}
.ui-load-glx>.gbx .bx i:nth-child(1){transform: rotate(0deg);}
.ui-load-glx>.gbx .bx i:nth-child(2){transform: rotate(90deg);}
.ui-load-glx>.gbx .bx i:nth-child(3){transform: rotate(180deg);}
.ui-load-glx>.gbx .bx i:nth-child(4){transform: rotate(270deg);}

.ui-load-glx.full{position: fixed;left: 0;right: 0;top: 0;bottom: 0;z-index: 2000;background: transparent;width: auto;height: auto;}
.ui-load-glx.full>.gbx{transform: scale(2.5);position: absolute;left: 50%;top: 50%;margin: -9px 0px 0px -9px;}
.ui-load-glx.full>.gbx .bx{}
@keyframes bounce {
    0%{   transform: translateY(20%) ; }
    30%{  transform: translateY(30%) ; }
    100%{ transform: translateY(100%); }
}
@keyframes rotate {
    0%{ transform: rotate(-360deg); }
}
</style>