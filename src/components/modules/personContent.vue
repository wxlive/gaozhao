<template>
  <div class="c_m">
            <div class="mt30">
                <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>招办访谈</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="person-header mt30">

                <div style="padding-right:20px">
                      <img v-if="!videosrc" :src="photo" class="person-photo" alt="">
                     <video v-else :poster="photo" style="object-fit:fill" :src="videosrc" width="260" height="180" controls></video>
                </div>
               

                <div class="flex-grew">
                    <div  class="person-info-box">
                        <div>
                            <h2 class="person-h2">{{school}}</h2>
                            <div class="person-say">
                                 {{job}}{{name}}{{say}}
                            </div>
                        </div>
                        <img :src="schoolPhoto" class="school-photo" alt="">
                    </div>
                    <div class="personInfo">
                        {{personInfo}}
                    </div>
                </div>
            </div>
            <div class="content mt30" v-html="content">
                
            </div>
            <div class="tc mt30">
                <span class="zan-icon" @click='userZan()'>
                    <span class="zanico" :class="{'zanon':zanon}"></span>
                    {{zan}}
                </span>
            </div>


              <div class="mt30">
                 <div class="section-nav nav-pt40">
                    <span class="global_icon zhban"></span>
                    <h2 class="nav-h2 ml10">招办主任访谈</h2>
                    <span class="small-title">安徽省教育招生考试院 安徽青年报权威发布</span>
                </div>
            </div>
            <div>
                <itemPicft :itemData='itemData' />
            </div>
  </div>
</template>

<script>
export default {
    name:'personContent',
    props:[],
    data(){
        return {
            content:'',
            school:'',
            photo:'',
            job:'',
            say:'',
            name:'',
            schoolPhoto:'',
            personInfo:'',
            zan:'',
            zanimg:'../../public/staticimg/zan1.png',
            zanon:0,
            itemData:null,
            videosrc:''
        }
    },
    computed:{
       
    },
    components:{
         itemPicft:() => import('../../components/modules/item_picft.vue')
    },
    methods:{
        userZan(){
            if(!this.zanon){
                    console.log(this.$route.params.id)
                    this.$axios.get('/api/pc/doLike?id='+this.$route.params.id,{params:{type:this.$route.name}})
                    .then(res => {
                        this.zan = res.data.zan
                        this.zanon = 1
                    })
                    .catch(error => {
                        
                    })
             }
        },
        getPersonContent(){
            console.log(this.$route.params.id)
           // this.$axios.get('/interviewContent',{params:{id : this.$route.id}})
           this.$axios.get('/api/pc/interviewDetail',{params:{id : this.$route.params.id}})
            .then( res => {
                this.content=res.data.content
                this.school=res.data.school
                this.photo=res.data.photo
                this.schoolPhoto=res.data.schoolPhoto
                this.personInfo=res.data.personInfo
                this.zan=res.data.zan
                this.job=res.data.job
                this.name=res.data.name
                this.say=res.data.say
                this.videosrc = res.data.videosrc
                
                window.document.title = this.school
            })
        },
        getItem(page){
     
            this.$axios.get('/api/pc/interviewItem',{params:{page:0,type:this.$route.name}})
            .then(res => {
                this.itemData = res.data.itemData
                this.maxPage = res.data.maxPage
            })
        },
    },
   created(){
       this.getPersonContent()
       this.getItem(0)
   }
}
</script>

<style scoped>
.person-h2{
    font-size: 35px;
    color: #ff4a44;
    font-weight: bold;
}
    .person-header{
        background: #fff5e1;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
    }
    .person-photo{
        width: 180px;
        height: 180px;
        margin-right: 20px;
        border-radius: 6px;
        flex-grow: 0;
        flex-shrink: 0;
    }
    .person-info-box{
        display: flex;
        justify-content: space-between;
    }
    .school-photo{
        width: 100px;
        height: 100px;
    }
    .person-say{
        color: #009686;
        font-size: 20px;
        margin-top: 5px;
    }
    .personInfo{
        color: #666;
        padding-top: 10px;
        margin-top: 10px;
        border-top: 1px solid #f6eada;
        font-size: 16px;
        line-height: 1.8em;
    }
</style>