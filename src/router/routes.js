import Home from "../views/Home/Home"
import Profile from "../views/Profile/Profile"
import Category from "../views/Category/Category"
import FindGoods from "../views/FindGoods/FindGoods"
import ShopCart from "../views/ShopCart/ShopCart"

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
    path:'/',
    redirect:'/home'
  }

]
