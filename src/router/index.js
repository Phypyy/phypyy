import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../view/HomeView.vue"
import WorkView from "../view/WorkView.vue"
import Project from "../view/Project.vue";
import Unburn from "../projects/Unburn.vue";
import HRIS from "../projects/HRIS.vue";
import PDFviewer from '../projects/PDF viewer.vue'
import Comy from '../projects/Comy.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            redirect: '/home',
        },
        {
            path: "/home",
            name: "home",
            component: HomeView
        },
        {
            path: "/work",
            name: "work",
            component: WorkView
        },
        {
            path: "/projects/unburn",
            name: "Unburn",
            component: Unburn,
        },
        {
            path: "/projects/hris",
            name: "HRIS",
            component: HRIS,
        },
        {
            path: "/projects/PDF%20viewer",
            name: "PDF viewer",
            component: PDFviewer,
        },
        {
            path: "/projects/PDF viewer",
            redirect: '/projects/PDF%20viewer',
        },
        {
            path: "/projects/Comy",
            name: "Comy",
            component: Comy,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // เลื่อนไปที่ด้านบนสุดเมื่อมีการเปลี่ยนหน้า
        return { top: 0 }
    },
});

export default router;