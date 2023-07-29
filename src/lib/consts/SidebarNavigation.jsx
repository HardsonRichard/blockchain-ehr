import {
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiDocumentAdd,
  HiHome,
  HiDocumentText,
  HiBriefcase,
  HiClipboard,
  HiClipboardCopy,
  HiIdentification,
  HiUsers,
  HiTable,
} from "react-icons/hi";

export const DASHBOARD_RECEPTIONIST_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "HOME",
    path: "/",
    icon: <HiHome />,
  },
  {
    key: "registration",
    label: "REGISTRATION",
    path: "/registration",
    icon: <HiIdentification />,
  },
  {
    key: "appointments",
    label: "APPOINTMENTS",
    path: "/appointments",
    icon: <HiBriefcase />,
  },
];

export const DASHBOARD_DOCTOR_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "HOME",
    path: "/",
    icon: <HiHome />,
  },
  {
    key: "addRecord",
    label: "ADD RECORD",
    path: "/addRecord",
    icon: <HiClipboardCopy />,
  },
  {
    key: "viewRecord",
    label: "VIEW RECORD",
    path: "/viewRecord",
    icon: <HiClipboard />,
  },
];

export const DASHBOARD_LABTECH_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "HOME",
    path: "/",
    icon: <HiHome />,
  },
  {
    key: "addTest",
    label: "ADD TEST",
    path: "/addTest",
    icon: <HiDocumentAdd />,
  },
];

export const DASHBOARD_PHARMACIST_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "HOME",
    path: "/",
    icon: <HiHome />,
  },
  {
    key: "addMedication",
    label: "ADD MEDICATION",
    path: "/addMedication",
    icon: <HiDocumentAdd />,
  },
];

export const DASHBOARD_ADMIN_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "HOME",
    path: "/",
    icon: <HiHome />,
  },
  {
    key: "users",
    label: "USERS",
    path: "/users",
    icon: <HiUsers />,
  },

];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
