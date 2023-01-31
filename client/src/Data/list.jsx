import {AiOutlineStock} from "react-icons/ai";
import * as RiIcons from 'react-icons/ri';
import * as IconName  from "react-icons/fa";
import { GrCubes} from "react-icons/gr";
import  {IoEllipsisVerticalSharp,IoEnterOutline} from "react-icons/io5";
export const MiddleSideBarList = [
    {
        id:1,
        name:"Stock",
        svg: <IconName.FaCubes className="sidebar-icon"/>,
        submenu:[
            {
                id:1,
                name:"Information",
                svg: <IoEllipsisVerticalSharp className="sidebar-icon"/>,
                iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
                classfication:[
                    {
                        id:1,
                        name:"OrganizationIstitution",
                        path:"PropertyInformationRegistration",
                        svg: <IoEnterOutline className="sidebar-icon"/>,
                    },
                    {
                        id:2,
                        name:"Employee",
                        Title:"(supplier | deliverer)",
                        path:"/employe",
                        svg: <IoEnterOutline className="sidebar-icon"/>,
                    },
                  
                    {
                        id:3,
                        name:"PropertyI",
                        path:"PropertyRegistration",
                        svg: <IoEnterOutline className="sidebar-icon"/>,
                    },
                    {
                        id:4,
                        name:"Propertyclassification",
                        path:"PropertyRegistration",
                        svg: <IoEnterOutline className="sidebar-icon"/>,
                    },
                ],
            },
            {
                id:2,
                name:"Income",
                svg: <IoEllipsisVerticalSharp className="sidebar-icon"/>,
                iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
                classfication:[
                    {
                        id:1,
                        name:"Fixed",
                        Title:"Model 19ሀ",
                        path:"Immovableproperty",
                        svg: <IoEnterOutline className="sidebar-icon"/>,
                    },
                    {
                        id:2,
                        name:"PropertyII",
                        Title:"Model 19ለ",
                        path:"PropertyInformationRegistration",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                    },
                    {
                        id:3,
                        name:"propertyIII",
                        Title:"Model 19ሐ",
                        path:"PropertyRegistration",
                        svg: <IoEnterOutline className="sidebar-icon"/>,
                    },
                    {
                        id:4,
                        name:"Adjustment",
                        Title:"Model 19መ",
                        path:"Adjustment",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                    },
                ],  
            },
            {
                id:3,
                name:"Cost",
                svg: <IoEllipsisVerticalSharp className="sidebar-icon"/>,
                iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,   
                classfication:[
                    {
                        id:1,
                        name:"Fixed",
                        Title:"Model 19ሀ",
                        path:"CostImmovableproperty",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                        
                    },
                    {
                        id:2,
                        name:"PropertyII",
                        Title:"Model 19ለ",
                        path:"CostPropertyInformationRegistration",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                    },
                    {
                        id:3,
                        name:"propertyIII",
                        Title:"Model 19ሐ",
                        path:"CostPropertyRegistration",
                        svg: <IoEnterOutline className="sidebar-icon"/>,  
                    },
                    {
                        id:4,
                        name:"Adjustment",
                        Title:"Model 19መ",
                        path:"CostAdjustment",
                        svg: <IoEnterOutline className="sidebar-icon"/>,  
                    },
                ],  
            },
        ]
    },
    {
        id:2,
        name:"Fixed",
        svg: <IconName.FaCoins className="sidebar-icon"/>, 
        submenu:[
            {
                id:1,
                name:"InformationRegister",
                path:"Fixedincome",
                svg: <IoEllipsisVerticalSharp className="sidebar-icon"/>,
                iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,   
                classfication:[
                    {
                        id:1,
                        name:"CategorySource",
                        Title:"Model 19ሀ",
                        path:"CostImmovableproperty",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                        
                    },
                    {
                        id:2,
                        name:"IdentificationNumber",
                        Title:"Model 19ለ",
                        path:"CostPropertyInformationRegistration",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                    },
                ],  
                  
            },
            {
                id:2,
                name:"PropertyInventory",
                path:"Fixedcost",
                svg: <IoEllipsisVerticalSharp className="sidebar-icon"/>,
                iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />, 
                classfication:[
                    {
                        id:1,
                        name:"InventoryFixedAssets",
                        Title:"Model 19ሀ",
                        path:"CostImmovableproperty",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                        
                    }]  
            },
            {
                id:3,
                name:"propertyIII",
                path:"Fixedused",
                svg: <IoEllipsisVerticalSharp className="sidebar-icon"/>,
                iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />, 
                classfication:[
                    {
                        id:1,
                        name:"FAOU",
                        Title:"Model 19ሀ",
                        path:"CostImmovableproperty",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                        
                    },
                    {
                        id:2,
                        name:"FAOUIC",
                        Title:"Model 19ሀ",
                        path:"CostImmovableproperty",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                        
                    },
                    {
                        id:3,
                        name:"FAOUC",
                        Title:"Model 19ሀ",
                        path:"CostImmovableproperty",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                        
                    },
                    {
                        id:4,
                        name:"FAOUS",
                        Title:"Model 19ሀ",
                        path:"CostImmovableproperty",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                        
                    },
                    {
                        id:5,
                        name:"FAOUM",
                        Title:"Model 19ሀ",
                        path:"CostImmovableproperty",
                        svg: <IoEnterOutline className="sidebar-icon"/>, 
                        
                    },
                ]  
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
