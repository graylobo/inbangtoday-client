import {
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const menuList = {
  excel: {
    name: "엑셀",
    route: "/afreeca/excel",
    icon: UserOutlined,
    submenu: {
      gwangsang: {
        name: "광우상사",
        route: "/afreeca/excel/gwangsang",
        icon: NotificationOutlined,
        submenu: {
          organization: {
            name: "조직도",
            route: "/afreeca/excel/gwangsang/organization",
          },
          live: {
            name: "라이브",
            route: "/afreeca/excel/gwangsang/live",
          },
        },
      },
      c9: {
        name: "씨나인",
        route: "/afreeca/excel/c9",
        submenu: {
          organization: {
            name: "조직도",
          },
          live: {
            name: "라이브",
          },
        },
      },
      the_k: {
        name: "더케이",
        route: "/afreeca/excel/the-k",
        submenu: {
          organization: {
            name: "조직도",
          },
          live: {
            name: "라이브",
          },
        },
      },
    },
  },
  starcraft: {
    name: "스타크래프트",
    route: "/afreeca/starcraft",
  },
};
