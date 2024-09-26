import { createRouter, createWebHistory } from "vue-router";
import Facility from "@/pages/Facility.vue";
import foodstand from "@/components/foodstand.vue";
import giftshop from "@/components/giftshop.vue";
import guestservices from "@/components/guestservices.vue";

const facilityRoutes = [
  {
    path: "/Facility",
    redirect:"/Facility/foodstand",
    name: "Facility",
    component: Facility,
    children:[
      {
        path:"foodstand",
        // name:"foodstand",
        component:foodstand
      },
      {
        path:'giftshop',
        name:"giftshop",
        component:giftshop
      },
      {
        path:"guestservices",
        name:"guestservices",
        component:guestservices
      }
    ]
  },
];

// const facilityRoutes = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

export default facilityRoutes;
