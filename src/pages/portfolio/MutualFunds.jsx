import React, { useState } from "react";
import Breadcrumbs from "@/components/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  ChevronDown,
  PieChart as PieChartIcon,
  Search,
  Filter,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import AddMutualFund from "../../components/AddMutualFund";

const MutualFunds = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fundName: "",
    fundCategory: "",
    purchaseAmount: "",
    purchaseDate: "",
    navAtPurchase: "",
    investmentType: "",
    riskLevel: "",
    folioNumber: "",
    fundHouse: "",
    sipFrequency: "",
    sipDate: "",
  });
  const [loading, setLoading] = useState(false);

  // Sample data for charts - this could be moved to a separate data file
  const overallDistribution = [
    {
      name: "Large Cap Funds",
      value: 45,
      amount: "₹5,62,500",
      color: "#4CAF50",
      returns: "+15.4%",
    },
    {
      name: "Mid Cap Funds",
      value: 30,
      amount: "₹3,75,000",
      color: "#2196F3",
      returns: "+18.2%",
    },
    {
      name: "Small Cap Funds",
      value: 15,
      amount: "₹1,87,500",
      color: "#FFC107",
      returns: "+21.5%",
    },
    {
      name: "Index Funds",
      value: 10,
      amount: "₹1,25,000",
      color: "#9C27B0",
      returns: "+12.8%",
    },
  ];

  // Individual fund data
  const funds = [
    {
      id: "fund-1",
      name: "Large Cap Growth Fund",
      category: "Large Cap",
      nav: "₹245.67",
      aum: "₹1,245 Cr",
      ytdReturn: "15.4%",
      risk: "Moderate",
      performance: [
        { month: "Jan", value: 100 },
        { month: "Feb", value: 105 },
        { month: "Mar", value: 103 },
        { month: "Apr", value: 108 },
        { month: "May", value: 112 },
        { month: "Jun", value: 115 },
      ],
      allocation: [
        { name: "Tech", value: 35, color: "#4CAF50" },
        { name: "Finance", value: 25, color: "#2196F3" },
        { name: "Healthcare", value: 20, color: "#FFC107" },
        { name: "Others", value: 20, color: "#9C27B0" },
      ],
    },
    {
      id: "fund-2",
      name: "Mid Cap Opportunities Fund",
      category: "Mid Cap",
      nav: "₹185.30",
      aum: "₹845 Cr",
      ytdReturn: "18.2%",
      risk: "High",
      performance: [
        { month: "Jan", value: 100 },
        { month: "Feb", value: 108 },
        { month: "Mar", value: 106 },
        { month: "Apr", value: 112 },
        { month: "May", value: 118 },
        { month: "Jun", value: 122 },
      ],
      allocation: [
        { name: "Consumer", value: 30, color: "#4CAF50" },
        { name: "Industrial", value: 28, color: "#2196F3" },
        { name: "Tech", value: 22, color: "#FFC107" },
        { name: "Others", value: 20, color: "#9C27B0" },
      ],
    },
    {
      id: "fund-3",
      name: "Small Cap Fund",
      category: "Small Cap",
      nav: "₹145.90",
      aum: "₹560 Cr",
      ytdReturn: "21.5%",
      risk: "Very High",
      performance: [
        { month: "Jan", value: 100 },
        { month: "Feb", value: 110 },
        { month: "Mar", value: 108 },
        { month: "Apr", value: 115 },
        { month: "May", value: 122 },
        { month: "Jun", value: 128 },
      ],
      allocation: [
        { name: "Manufacturing", value: 35, color: "#4CAF50" },
        { name: "Tech", value: 25, color: "#2196F3" },
        { name: "Retail", value: 20, color: "#FFC107" },
        { name: "Others", value: 20, color: "#9C27B0" },
      ],
    },
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateUnits = () => {
    if (formData.purchaseAmount && formData.navAtPurchase) {
      return (
        parseFloat(formData.purchaseAmount) / parseFloat(formData.navAtPurchase)
      ).toFixed(3);
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/mutual-funds", {
        ...formData,
        unitsAllocated: calculateUnits(),
      });

      if (response.status === 200) {
        setOpen(false);
        setFormData({}); // Reset form
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  const renderDistributionCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PieChartIcon className="h-5 w-5" />
          Mutual Funds Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={overallDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {overallDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid content-center">
            <div className="space-y-4">
              {overallDistribution.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.amount}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{item.value}%</p>
                    <p className="text-sm text-green-600">{item.returns}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex h-16 shrink-0 items-center gap-2 bg-white px-4 shadow-sm">
        <Breadcrumbs parent="Portfolio" child="Mutual Funds" />
        <div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="ml-auto">Add New Fund</Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl bg-white my-5">
              <DialogHeader>
                <DialogTitle>Register New Mutual Fund</DialogTitle>
              </DialogHeader>
              <AddMutualFund
                formData={formData}
                handleInputChange={handleInputChange}
                loading={loading}
                calculateUnits={calculateUnits}
                onCancel={() => setOpen(false)}
                onSubmit={handleSubmit}
              />
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-4 pt-6">
        {/* Overall Performance Card */}
        {renderDistributionCard()}

        {/* Funds Accordion */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Mutual Funds</CardTitle>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search funds..."
                    className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50">
                  <Filter className="h-4 w-4" />
                  Filters
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Table Header */}
            <div className="rounded-t-lg bg-gray-50 p-4 grid grid-cols-6 gap-4 font-medium text-sm text-gray-500">
              <div className="col-span-2">Fund Name</div>
              <div className="text-right">NAV</div>
              <div className="text-right">AUM</div>
              <div className="text-right">1Y Returns</div>
              <div className="text-right">Risk</div>
            </div>

            {/* Accordion within Table */}
            <div className="rounded-b-lg border border-gray-200">
              <Accordion type="single" collapsible className="divide-y">
                {funds.map((fund) => (
                  <AccordionItem
                    key={fund.id}
                    value={fund.id}
                    className="border-none"
                  >
                    <AccordionTrigger className="hover:bg-gray-50 px-4 py-4">
                      <div className="grid grid-cols-6 gap-4 w-full">
                        <div className="col-span-2">
                          <p className="font-medium text-left">{fund.name}</p>
                          <p className="text-sm text-gray-500">
                            {fund.category}
                          </p>
                        </div>
                        <div className="text-right">{fund.nav}</div>
                        <div className="text-right">{fund.aum}</div>
                        <div className="text-right text-green-600">
                          {fund.ytdReturn}
                        </div>
                        <div className="text-right">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              fund.risk === "High"
                                ? "bg-red-100 text-red-800"
                                : fund.risk === "Moderate"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {fund.risk}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-4 py-4 bg-gray-50">
                        <div className="grid gap-6 md:grid-cols-2">
                          {/* Fund Performance Chart */}
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-sm">
                                Performance History
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                  <LineChart data={fund.performance}>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                      type="monotone"
                                      dataKey="value"
                                      stroke="#2196F3"
                                      strokeWidth={2}
                                    />
                                  </LineChart>
                                </ResponsiveContainer>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Sector Allocation Chart */}
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-sm">
                                Sector Allocation
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                  <PieChart>
                                    <Pie
                                      data={fund.allocation}
                                      cx="50%"
                                      cy="50%"
                                      innerRadius={60}
                                      outerRadius={80}
                                      paddingAngle={5}
                                      dataKey="value"
                                    >
                                      {fund.allocation.map((entry, index) => (
                                        <Cell
                                          key={`cell-${index}`}
                                          fill={entry.color}
                                        />
                                      ))}
                                    </Pie>
                                    <Tooltip />
                                  </PieChart>
                                </ResponsiveContainer>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MutualFunds;
