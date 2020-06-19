<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
/* default-setting */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // word-break: break-all;
    font-family: 'Inter', sans-serif;
  }
  ::selection{
    background-color: rgba(66, 133, 244, .2);
  }
  p::selection, div::selection, button::selection{
    background-color: rgba(66, 133, 244, .2);
  }
  html, body{ font-size: 10px; }
  a{ display: inline-block; text-decoration: none; color: inherit; }
  button{ background-color: transparent; border: none; border-radius: 5px; cursor: pointer; }
  button:focus{ outline: none; }
  img{ width: 100%; display: inline-block; }
  


  .mw1440{ max-width: 1440px; margin: 0 auto; padding: 40px; }
  .mw1280{ max-width: 1280px; margin: 0 auto; padding: 40px; }
  .padding-40{ padding: 40px; }
  .b-head{
    font-size: 30px;
    margin-bottom: 30px;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
  }
  .b-head::before, .b-head::after{
    content: "";
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #FCC8E2, #BDC2FF);
    position: absolute;
  }
  .b-head::before{ top: -6px; }
  .b-head::after{
    bottom: -6px;
    left: 0;
  }
  .b-title{ font-size: 20px; margin-bottom: 20px; text-transform: uppercase; }
  .b-text{ font-size: 16px; line-height: 1.8; }
  .fs24{ font-size: 24px; }
  .fs16{ font-size: 16px; }



@media ( max-width: 768px ) {
  .mw1440{ padding: 30px; }
  .mw1280{ padding: 30px; }
  .padding-40{ padding: 30px; }
  .b-head{ font-size: 26px; margin-bottom: 26px; }
  .b-title{ font-size: 18px; margin-bottom: 18px; }
  .b-text{ font-size: 14px; }
  .fs24{ font-size: 22px; }
  .fs16{ font-size: 14px; }
}


@media ( max-width: 500px ) {
  .mw1440{ padding: 20px; }
  .mw1280{ padding: 20px; }
  .padding-40{ padding: 20px; }
  .b-head{ font-size: 24px; margin-bottom: 24px; }
  .b-title{ font-size: 16px; margin-bottom: 16px; }
  .b-text{ font-size: 12px; }
  .fs24{ font-size: 20px; }
  .fs16{ font-size: 12px; }
}
</style>
