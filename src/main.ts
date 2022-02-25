// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

const routes = setupLayouts(generatedRoutes)


// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
   
    /***
     * authored trian damai
     * this section have purpose for navigation guards 
     * every user should have login first before access 
     * 
    */
    ctx.router.beforeEach((to,from,next)=>{

      //todo: check if user has credential
      const isAuthenticated = false
      
      if(to.path == "/"){
        if(!isAuthenticated) return next({path:"/auth/login"})
       return next({path:"dashboard"})
      }
      
      //if the route needs auth
      if(to.meta.requiresAuth && !isAuthenticated){  
        return  next({
            path:"auth/login"
          })
      }

      //all passing
      return next()
    })
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
