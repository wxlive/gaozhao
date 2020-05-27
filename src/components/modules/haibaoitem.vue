<template>
  <div>
      <div class="section-nav flex-btween nav-pt40">
            <div class="flex-middle">
                <span class="global_icon xyicon"></span>
                <h2 class="nav-h2 ml10">海报进校园</h2>
            </div>
           <router-link :to="{name:'itemHaibao'}" target="_blank">
                更多 <img src="../../../public/staticimg/more.png" class="moreImg" alt="">
            </router-link>
       </div>
       <div class="mt30">
            <ul class="item-xueba">
                <li v-for="(i,j) in haibaoData" :key="j">
                    <div>
                         <router-link :to="{name:'haibaodetail',params:{id:i.id}}" target="_blank">
                             <img :src="i.img" width="230" class="item-haibao-img" height="370" alt="">
                        </router-link>
                    </div>
                    <div class="xueba-btm-title">
                       <router-link :to="{name:'haibaodetail',params:{id:i.id}}" target="_blank">
                            {{i.title}}
                            </router-link>
                    </div>
                  
                </li>
            </ul>
        </div>

  </div>
</template>

<script>
export default {
 name:"xueba",
      props:{
          haibaoData:null
      },
      data(){
          return{

          }
      }
}
</script>

<style scoped>
    .flex-btween{
        justify-content: space-between;
    }
    .flex-middle{
        display: flex;
        align-items: center;
    }
    .item-xueba {
        display: flex;
        justify-content: space-between;

    }
    .item-xueba li{
        border-radius: 10px;
        box-shadow: 0 0 5px #999;
        overflow: hidden;
        width: 230px;
        background: #00958a;
        padding-bottom: 5px;
    }
    .item-xueba li a:link,.item-xueba li a:visited{
        color: #fff;
    }
    .xueba-btm-title{
        padding: 5px 10px;
        color: #fff;
    }
    .xueba-btm-info{
        padding: 0px 10px 5px;
    }
    .item-haibao-img{
        display: block;
    }
</style>