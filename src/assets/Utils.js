export const Menus = [
  {
    name: "About",
    path:'/about',
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Chairman's Message",
        path:'/about/chairman-msg',
       
      },
      {
        name: "Trustee's Message",
        path:'/about/trustee-msg',
      },
      {
        name: "Vice Principal's Message",
        path:'/about/vice-principal-msg',
      },
      {
        name: "Institute Vision & Mission",
        path:'/about/vision-mission',
      },
      {
        name:'Code Of Conduct',
        path:'/about/code-of-conduct'
      }
    ],
    gridCols: 4,
  },
  {
    name: "Academics",
    path:'/academics',
    subMenu: [
      {
        name: "Academic Calendar",
        path:'/academics/calendar',
      },
      {
        name: "Commities",
       path:'/academics/commities',
      },
      {
        name: "Achievements",
        path:'/academics/achievements',
      },
    ],
    gridCols: 1,
  },
  {
    name: "Departments",
    path:'/departments',
    subMenuHeading: ["Get started", "Programs", "Recent"],
    subMenu: [
      {
        name: "UnderGraduate",
        path:'/departments',
      },
      {
        name: "PostGraduate",
        path:'/departments',
      },
      {
        name: "PHD Courses",
        path:'/departments',
      },
     
    ],
  },
  {
    name: "Campus",
    path:'/campus',
    // subMenuHeading: ["Get started", "Programs", "Recent"],
    // subMenu: [
    //   {
    //     name: "Markplace",
    //     desc: "Browse templates",
    //     // icon: ShoppingBag,
    //   },
    //   {
    //     name: "Meetups",
    //     desc: "Upcoming events",
    //     // icon: MapPin,
    //   },
    //   {
    //     name: "Updates",
    //     desc: "Changelog",
    //     // icon: BellDot,
    //   },
    //   {
    //     name: "Academy",
    //     desc: "Watch lessions",
    //     // icon: Play,
    //   },
    //   {
    //     name: "Blog",
    //     desc: "Posts",
    //     // icon: BookOpenText,
    //   },
    //   {
    //     name: "Figma",
    //     desc: "Plugin",
    //     // icon: Figma,
    //   },
    //   {
    //     name: "Experts",
    //     desc: "Jobs",
    //     // icon: BriefcaseBusiness,
    //   },
    //   {
    //     name: "Gallery",
    //     desc: "Images",
    //     // icon: Images,
    //   },
    // ],
    // gridCols: 3,
  },
 
  {
    name: "Admission",
    path:'/admission',
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
       
      },
      {
        name: "Collaboration",
        
      },
      {
        name: "Customers",
       
      },
      {
        name: "Security",
        
      },
    ],
    gridCols: 2,
  },
  {
    name: "Placements",
    path:'/placements',
  }, 
  {
    name:'Students Activity',
    path:'/students-activity'
  },
  {
    name:'Alumni',
    path:'/alumni'
  },
  {
    name: "Contact",
    path:'/contact',
  },
];