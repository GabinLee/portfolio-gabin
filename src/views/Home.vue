<template>
  <div class="home">
    <header id="header">
      <div class="h-container mw1440">
        <div class="nav-box">
          <button class="nav-item b-text" @click="clickedIntro(1)" :class="{active : selectedNav == 1 ? true : false}">Home</button>
          <button class="nav-item b-text" @click="clickedProjects(2)" :class="{active : selectedNav == 2 ? true : false}">Project</button>
          <button class="nav-item b-text" @click="clickedContact(3)" :class="{active : selectedNav == 3 ? true : false}">Contact</button>
        </div>
      </div>
    </header>

    <main>
      <div id="intro">
        <p class="padding-40">I'm Gabin</p>
      </div>

      <div id="projects-container" class="padding-40">
        <div class="projects mw1280">
          <div class="b-head">Project</div>
          <div class="group">
            <div class="project-box web-kakao">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <img src="../assets/web-kakao.png" alt="">
              </div>
              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <p class="b-text">Vue.js 프레임워크</p>
                <p class="b-text">크로스 브라우징
                  <span>(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )</span>
                </p>
                <div class="btn-group">
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://gabinlee.github.io/web-kakao" class="fs16" target="_blank" v-ripple>페이지 보기</a>
                  </div>
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://github.com/GabinLee/web-kakao/blob/master/src/views/Home.vue" class="fs16" target="_blank" v-ripple>
                      <v-icon>mdi-github</v-icon>
                      <span>소스 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-box web-ms">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <img src="../assets/web-ms.png" alt="">
              </div>
              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <p class="b-text">반응형</p>
                <p class="b-text">Vue.js 프레임워크</p>
                <p class="b-text">크로스 브라우징
                  <span>(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )</span>
                </p>
                <div class="btn-group">
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://gabinlee.github.io/web-ms" class="fs16" target="_blank" v-ripple>페이지 보기</a>
                  </div>
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://github.com/GabinLee/web-ms/blob/master/src/views/Main.vue" class="fs16" target="_blank" v-ripple>
                      <v-icon>mdi-github</v-icon>
                      <span>소스 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-box web01">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <img src="../assets/web01.png" alt="">
              </div>
              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <p class="b-text">반응형</p>
                <p class="b-text">Vue.js 프레임워크</p>
                <div class="btn-group">
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://gabinlee.github.io/web01" class="fs16" target="_blank" v-ripple>페이지 보기</a>
                  </div>
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://github.com/GabinLee/web01/blob/master/src/views/Home.vue" class="fs16" target="_blank" v-ripple>
                      <v-icon>mdi-github</v-icon>
                      <span>소스 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-box web02">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <img src="../assets/web02.png" alt="">
              </div>
              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <p class="b-text">반응형</p>
                <p class="b-text">Vue.js 프레임워크</p>
                <p class="b-text">크로스 브라우징
                  <span>(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )</span>
                </p>
                <div class="btn-group">
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://gabinlee.github.io/web02" class="fs16" target="_blank" v-ripple>페이지 보기</a>
                  </div>
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://github.com/GabinLee/web02/blob/master/src/views/Home.vue" class="fs16" target="_blank" v-ripple>
                      <v-icon>mdi-github</v-icon>
                      <span>소스 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-box web03">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <img src="../assets/web03.png" alt="">
              </div>
              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <p class="b-text">반응형</p>
                <p class="b-text">Vue.js 프레임워크</p>
                <p class="b-text">크로스 브라우징
                  <span>(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )</span>
                </p>
                <div class="btn-group">
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://gabinlee.github.io/web03" class="fs16" target="_blank" v-ripple>페이지 보기</a>
                  </div>
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://github.com/GabinLee/web03/blob/master/src/views/Home.vue" class="fs16" target="_blank" v-ripple>
                      <v-icon>mdi-github</v-icon>
                      <span>소스 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-box web04">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <img src="../assets/web04.png" alt="">
              </div>
              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <p class="b-text">반응형</p>
                <p class="b-text">Vue.js 프레임워크</p>
                <p class="b-text">크로스 브라우징
                  <span>(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )</span>
                </p>
                <div class="btn-group">
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://gabinlee.github.io/web04" class="fs16" target="_blank" v-ripple>페이지 보기</a>
                  </div>
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://github.com/GabinLee/web04/blob/master/src/views/Home.vue" class="fs16" target="_blank" v-ripple>
                      <v-icon>mdi-github</v-icon>
                      <span>소스 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-box web05">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <img src="../assets/web05.png" alt="">
              </div>
              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <p class="b-text">반응형</p>
                <p class="b-text">Vue.js 프레임워크</p>
                <p class="b-text">크로스 브라우징
                  <span>(Chrome, Firefox, Microsoft Edge, Internet Explorer 11 )</span>
                </p>
                <div class="btn-group">
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://gabinlee.github.io/web05" class="fs16" target="_blank" v-ripple>페이지 보기</a>
                  </div>
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://github.com/GabinLee/web05/blob/master/src/views/Home.vue" class="fs16" target="_blank" v-ripple>
                      <v-icon>mdi-github</v-icon>
                      <span>소스 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-box web06">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <img src="../assets/web06.png" alt="">
              </div>
              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <p class="b-text">반응형</p>
                <p class="b-text">Vue.js 프레임워크</p>
                <div class="btn-group">
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://gabinlee.github.io/web06" class="fs16" target="_blank" v-ripple>페이지 보기</a>
                  </div>
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://github.com/GabinLee/web06/blob/master/src/views/Home.vue" class="fs16" target="_blank" v-ripple>
                      <v-icon>mdi-github</v-icon>
                      <span>소스 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-box web-dashboard01">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <img src="../assets/web-dashboard01.png" alt="">
              </div>
              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <p class="b-text">Vue.js 프레임워크</p>
                <div class="btn-group">
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://gabinlee.github.io/web-dashboard01" class="fs16" target="_blank" v-ripple>페이지 보기</a>
                  </div>
                  <div class="btn-bx">
                    <div class="bg-bx"></div>
                    <a href="https://github.com/GabinLee/web-dashboard01/blob/master/src/views/Home.vue" class="fs16" target="_blank" v-ripple>
                      <v-icon>mdi-github</v-icon>
                      <span>소스 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id="practical-work-container" class="padding-40">
        <div class="practical-work mw1280">
          <div class="b-head">외주 참여</div>
          <div class="group">
            <div class="project-box">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <img src="../assets/shcontents.png" alt="">
              </div>

              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <p class="b-text">반응형</p>
                <p class="b-text">Vue.js 프레임워크</p>
                <div class="btn-bx">
                  <div class="bg-bx"></div>
                  <a href="http://shcontents.com/" class="fs16" _blank v-ripple>view more</a>
                </div>
              </div>
            </div>

            <div class="project-box">
              <div class="img-box padding-40" :data-aos="responsiveMode == 'web' ? fadeLeft : fadeUp">
                <img src="../assets/sj-ez.png" alt="">
              </div>
              <div class="text-box padding-40" :data-aos="responsiveMode == 'web' ? fadeRight : fadeUp">
                <p class="b-text">퍼블리싱 업무 담당</p>
                <p class="b-text">반응형</p>
                <p class="b-text">Vue.js 프레임워크</p>
                <div class="btn-bx">
                  <div class="bg-bx"></div>
                  <a href="http://sj-ez.com/" class="fs16" _blank v-ripple>view more</a>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>

      <div id="contact-container" class="padding-40">
        <div class="contact mw1280">
          <div class="b-head">contact</div>
          <div class="group">
            <div class="content-box padding-40">
              <p class="b-title">email</p>
              <div class="icon-box">
                <a href="mailto:leegb0621@gmail.com" v-ripple>
                  <v-icon>mdi-email</v-icon>
                </a>
              </div>
              <p class="b-text">leegb0621@gmail.com</p>
            </div>

            <div class="content-box padding-40">
              <p class="b-title">phone</p>
              <div class="icon-box">
                <a href="tel:010-5302-7943" v-ripple>
                  <v-icon>mdi-cellphone-iphone</v-icon>
                </a>
              </div>
              <p class="b-text">010-5302-7943</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="padding-40">
      <div class="f-container mw1440">
        <p class="fs24">Lee Gabin</p>
        <span>1994.06.21</span>
        <span>경기도 시흥시</span>
        <br/>
        <span>HTML5, CSS3, JAVA 공부 중</span>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  data: () => ({
    selectedNav: 1,
    fadeRight: 'fade-right',
    fadeLeft: 'fade-left',
    fadeUp: 'fade-up',
    responsiveMode: 'web'
  }),
  created() {
    window.onscroll = function () {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60 ) {
        document.getElementById("header").style.boxShadow = "0 2px 2px 0 #eee"
      } else{
        document.getElementById("header").style.boxShadow = "none"
      }
    }
    
  },
  mounted() {
    window.addEventListener("resize", this.resizedWindow);

    // console.log(document.getElementById("projects-container").offsetTop)
    // console.log(document.getElementById("contact-container").offsetTop)
    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
      if(window.scrollY < 694) {
        this.selectedNav = 1
      } else if(window.scrollY < 4528) {
        this.selectedNav = 2
      } else {
        this.selectedNav = 3
      }
    })

  },
  methods: { 
    resizedWindow() {
      // console.log(window.innerWidth)
      if(window.innerWidth < 769) {
        this.responsiveMode = 'mobile';
      } else {
        this.responsiveMode = 'web';
      }
      // console.log(this.responsiveMode);
    },
    clickedIntro(index) {
      this.selectedNav = index;
      window.scroll({
        top: document.getElementById("intro").offsetTop + -60,
        behavior: 'smooth'
      })
    },
    clickedProjects(index) {
      this.selectedNav = index;
      window.scroll({
        top: document.getElementById("projects-container").offsetTop + -60,
        behavior: 'smooth'
      })
    },
    clickedContact(index) {
      this.selectedNav = index;
      window.scroll({
        top: document.getElementById("contact-container").offsetTop + -60,
        behavior: 'smooth'
      })
    },
  }
}
</script>


<style lang="scss" scoped>
/* header */
  header{
    background-color: #fff;
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 900;
    .h-container{
      height: 100%;
      padding-top: 0;
      padding-bottom: 0;
    }
    .nav-box{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-item{
      margin: 0 10px;
      padding: 6px 12px;
      text-transform: uppercase;
    }
    .nav-item:hover, .active{ color: #4285F4; }
  }


/* main */
  main{
    background-color: #fff;
    margin-bottom: 270px;
  }
  #intro{
    width: 100%;
    height: 100vh;
    padding-top: 60px;
    p{
      background: linear-gradient(to right, #FCC8E2, #BDC2FF);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      width: 100%;
      height: 100%;
      font-size: 200px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      text-align: center;

    }
  }

  #practical-work-container{ background-color: #eee; }
  .projects, .practical-work{
    .group{ margin: 0 auto; }
    .project-box{
      display: flex;
      flex-wrap: wrap;
    }
    .project-box:nth-child(even){
      flex-direction: row-reverse;
    }
    .img-box{ width: 50%; }
    .text-box{
      width: 50%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .b-text{
        margin-bottom: 10px;
        line-height: 1.2;
      }
      span{ display: inline-block; }
      .btn-group{
        margin-top: 20px;
        display: flex;
        align-items: center;
      }
      .btn-bx{
        margin: 0 10px;
        position: relative;
        .bg-bx{
          width: 100%;
          height: 0px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition: height .3s;
        }
        a{
          height: 40px;
          padding: 0 12px;
          text-transform: uppercase;
          border-style: solid;
          border-image: linear-gradient(to right, #FCC8E2, #BDC2FF);
          border-image-slice: 1;
          display: flex;
          align-items: center;
          position: relative;
        }
        .v-icon{
          color: #000;
          margin-right: 6px;
        }
      }
      .btn-bx:hover .bg-bx{
        background: linear-gradient(135deg, #FCC8E2 30%, #BDC2FF);
        height: 36px;
      }
      .btn-bx:hover a, .btn-bx:hover i{ color: #fff; }
      
    }
  }
  .practical-work{
    .btn-bx{
      margin: 20px 10px 0 !important;
    }
  }

  #contact-container{
    .group{ display: flex; }
    .content-box{
      width: 50%;
      text-align: center;
      .b-title{ margin: 0; }
      .icon-box{
        background-color: palegoldenrod;
        width: 50px;
        height: 50px;
        margin: 30px 0;
        border-radius: 2px;
        padding: 2px;
        background: linear-gradient(45deg, #FCC8E2, #BDC2FF);
        display: inline-block;
        transform: rotate( 45deg );
        position: relative;
        transition: all .3s;
      }
      a{
        background: #fff;
        color: #fff;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s;
      }
      .v-icon{
        background: linear-gradient(to right, #FCC8E2, #BDC2FF);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transform: rotate( -45deg );
        transition: .3s;
      }
      .icon-box:hover a{
        background: linear-gradient(45deg, #FCC8E2, #BDC2FF);
      }
      .icon-box:hover .v-icon{ -webkit-text-fill-color: #fff; }
    }
  }



/* footer */
  footer{
    background-color: #888;
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
    z-index: -1;
    p{
      font-weight: bold;
      color: #BDC2FF;
      letter-spacing: 4px;
      margin-bottom: 20px;
    }
    span{
      color: #fff;
      font-size: 14px;
      margin: 5px 10px;
      display: inline-block;
    }
  }





@media ( max-width: 768px ) {
  main{ margin-bottom: 225px; }
  #intro{
    p{ font-size: 140px; }
  }

  .projects, .practical-work{
    .project-box{
      margin-bottom: 30px;
      flex-direction: column;
    }
    .project-box:nth-child(even){
      flex-direction: column;
    }
    .img-box{ width: 80%; margin: 0 auto; }
    .text-box{ width: 100%; }
  }

}


@media ( max-width: 500px ) {
  #intro{
    p{ font-size: 100px; }
  }

  .projects, .practical-work{
    margin: 0 -20px -20px -20px;
    .img-box{ width: 100%; }
    .text-box{
      .btn-bx{
        a{ font-size: 10px; }
      }
    }
  }

  .contact{
    margin: 0 -20px -20px -20px;
  }


}  
</style>