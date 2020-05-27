<template>
  <div class="c_m ">
     <div class="mt30">
              <bread />
      </div>
      <div class="title-h1">
          <h1>{{title}}</h1>
      </div>
      <div class="item-type">
          <span v-for="(i,j) in type" :class="[activeId == i.id ? 'activeBtn' :'' ,'item-typespan']" @click="changeData(i.id)" :key="j">
              {{i.name}}
          </span>
      </div>
      <div class="tc">
          <table class="table-normal">
              <tr>
                  <td>院校代号</td>
                  <td>院校名称</td>
                  <td>投档人数</td>
                  <td>投档最低分</td>
                  <td>投档最低分排名</td>
              </tr>
              <tr v-for="(i,j) in typeData" :key="j">
                  <td>{{i.daihao}}</td>
                  <td>{{i.yuanxiaomingcheng}}</td>
                  <td>{{i.toudangrenshu}}</td>
                  <td>{{i.zuidifen}}</td>
                  <td>{{i.zuidifenpaiming}}</td>
              </tr>
          </table>
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
    name:"score",
    data(){
        return{
            title:"",
            type:[],
            typeData:null,
            activeNum:1,
            year:'7',
            activeId:'',
            page:0,
            maxPage:0
        }
    },
    methods:{
        loadScore(){
            this.year = this.$route.params.year ? this.$route.params.year : '0'
            let defaultActive = this.$route.params.activeNum ? this.$route.params.activeNum :'1'
            this.$axios.get('/api/pc/scoreLine',{params:{year:this.year,activeNum:this.activeNum}})
            .then( res => {
                this.title = res.data.title
                this.type = res.data.type
                this.typeData = res.data.typeData
                this.activeId = res.data.activeId
                this.maxPage = res.data.maxPage
               //this.activeNum = res.data.activeNum
            })
        },
        changeData(i,b){
            this.activeId = i
            b?'':this.page = 0
            this.$axios.get('/api/pc/scoreLine',{params:{year:this.year,activeNum:this.activeId,page:this.page}})
            .then( res => {
                this.typeData = res.data.typeData
                  this.maxPage = res.data.maxPage
               })
        },
        changePage(s){
            this.page = s-1
            this.changeData(this.activeId,'page')
        } 
    },
    created(){
        this.loadScore()
    }
}
</script>

<style scoped>
.title-h1{
    text-align: center;
    padding: 30px;
}
.title-h1 h1{
    font-size: 35px;
    font-weight: bold;
}
    .item-typespan{
        padding: 14px 30px;
        border-radius: 30px;
        cursor: pointer;
        display: inline-block;
        border:1px solid #cacaca;
        font-size: 20px;
        margin: 0 10px;
    }
    .activeBtn{
          border:1px solid #ff900a;
          background: #ff900a;
          color: #fff;
    }
    .item-type{
        text-align: center;
    }
</style>