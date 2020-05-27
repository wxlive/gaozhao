
import Router from "vue-router";
import store from '../store'
const router = new Router({
    mode:'history',
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'index',
            component: () => import('@/components/index.vue'), // vue路由懒加载  异步加载
            meta: {
                title: '首页',
                //requireAuth: true // 只要此字段为true，必须做鉴权处理
            }
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('@/components/newsItem.vue'), // vue路由懒加载  异步加载
            meta: {
                title: '查询结果',
                //requireAuth: true // 只要此字段为true，必须做鉴权处理
            }
        },
        {
            path:"/policy",
            name: 'policyindex',
            component: () => import('@/components/policy.vue'), // vue路由懒加载  异步加载
            meta: {
                title: '政策动态',
            }
        },
        {
            path: '/policy/:id',
            name: 'policy',
            component: () => import('@/components/policy.vue'), // vue路由懒加载异步加载
            meta: {
                title: '政策动态',
            }
        },
        {
            path:"/detail/:id",
            name: 'detail',
            component: () => import('@/components/content.vue'),
            meta: {
                title: '新闻资讯',
            }
        },
        {
            path:"/interview",
            name: 'interview',
            component: () => import('@/components/fangtan.vue'),
            meta: {
                title: '招办访谈',
            }
        },
        {
            path:"/personContent/:id",
            name: 'personContent',
            component: () => import('@/components/modules/personContent.vue'),
            meta: {
                title: '招办访谈',
            }
        },
        {
            path:"/question",
            name: 'mainquestion',
            component: () => import('@/components/mainquestion.vue'),
            meta: {
                title: '我要提问',
            }
        },
        {
            path:"/score",
            name: 'score',
            component: () => import('@/components/score.vue'),
            meta: {
                title: '历年分数',
            }
        },
        {
            path:"/scoreItem/:year/:activeNum",
            name: 'scoreItem',
            component: () => import('@/components/score.vue'),
            meta: {
                title: '历年分数',
            }
        },
        {
            path:"/guide",
            name: 'guide',
            component: () => import('@/components/newsItem.vue'),
            meta: {
                title: '院校指南',
            }
        },
        {
            path:"/newsItem/:key",
            name: 'newsItem',
            component: () => import('@/components/newsItem.vue'),
            meta: {
                title: '信息列表',
            }
        },
     
        {
            path:"/xueba",
            name: 'xueba',
            component: () => import('@/components/fangtan.vue'),
            meta: {
                title: '学霸养成记',
            }
        },
        {
            path:"/itemHaibao",
            name: 'itemHaibao',
            component: () => import('@/components/haibaoindex.vue'),
            meta: {
                title: '海报进校园',
            }
        },
        {
            path:"/haibaodetail/:id",
            name: 'haibaodetail',
            component: () => import('@/components/modules/haibaodetail.vue'),
            meta: {
                title: '海报进校园',
            }
        },
    ]
})

router.beforeEach((to,from,next)=>{
    // 根据路由元信息设置文档标题
    if(to.meta.title=='首页'){
        window.document.title = store.state.title
    }
    else{
        window.document.title = to.meta.title+"-"+store.state.title
    }
    
    next()
  })
export default router