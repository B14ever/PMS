import {AiOutlineStock} from "react-icons/ai";
import * as biIcon from "react-icons/bi";
import * as RiIcons from 'react-icons/ri';
export const MiddleSideBarList = [
    {
        id:1,
        name:"Stock",
        svg: <AiOutlineStock className="sidebar-icon"/>, 
        iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
        submenu:[
            {
                id:1,
                name:"Information",
                svg: <AiOutlineStock className="sidebar-icon"/>,
                iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
                classfication:[
                    {
                        id:1,
                        name:"Employee",
                        Title:"(supplier | deliverer)",
                        path:"/employe",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                    {
                        id:2,
                        name:"Property",
                        path:"PropertyInformationRegistration",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                    {
                        id:3,
                        name:"PropertyI",
                        path:"PropertyRegistration",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                ],
            },
            {
                id:2,
                name:"Income",
                svg: <AiOutlineStock className="sidebar-icon"/>,
                iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
                classfication:[
                    {
                        id:1,
                        name:"Fixed",
                        Title:"Model 19ሀ",
                        path:"Immovableproperty",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                    {
                        id:2,
                        name:"PropertyII",
                        Title:"Model 19ለ",
                        path:"PropertyInformationRegistration",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                    {
                        id:3,
                        name:"propertyIII",
                        Title:"Model 19ሐ",
                        path:"PropertyRegistration",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                    {
                        id:4,
                        name:"Adjustment",
                        Title:"Model 19መ",
                        path:"Adjustment",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                ],  
            },
            {
                id:3,
                name:"Cost",
                svg: <AiOutlineStock className="sidebar-icon"/>,
                iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,   
                classfication:[
                    {
                        id:1,
                        name:"Fixed",
                        Title:"Model 19ሀ",
                        path:"CostImmovableproperty",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                    {
                        id:2,
                        name:"PropertyII",
                        Title:"Model 19ለ",
                        path:"CostPropertyInformationRegistration",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                    {
                        id:3,
                        name:"propertyIII",
                        Title:"Model 19ሐ",
                        path:"CostPropertyRegistration",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                    {
                        id:4,
                        name:"Adjustment",
                        Title:"Model 19መ",
                        path:"CostAdjustment",
                        svg: <AiOutlineStock className="sidebar-icon"/>,  
                    },
                ],  
            },
        ]
    },
    {
        id:2,
        name:"Fixed",
        svg: <AiOutlineStock className="sidebar-icon"/>,
        iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,  
        submenu:[
            {
                id:1,
                name:"Income",
                path:"Fixedincome",
                svg: <AiOutlineStock className="sidebar-icon"/>,  
            },
            {
                id:2,
                name:"Cost",
                path:"Fixedcost",
                svg: <AiOutlineStock className="sidebar-icon"/>,  
            },
            {
                id:3,
                name:"propertyIII",
                path:"Fixedused",
                svg: <AiOutlineStock className="sidebar-icon"/>,  
            },
        ],
    },
  
];
export const BottomSideBarList =[
    {
        id:1,
        name:"Setting",
        svg:<AiOutlineStock className="sidebar-icon"/>
    },
    {
        id:2,
        name:"Manual",
        svg: <AiOutlineStock className="sidebar-icon"/>
    }
]