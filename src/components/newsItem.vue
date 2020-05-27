<template>
  <div class="c_m ">
      <div class="mt30">
            <bread />
      </div>
      <div>
         <ul class="index-title-item" v-if="newsIndex.length">
              <li v-for="(i,j) in newsIndex" :key="j">
                <router-link :to="{name:'detail',params:{id:i.id}}" target="_blank">
                  <span class="index-h2">{{i.title}}</span>
                </router-link>
                <span class="item-date">{{i.date}}</span>
              </li>
            </ul>
            <div class="tc" v-else>
              暂无数据
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'newsItem',
    props:[],
    data(){
        return{
            newsIndex: [],
            key:'',
            keywords:''
        }
    },
    methods:{

        getNews(){
               this.key = this.$route.name
           this.keywords = this.$route.query.keywords || ''
             this.$axios.get('/api/pc/newsItem',{params:{key:this.key,keywords:this.keywords}})
                .then(res => {
                    this.newsIndex = [...res.data.item];
                })
          }
        },
        created(){
        
           console.log(this.keywords)
           this.getNews()
        },
        watch:{
            "$route": function (to, from) {
              this.getNews()
            }
        }
}
</script>

<style>

</style>