import Home from "../views/Home/Home"
import Profile from "../views/Profile/Profile"
import Category from "../views/Category/Category"
import FindGoods from "../views/FindGoods/FindGoods"
import ShopCart from "../views/ShopCart/ShopCart"
import Search from "../views/Search/Search"
/*引入findgoods的子路由*/
import Tab0 from "../views/FindGoods/Tab0/Tab0"
import Tab1 from "../views/FindGoods/Tab1/Tab1"
import Tab2 from "../views/FindGoods/Tab2/Tab2"
import Tab3 from "../views/FindGoods/Tab3/Tab3"
import Tab4 from "../views/FindGoods/Tab4/Tab4"

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/category',
    component:Category,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/findgoods',
    component:FindGoods,
    children:[
      {
        path:'tab0',
        component:Tab0,
        meta:{
          isShowFooter:true
        }
      },
      {
        path:'tab1',
        component:Tab1,
        meta:{
          isShowFooter:true
        }
      },
      {
        path:'tab2',
        component:Tab2,
        meta:{
          isShowFooter:true
        }
      },
      {
        path:'tab3',
        component:Tab3,
        meta:{
          isShowFooter:true
        }
      },
      {
        path:'tab4',
        component:Tab4,
        meta:{
          isShowFooter:true
        }
      },
      {
        path:'',
        redirect:'/findgoods/tab0'
      }
    ],
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/home'
  }

]
