import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { LogOut, BookOpenText, ImageUp } from "lucide-react";
import { motion } from "motion/react";
import { Outlet } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/provider/AuthProvider";
export function MainLayout() {
  const navigate = useNavigate();
  const { name, logout } = useAuth();
  const links = [
    {
      label: "Project Overview",
      onClick: () => {
        navigate("/");
      },
      icon: (
        <BookOpenText className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Upload Image",
      onClick: () => {
        console.log("navigate");
        navigate("/upload-image");
      },
      icon: (
        <ImageUp className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      onClick: () => {
        logout();
      },
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
          <SidebarBody
            projectName="Food Recognization"
            className="justify-between ml-2 gap-10 h-full"
          >
            <div></div>
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
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
                  label: name,
                  href: "#",
                  icon: (
                    <img
                      loading="lazy"
                      src={`https://ui-avatars.com/api/?name=${name}`}
                      className="h-7 w-7 shrink-0 rounded-full object-cover"
                      width={30}
                      height={30}
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
        <header className="w-full h-16 bg-white flex justify-end items-center pr-2 md:pr-10">
          <div className="px-5 static md:absolute -left-3 top-4 ">
            <Logo open={open} />
          </div>
          <h1 className="font-semibold text-lg uppercase hidden md:block">
            Food Recognition
          </h1>
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
