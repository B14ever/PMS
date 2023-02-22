import { AiOutlineStock } from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as IconName from "react-icons/fa";
import { IoEllipsisVerticalSharp, IoEnterOutline } from "react-icons/io5";
export const MiddleSideBarList = [
  {
    id: 1,
    name: "Organization",
    svg: <IconName.FaLandmark className="sidebar-icon" />,
    submenu: [
      {
        id: 1,
        name: "Structure",
        svg: <IoEllipsisVerticalSharp className="sidebar-icon" />,
        iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
        classfication: [
          {
            id: 1,
            name: "Office",
            path: "/Office",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 2,
            name: "Department",
            path: "/Department",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },

          {
            id: 3,
            name: "DepartmentType",
            path: "/Departmenttype",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 4,
            name: "Employee",
            Title: "(supplier | deliverer)",
            path: "/employe",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Stock",
    svg: <IconName.FaCubes className="sidebar-icon" />,
    submenu: [
      {
        id: 1,
        name: "Information",
        svg: <IoEllipsisVerticalSharp className="sidebar-icon" />,
        iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
        classfication: [
          {
            id: 1,
            name: "OrganizationIstitution",
            path: "/OrganizationIstitution",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 2,
            name: "Property",
            path: "/Propertyinventory",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 3,
            name: "Propertyclassification",
            path: "/Propertyclassification",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
        ],
      },
      {
        id: 2,
        name: "Income",
        svg: <IoEllipsisVerticalSharp className="sidebar-icon" />,
        iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
        classfication: [
          {
            id: 1,
            name: "Fixed",
            Title: "Model 19ሀ",
            path: "/FixedIncome",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 2,
            name: "PropertyII",
            Title: "Model 19ለ",
            path: "/RareItemIncome",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 3,
            name: "propertyIII",
            Title: "Model 19ሐ",
            path: "/UsedProrpertIncome",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 4,
            name: "Adjustment",
            Title: "Model 19መ",
            path: "/IncomeAdjustment",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
        ],
      },
      {
        id: 3,
        name: "Cost",
        svg: <IoEllipsisVerticalSharp className="sidebar-icon" />,
        iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
        classfication: [
          {
            id: 1,
            name: "Fixed",
            Title: "Model 19ሀ",
            path: "/FixedCost",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 2,
            name: "PropertyII",
            Title: "Model 19ለ",
            path: "/RareItemCost",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 3,
            name: "propertyIII",
            Title: "Model 19ሐ",
            path: "/UsedPropertyCost",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 4,
            name: "Adjustment",
            Title: "Model 19መ",
            path: "/CostAdjustment",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Fixed",
    svg: <IconName.FaCoins className="sidebar-icon" />,
    submenu: [
      {
        id: 1,
        name: "InformationRegister",
        svg: <IoEllipsisVerticalSharp className="sidebar-icon" />,
        iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
        classfication: [
          {
            id: 1,
            name: "CategorySource",
            Title: "Model 19ሀ",
            path: "/CategorySourceFunding",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 2,
            name: "IdentificationNumber",
            Title: "Model 19ለ",
            path: "/IdentificationNumber",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
        ],
      },
      {
        id: 2,
        name: "PropertyInventory",
        svg: <IoEllipsisVerticalSharp className="sidebar-icon" />,
        iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
        classfication: [
          {
            id: 1,
            name: "InventoryFixedAssets",
            Title: "Model 19ሀ",
            path: "/PropertyInventory",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
        ],
      },
      {
        id: 3,
        name: "Report",
        svg: <IoEllipsisVerticalSharp className="sidebar-icon" />,
        iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
        classfication: [
          {
            id: 1,
            name: "FAOU",
            Title: "Model 19ሀ",
            path: "/FixedAssetsOfUsers",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 2,
            name: "FAOUIC",
            Title: "Model 19ሀ",
            path: "/FixedAssetsOfUsersIAndC",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 3,
            name: "FAOUC",
            Title: "Model 19ሀ",
            path: "/InventoryUsersProperty",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 4,
            name: "FAOUS",
            Title: "Model 19ሀ",
            path: "/FixedAssetDiscountRate",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
          {
            id: 5,
            name: "FAOUM",
            Title: "Model 19ሀ",
            path: "/FixedAssetAccountReport",
            svg: <IoEnterOutline className="sidebar-icon" />,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "vechiles",
    svg: <IconName.FaTruckMonster className="sidebar-icon" />,
    submenu: [
      {
        id: 1,
        name: "Vehiclelist",
        path: "/Vehiclelist",
        svg: <IoEnterOutline className="sidebar-icon" />,
      },
    ],
  },
];
export const BottomSideBarList = [
  {
    id: 1,
    name: "Setting",
    svg: <AiOutlineStock className="sidebar-icon" />,
  },
  {
    id: 2,
    name: "Manual",
    svg: <AiOutlineStock className="sidebar-icon" />,
  },
];
