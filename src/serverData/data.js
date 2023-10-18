const navigationMenu = [
    {
        id:1,
        icon:<i className="fa fa-dashcube" aria-hidden="true"></i>,
        title:"Dashboard",
        href:"/"
    },
    {
        id:2,
        icon:<i className="fa fa-product-hunt" aria-hidden="true"></i>,
        title:"Product",
        href:""
    },
    {
        id:3,
        icon:<i className="fa fa-users" aria-hidden="true"></i>,
        title:"Customers",
        href:""
    },
    {
        id:4,
        icon:<i className="fa fa-money" aria-hidden="true"></i>,
        title:"Income",
        href:""
    },
    {
        id:5,
        icon:<i className="fa fa-percent" aria-hidden="true"></i>,
        title:"Promote",
        href:""
    },
    {
        id:6,
        icon:<i className="fa fa-comments-o" aria-hidden="true"></i>,
        title:"Help",
        href:""
    }
];

const dashboardVisulization = [
    {
        id:1,
        title:"Earning",
        icon:<i className="fa fa-usd" aria-hidden="true"></i>,
        icon_color:"#00a746",
        icon_background:"#ddffec",
        data:"198",
        monthData:"37.8%"
    },
    {
        id:2,
        title:"Orders",
        icon:<i className="fa fa-file-text-o" aria-hidden="true"></i>,
        icon_color:"#a200ff",
        icon_background:"#e7dbff",
        data:"2.4",
        monthData:"2%"
    },
    {
        id:3,
        title:"Balence",
        icon:<i className="fa fa-balance-scale" aria-hidden="true"></i>,
        icon_color:"#0557bf",
        icon_background:"#ccf2ff",
        data:"2.4",
        monthData:"2%"
    },
    {
        id:4,
        title:"Total Sales",
        icon:<i className="fa fa-shopping-bag" aria-hidden="true"></i>,
        icon_color:"#d80014",
        icon_background:"#ffbde1",
        data:"89",
        monthData:"11%"
    },
    {
        id:5,
        title:"Earning",
        icon:<i className="fa fa-usd" aria-hidden="true"></i>,
        icon_color:"#00a746",
        icon_background:"#ddffec",
        data:"198",
        monthData:"37.8%"
    },
    {
        id:6,
        title:"Orders",
        icon:<i className="fa fa-file-text-o" aria-hidden="true"></i>,
        icon_color:"#a200ff",
        icon_background:"#e7dbff",
        data:"2.4",
        monthData:"2%"
    },
]

const barGraph = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        data: [10, 12, 14, 9, 8, 10,12,16,15,14,10,12],
        backgroundColor: [
            'rgba(242,239,255,255)',
            'rgba(242,239,255,255)',
            'rgba(242,239,255,255)',
            'rgba(242,239,255,255)',
            'rgba(242,239,255,255)',
            'rgba(242,239,255,255)',
            'rgba(242,239,255,255)',
            'rgba(90,50,234,255)',
            'rgba(242,239,255,255)',
            'rgba(242,239,255,255)',
            'rgba(242,239,255,255)',
            'rgba(242,239,255,255)'
          ],
      },
    ],

  }

  const pieGraph = {
    datasets: [
      {
        data: [15,25,60],
        backgroundColor: [
            'rgba(241,239,252,255)',
            'rgba(244,56,153,255)',
            'rgba(100,60,234,255)'
          ],
      },
    ],

  }

export {navigationMenu, dashboardVisulization, barGraph, pieGraph}