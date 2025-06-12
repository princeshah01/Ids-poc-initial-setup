import React from "react";
import Gradienttext from "@/components/ui/Gradienttext";
import { MoveRight } from "lucide-react";
import AnimatedTooltip from "@/components/ui/Animatedtooltip";
import { Marquee, Marqueeviewcard } from "@/components/ui/Marquee";
import { SiFastapi, SiKaggle, SiReact } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const MarqueeItems = [
  { icon: <SiFastapi size={30} />, text: "FastAPI" },
  { icon: <SiKaggle size={30} />, text: "Kaggle" },
  { icon: <SiReact size={30} />, text: "React" },
  {
    icon: false,
    text: "Yolo",
    logo: "https://assets-global.website-files.com/646dd1f1a3703e451ba81ecc/67d044caa316aa50fba40a08_Ultralytics_YOLO11_Logotype_Reverse.svg",
  },
];

const Projectoverview = () => {
  const navigate = useNavigate()
  return (
    <div className="m-5 flex flex-col justify-center items-center gap-15 mt-10">
      <div className="flex justify-center items-center ">
        <div className="w-full md:w-3/4 items-center flex flex-col mt-10 gap-10">
          <h1 className="w-full lg:w-3/5 text-lg opacity-90 md:text-3xl lg:text-5xl font-bold text-center text-black">
            Food Image <Gradienttext>Recognition</Gradienttext> Application
          </h1>
          <p className="w-full md:w-[75%] text-center text-sm font-normal opacity-70">
            This Food Recognition Application leverages computer vision and deep
            learning to identify and classify food items from images with high
            accuracy. Built using the YOLO (You Only Look Once) image
            classification model and trained on the Food-101 dataset—containing
            101,000 images across 101 food categories the system achieves an
            impressive accuracy range of 90% to 100%. Users can upload images
            for real-time analysis, and the model quickly processes them to
            deliver precise food identification, making it practical and
            efficient for real-world use.
          </p>
          <button onClick={()=>{
            navigate("/upload-image")
          }} className="items-center justify-center py-1 w-36 h-9 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-lg transition duration-200 flex group ">
            <span className="absolute  transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:scale-90">
              Get Started
            </span>
            <MoveRight className="absolute font-bold transition-all duration-300 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100" />
          </button>
        </div>
      </div>
      <div className=" w-full md:w-1/2 flex  flex-col-reverse gap-5 md:flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-sm opacity-70">Developed by</p>
          <div className="flex">
            <AnimatedTooltip items={people} />
          </div>
        </div>
        <div className="relative w-1/2 mt-5">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />
          <Marquee reverse repeat={4} pauseOnHover className="[--duration:20s]">
            {MarqueeItems.map((item,idx)=><Marqueeviewcard key={item.text+idx}>{item.icon ? item.icon : <img src={item.logo} className="w-[30px] invert"/>} <p className="text-lg">{item.text}</p> </Marqueeviewcard>)}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Projectoverview;
