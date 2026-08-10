"use client";

import * as React from "react";
import {
  Database,
  Search,
  LayoutGrid,
  Star,
  Users,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";
import sidebarLogo from "@/public/images/sideabr-logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const navData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/project-manager",
      icon: LayoutGrid,
    },
    {
      title: "Job Dashboard ",
      url: "/project-manager/job-dashboard",
      icon: Users,
    },
    {
      title: "Right-On Inspections",
      url: "/project-manager/inspections",
      icon: Users,
    },
    {
      title: "Vendor Performance ",
      url: "/project-manager/vendor-performance",
      icon: Star,
    },
    {
      title: "Open Deficiencies",
      url: "/project-manager/open-deficiencies",
      icon: Database,
    },
    {
      title: "Inspection History",
      url: "/project-manager/inspection-history",
      icon: Search,
    },
  ],
};

export function ProjectManagerSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();

  const router = useRouter();

  const handleLogout = () => {
    router.push("/sign-in");
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      {state !== "collapsed" && (
        <SidebarHeader className=" bg-[#0F172A] p-3 items-center justify-center">
          <Image
            src={sidebarLogo}
            alt="logo"
            width={160}
            height={50}
            suppressHydrationWarning
          />
        </SidebarHeader>
      )}
      <SidebarContent className="pt-5 bg-[#0F172A]">
        <NavMain items={navData.navMain} />
      </SidebarContent>
      {state !== "collapsed" && (
        <SidebarFooter className=" p-3 bg-[#000000]">
          <Button
            onClick={handleLogout}
            className="cursor-pointer text-[#ffffff] text-[18px] w-full hover:bg-[#56606d] rounded-4xl flex justify-center items-center gap-4 py-2 mt-4 "
          >
            <LogOut className="size-5" />
            Logout
          </Button>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
