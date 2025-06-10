import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { LayoutDashboard, LogOut } from "lucide-react";
import { motion } from "motion/react";
import { Outlet } from "react-router-dom";
import { Logo } from "../ui/Logo";

export function MainLayout() {
  const links = [
    {
      label: "Project name",
      // href: "/",
      onClick: () => {
        console.log("navigate");
      },
      icon: (
        <LayoutDashboard className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <LogOut className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="flex-shrink-0">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between ml-3 gap-10 h-full">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              <Logo open={open} />
              <div className="mt-8 ml-1 flex flex-col gap-2 items-start">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                hover={false}
                link={{
                  label: "Prince Raj",
                  href: "#",
                  icon: (
                    <img
                    loading="lazy"
                      src="https://prince.info.np/static/media/prince.71204db128ccdbebba5c.png"
                      className="h-9 w-9 shrink-0 rounded-full object-cover"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
      </div>
      <div className="flex-1 overflow-auto">
        <header className="w-full h-16 bg-white flex justify-end items-center px-10">
          <h1 className="font-semibold text-lg uppercase">Project_name</h1>
        </header>
        <div className="h-[91%] w-full rounded-l-lg bg-slate-50 overflow-x-hidden p-2">
          <div className="bg-white w-full h-[100%] overflow-auto rounded-xl shadow-sm">
          <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
