import React from "react";
import { Button, Link, Input } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="w-full flex justify-between bg-[#ede7f9] p-20 mt-32">
      <div className="w-1/2 flex flex-col">
        <img src="/tm-logo-full.png" alt="logo" className="w-56" />
        <span className="ml-2 w-[70%] text-slate-500">
          Our mission is to connect like-minded people like never before
        </span>
      </div>
      <div className="flex flex-col text-lg">
        <span className="font-semibold">Subscribe to our newsletter</span>
        <span className="font-light mt-2 w-2/3 text-slate-500">
          For product announcements and exclusive insights
        </span>
        <div className="flex flex-col gap-3 mt-5">
          <Input
            isRequired
            type="name"
            label="Name"
            placeholder="Your Name"
            radius="sm"
            className="max-w-sm border-[1.5px] border-slate-300 rounded-lg"
          />
          <Input
            isRequired
            type="email"
            label="Email"
            placeholder="your@email.com"
            radius="sm"
            className="max-w-sm border-[1.5px] border-slate-300 rounded-lg"
          />
          <Button
            as={Link}
            href="#"
            size="lg"
            radius="sm"
            className="bg-[#5013AF] w-1/3 tracking-normal text-white"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
