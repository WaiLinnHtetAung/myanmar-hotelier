import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/cec-members',
        name: 'CECMembers',
        component: () =>
            import ('@/views/CECmembers.vue')
    },
    {
        path: '/constitution',
        name: 'Constitution',
        component: () =>
            import ('@/views/Constitution.vue')
    },
    {
        path: '/fees',
        name: 'Fees',
        component: () =>
            import ('@/views/Fees.vue')
    },
    {
        path: '/benefits',
        name: 'Benefits',
        component: () =>
            import ('@/views/Benefit.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ('@/views/Contact.vue')
    },

    // ---------About us ----------- 
    {
        path: '/introduction',
        name: 'Introduction',
        component: () =>
            import ('@/views/AboutUs/Introduction.vue')
    },
    {
        path: '/vision-mission',
        name: 'VissionMission',
        component: () =>
            import ('@/views/AboutUs/VisionMission.vue')
    },
    {
        path: '/chairman-message',
        name: 'ChairmanMessage',
        component: () =>
            import ('@/views/AboutUs/ChairmanMessage.vue')
    },
    // -----end about us------ 
    {
        path: '/zones/:zoneName',
        name: 'Zone',
        component: () =>
            import ('@/views/zones/Yangon.vue'),
    },
    {
        path: '/hotel-member-form',
        name: 'HotelMemberForm',
        component: () =>
            import ('@/views/HotelMemberForm.vue')
    },
    {
        path: '/personal-member-form',
        name: 'PersonalMemberForm',
        component: () =>
            import ('@/views/PersonalMemberForm.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        component: () =>
            import ('@/views/404.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router