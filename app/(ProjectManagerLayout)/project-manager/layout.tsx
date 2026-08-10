"use client"
import { usePathname } from "next/navigation";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { ProjectManagerSidebar } from "@/components/project-manager/projectmanager-sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

    // Format the pathname to a readable title
    const getPageTitle = () => {
        if (pathname === "/project-manager") return "Dashboard";

        const segments = pathname.split("/").filter(Boolean);
        const lastSegment = segments[segments.length - 1];

        // Convert kebab-case to Title Case
        return lastSegment
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };
    

  return (
    <SidebarProvider>
      <ProjectManagerSidebar></ProjectManagerSidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b-4 border-[#F2A11E] transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12" style={{ backgroundColor: '#FFFFFF', color: '#f8f9fa' }}>
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-6"
            />
            <Breadcrumb className="font-semibold text-slate-200 hover:text-slate-100">
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Superintendent Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-[#1d1717]">{getPageTitle()}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex-1 w-full">
          {children}
        </main>
      </SidebarInset>
     
    </SidebarProvider>
  )
}