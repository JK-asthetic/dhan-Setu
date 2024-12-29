import Breadcrumbs from "@/components/breadcrumb";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <Breadcrumbs parent="Dashboard" child="" />
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">HI</div>
      </div>
    </div>
  );
};

export default Dashboard;
