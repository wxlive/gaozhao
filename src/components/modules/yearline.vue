<template>
  <div>
       <div class="section-nav ">
            <span class="global_icon fsx"></span><h2 class="nav-h2 ml10">历年分数线</h2>
        </div>
        <div class="item-flex-line mt15">
       
                <router-link  v-for="(i,j) in line" :key="j" class="item-line-btn" :to="{name:'scoreItem',params:{activeNum:'1',year:i.id}}" target='_blank'>
                      {{i.name}}
               </router-link>
        
        </div>
  </div>
</template>
<script>
export default {
 name:'yearline',
 props:['line'],
 data(){
     return{
         
     }
 }
}
</script>

<style scoped>
 .item-line-btn{
     width: 280px;
     height: 95px;
     cursor: pointer;
     line-height: 95px;
     display: inline-block;
 }
 .item-line-btn:nth-child(1){
     background: url(../../../public/staticimg/fsxbg01.png) no-repeat;
 }
  .item-line-btn:nth-child(2){
     background: url(../../../public/staticimg/fsxbg02.png) no-repeat;
 }

  .item-line-btn:nth-child(3){
     background: url(../../../public/staticimg/fsxbg03.png) no-repeat;
 }
   .item-line-btn:nth-child(4){
     background: url(../../../public/staticimg/fsxbg04.png) no-repeat;
 }
 .item-flex-line{
     display: flex;
     justify-content: space-between;
 }
 .item-line-btn,  a.item-line-btn:link,  a.item-line-btn:visited{
     font-size: 24px; 
     color: #fff;
     text-indent: 1em;
     font-weight: bold;
 }
  a.item-line-btn:hover{
    text-decoration: none;
 }
</style>