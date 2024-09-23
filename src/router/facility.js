import { createRouter, createWebHistory } from "vue-router";
import Facility from "@/pages/Facility.vue";
import foodstand from "@/components/foodstand.vue";
import giftshop from "@/components/giftshop.vue";
import guestservices from "@/components/guestservices.vue";

const routes = [
  {
    path: "/",
    name: "Facility",
    component: Facility,
  },

  {
    path: "/foodstand",
    name: "foodstand",
    component: foodstand,
  },

  { path: "/giftshop", name: "giftshop", component: giftshop },

  {
    path: "/guestservices",
    name: "guestservices",
    component: guestservices,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
