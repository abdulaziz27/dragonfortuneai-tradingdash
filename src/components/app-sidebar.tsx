import * as React from "react";
import {
  Activity,
  CandlestickChart,
  ChartSpline,
  Layers,
  ListFilter,
  Settings2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Abdul Aziz",
    email: "abdulaziz@traderhub.ai",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Trader Pro",
      logo: CandlestickChart,
      plan: "Pro",
    },
    {
      name: "Trader Basic",
      logo: ChartSpline,
      plan: "Basic",
    },
  ],
  navMain: [
    {
      title: "Workspace",
      url: "/workspace",
      icon: CandlestickChart,
      isActive: true,
      items: [
        {
          title: "Main Chart",
          url: "/workspace",
        },
      ],
    },
    {
      title: "Watchlists",
      url: "#",
      icon: Layers,
      items: [
        {
          title: "Crypto",
          url: "#",
        },
        {
          title: "Stocks",
          url: "#",
        },
        {
          title: "Forex",
          url: "#",
        },
      ],
    },
    {
      title: "Screeners",
      url: "#",
      icon: ListFilter,
      items: [
        {
          title: "Crypto Screener",
          url: "#",
        },
        {
          title: "Stock Screener",
          url: "#",
        },
        {
          title: "Strategy Builder",
          url: "#",
        },
      ],
    },
    {
      title: "Activity",
      url: "#",
      icon: Activity,
      items: [
        {
          title: "Alerts",
          url: "#",
        },
        {
          title: "Orders",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Account",
          url: "#",
        },
        {
          title: "Appearance",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "BTC · Binance",
      url: "#",
      icon: CandlestickChart,
    },
    {
      name: "ETH · Coinbase",
      url: "#",
      icon: CandlestickChart,
    },
    {
      name: "NASDAQ Futures",
      url: "#",
      icon: ChartSpline,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
