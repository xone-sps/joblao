import Home from '@/components/General/Home'
import Job from '@/components/General/Job'
import About from '@/components/General/About'
import CourseSingle from '@/components/General/Single/CourseSingle'
export default [
  {
    path:'/',
    component: Home,
    name:'home'
  },
  {
    path:'/job',
    component:Job,
    name: 'job',
  },
  {
    path:'/CourseSingle/:id',
    component:CourseSingle,
    name: 'coursesingle',
  },
  {
    path:'/about',
    component:About,
    name: 'about',
  },
]
