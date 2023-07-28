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
  {
    key: "appointments",
    label: "APPOINTMENTS",
    path: "/doctorAppointments",
    icon: <HiBriefcase />,
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
    key: "orderedTest",
    label: "ORDERED TESTS",
    path: "/orderedTest",
    icon: <HiDocumentText />,
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
    key: "orderedMedication",
    label: "PRESCRIPTIONS",
    path: "/orderedMedication",
    icon: <HiDocumentText />,
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
  {
    key: "eventsLog",
    label: "EVENTS LOG",
    path: "/eventsLog",
    icon: <HiTable />,
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
