import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Categories",
    newTab: false,
    submenu: [
      {
        id: 331,
        title: "Médical et Santé",
        path: "/blog",
        newTab: false,
      },
      {
          id: 332,
          title: "Défenses des animaux",
          path: "/blog1",
          newTab: false,
      },
     {
        id: 333,
        title: "Soutien aux orphelins",
        path: "/blog",
        newTab: false,
     },
     {
        id: 334,
        title: "écoles et éducation",
        path: "/blog",
        newTab: false,
     },
     {
        id: 335,
        title: "Aide aux sinistrés",
        path: "/blog",
        newTab: false,
      },
    
  ],
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
      
       id: 431,
       title: "Médical et Santé",
       path: "/blog",
       newTab: false,
      },
     {
       id: 432,
       title: "Défenses des animaux",
       path: "/blog1",
       newTab: false,
     },
     {
      id: 433,
      title: "Soutien aux orphelins",
      path: "/blog",
      newTab: false,
     },
     {
       id: 434,
       title: "écoles et éducation",
       path: "/blog",
       newTab: false,
      },
      {
        id: 435,
        title: "Aide aux sinistrés",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
