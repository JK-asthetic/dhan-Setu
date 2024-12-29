import React from "react";
import Breadcrumbs from "@/components/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, PieChart, LineChart, BarChart } from "lucide-react";

const InvestmentsPage = () => {
  const sections = [
    {
      title: "Understanding Investment Basics",
      content: "Investing is the act of committing money or capital to an endeavor with the expectation of obtaining additional income or profit. Unlike saving, investing typically involves some level of risk, but it also offers the potential for higher returns. Success in investing comes from making informed decisions based on thorough research and understanding of various investment vehicles.",
      image: "/api/placeholder/600/400",
      icon: TrendingUp
    },
    {
      title: "Types of Investment Vehicles",
      content: "Different investment vehicles cater to varying risk appetites and financial goals. Stocks represent ownership in companies and can offer high returns but come with higher risks. Bonds are generally lower-risk, fixed-income investments. Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities.",
      image: "/api/placeholder/600/400",
      icon: PieChart
    },
    {
      title: "Market Analysis & Strategy",
      content: "Successful investing requires understanding market dynamics and developing a sound strategy. This includes technical analysis - studying price movements and patterns, and fundamental analysis - evaluating a company's intrinsic value through financial statements and economic indicators. A well-planned strategy helps navigate market volatility and achieve long-term goals.",
      image: "/api/placeholder/600/400",
      icon: LineChart
    },
    {
      title: "Risk Management",
      content: "Risk management is crucial in investment. Diversification across different asset classes, sectors, and geographical regions can help minimize risk. It's important to understand concepts like risk tolerance, time horizon, and the relationship between risk and return. Regular portfolio rebalancing ensures your investments align with your goals and risk tolerance.",
      image: "/api/placeholder/600/400",
      icon: BarChart
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex h-16 shrink-0 items-center gap-2 bg-white px-4 shadow-sm">
        <Breadcrumbs parent="Learn" child="Investments" />
      </header>

      <div className="max-w-7xl mx-auto p-4 pt-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Investment Fundamentals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the essentials of investing and build a strong foundation for your financial future
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="flex-1">
                <Card className="overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 object-cover"
                  />
                </Card>
              </div>
              
              <div className="flex-1 relative">
                {/* Decorative line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
                
                <div className="pl-6">
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-semibold">Ready to Start Investing?</h3>
              <p className="max-w-2xl mx-auto">
                Explore our detailed guides on specific investment vehicles and strategies to begin your investment journey with confidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsPage;