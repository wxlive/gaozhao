<template>
  <div class="c_m">
       <div class="mt30">
               <bread />
         </div>
         <div>
           <div class="detail-title">
             {{title}}
           </div>
           <div class="content">
              <img :src="img" class="haibaoimg" alt="">
           </div>
         </div>
  </div>
</template>

<script>
export default {
  name:'haibaodetail',
  data(){
    return{
      img:'',
      title:""
    }
  },
  methods:{
    getHaibao(){
      console.log(this.$route.params.id)
      this.$axios.get('/api/pc/haibaoDetail?id='+this.$route.params.id)
      .then(res => {
         this.img = res.data.img
         this.title = res.data.title
      })
    }
  },
  created(){
    this.getHaibao()
  }
}
</script>

<style lang="scss" scoped>
  .haibaoimg{
    max-width:100%;
    display: block;
    margin: 0 auto;
  }
  .detail-title{
    text-align: center;
    font-size: 30px;
    padding: 30px;
  }
</style>