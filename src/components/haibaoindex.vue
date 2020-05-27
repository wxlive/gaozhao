<template>
  <div class="c_m">
            <div class="mt30">
              <bread />
            </div>
         
                 <div class="section-nav ">
                    <span class="global_icon xyicon"></span>
                    <h2 class="nav-h2 ml10">海报进校园</h2>
                </div>
          
            <div>
                <itemPicft :itemData='itemData' />
            </div>
            <div class="pages">
                <el-pagination
                    background
                    @current-change="changePage"
                    :current-page="page+1"
                    layout="prev, pager, next"
                    :page-count='maxPage'>
                </el-pagination>
            </div>
  </div>
</template>

<script>
export default {
    name:'fangtanitem',
    props:[],
    data(){
        return{
            daoyan:'',
            page:0,
            maxPage:0,
            itemData:null
        }
    },
    components:{
        itemPicft:() => import('../components/modules/item_haibao.vue')
    },
    methods:{
  
        getItem(page){
            this.$axios.get('/api/pc/haibaoItem',{params:{page:page}})
            .then(res => {
                this.itemData = res.data.itemData
                this.maxPage = res.data.maxPage
            })
        },
       async changePage(s){
          await this.getItem(s-1)
        }
    },
    created(){

       this.getItem(this.page)
    },
}
</script>

<style lang="scss" scoped>

    .daoyanbox{
        box-shadow: 0 0 10px #d8d8d8;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
    }
    .daoyan-info{
        margin-left: 20px;
        font-size: 20px;
        font-weight: bold;
        color: #444;
    }
    .daoyan{
        display: block;
    }
    .pages{
        text-align: center;
        padding: 40px 0;
    }
</style>