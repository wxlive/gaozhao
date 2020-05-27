<template>
  <div class="box-over clearfix">
      <div class="item-pic-ft" v-for="(i,j) in itemData" :key="j">
          <router-link :to="{name:'haibaodetail',params:{id:i.id}}" target="_blank">
          <div>
              <img :src="i.img" class="itemData-img" width="380" height="222" alt="">
          </div>
         
          <div class="itemPic-info">
                {{i.info}}
          </div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
 name:'item_picft',
 props:{
     itemData:{
         type:Array,
         default:[]
     }
 }
}
</script>

<style scoped>
    .itemPic-s{
        font-size: 18px;
        margin-right: 20px;
        width: 70%;
        overflow: hidden;
    }
    .itemPic-n{
        font-size: 18px;
        font-weight: bold;
        text-align: right;
    
    }
    .itemPic-info{
        font-size: 16px;
        padding: 0 20px;
        color: #fff;
    }
    .itemData-img{
        width: 230px;
        height: 368px;
        border-radius: 10px;
    }
    .itemPic-t-box{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        white-space:nowrap;
    }
    .item-pic-ft{
        float: left;
        width: 230px;
        margin-right: 10px;
        height: 410px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 5px #d8d8d8;
        margin-top:30px;
        background: #00958a;
        color: #fff;
    }
    .box-over{
        width: 1250px;
    }
    .item-pic-ft a:hover{
        text-decoration: none;
    }
        .item-pic-ft a:link,    .item-pic-ft a:visited{
            color: #fff;
        }
    .item-pic-ft a:hover .itemPic-t-box{
        color: #fff;
    }
</style>