import Home from '@/components/General/Home'
import Job from '@/components/General/Job'
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
    path:'/CourseSingle',
    component:CourseSingle,
    name: 'coursesingle',
  }
]
