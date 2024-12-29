import React from "react";
import Breadcrumbs from "@/components/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, Briefcase, Shield } from "lucide-react";
import { MyPieChart } from "@/components/styled_charts/Pie-chart";
import MyLinechart from "@/components/styled_charts/line-chart";
import MyTable from "@/components/styled_charts/MyTable";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex h-16 shrink-0 items-center gap-2 bg-white px-4 shadow-sm">
        <Breadcrumbs parent="Portfolio" child="" />
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-6">
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="flex items-center p-6">
              <DollarSign className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Value</p>
                <h3 className="text-2xl font-bold">$245,890</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <TrendingUp className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Returns (YTD)
                </p>
                <h3 className="text-2xl font-bold text-green-500">+15.4%</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Briefcase className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Investments</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Shield className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Insurance</p>
                <h3 className="text-2xl font-bold">3 Policies</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <MyPieChart />

          <MyLinechart />
        </div>
        <MyTable />
      </div>
    </div>
  );
};

export default Portfolio;
