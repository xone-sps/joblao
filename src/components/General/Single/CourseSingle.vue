<template>
  <div>
    <section class="section">
     <div class="container">
         <div class="course-container">
            <div class="course-container-cover">
                <div class="img-cover">
                    <img style="display: block;" id="" src="https://media.jobthai.com/v1/images/logo-pic-map/74671_pic_20191203172818.jpeg" alt="" usemap="">
                </div>
                <div class="row-flex-bottom">
                  <div class="cover-logo">
                      <div class="cover-logo-pmg">
                          <img style="display: block;" id="image-logo-74671" src="https://media.jobthai.com/v1/images/logo/74671_logo_201909201111.png" alt="" usemap="">
                      </div>
                  </div>
                </div>
            </div>
            <div class="section-course-content">
                <div class="component-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quasi porro dolores nobis aliquam tenetur beatae neque enim? Vero debitis at magnam eius eaque tenetur, illum neque eligendi esse magni.
                </div>

            </div>
        </div>
     </div>
    </section>
</div>
</template>

<style scoped>
.course-container{
width:75%;
}
.img-cover img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.section-course-content{
    margin-top: 50px;
    margin-bottom: 0px;
}
.component-paragraph{
    margin-top: 1.5em;
    word-break: break-word;
}
.row-flex-bottom{
    display: flex;
    flex-flow: row wrap;
}
.cover-logo{
    z-index: 1;
    position: absolute;
    width: 100%;
    bottom: 0px;
}
.cover-logo-pmg{
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(242, 242, 242);
    border-image: initial;
    border-radius: 8px;
    overflow: hidden;
}
.cover-logo-pmg img{
    display: block;
    position: absolute;
    max-width: 90%;
    max-height: 90%;
    transform: translate3d(-50%, -50%, 0px);
    top: 50%;
    left: 50%;
}
</style>