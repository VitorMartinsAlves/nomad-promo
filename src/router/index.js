import { createWebHistory, createRouter } from "vue-router"
import Home from "../components/Home.vue"
import Ferias from "../components/pages/Ferias.vue"
import WorkStudy from "../components/pages/WorkStudy.vue"
import Business from "../components/pages/Business.vue"
import Executives from "../components/pages/Executives.vue"
import HighSchool from "../components/pages/HighSchool.vue"
import Family from "../components/pages/Family.vue"
import ParaAprender from "../components/pages/ParaAprender.vue"
import Thankyou from "../components/pages/Thankyou.vue"
import Cultura from "../components/pages/Cultura.vue"
import Curriculo from "../components/pages/Curriculo.vue"
import AgendaConsultoria from "../components/pages/Agenda.vue" // Importe o novo componente
import Agenda from "../components/pages/Agenda.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        // temporario 
        // component: Agenda,
    },
    {
        path: "/programa-de-ferias",
        name: "Ferias",
        component: Ferias,
    },
    {
        path: "/work-study",
        name: "WorkStudy",
        component: WorkStudy,
    },
    {
        path: "/business-english",
        name: "Business",
        component: Business,
    },
    {
        path: "/english-for-executives",
        name: "Executives",
        component: Executives,
    },
    {
        path: "/high-school",
        name: "HighSchool",
        component: HighSchool,
    },
    {
        path: "/family-program",
        name: "Family",
        component: Family,
    },
    {
        path: "/aprender-um-novo-idioma",
        name: "ParaAprender",
        component: ParaAprender,
    },
    {
        path: "/thankyou",
        name: "Thankyou",
        component: Thankyou,
    },
    {
        path: "/conhecer-uma-nova-cultura",
        name: "Cultura",
        component: Cultura,
    },
    {
        path: "/melhorar-o-curriculo",
        name: "Curriculo",
        component: Curriculo,
    },
    {
        path: "/agendamento-consultoria", // Nova rota para o componente de agendamento
        name: "AgeAgenda",
        component: AgendaConsultoria,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
});

export default router;