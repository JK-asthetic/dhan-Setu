import React from "react";
import Breadcrumbs from "@/components/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, PieChart, TrendingUp, Wallet, BadgeDollarSign, GraduationCap } from "lucide-react";

const Learn = () => {
  const topics = [
    {
      title: "Investments",
      description: "Learn about different investment vehicles and strategies to grow your wealth",
      icon: PieChart,
      subtopics: ["Stocks", "Mutual Funds", "ETFs", "Bonds"]
    },
    {
      title: "Personal Finance",
      description: "Master the basics of managing your money and building financial security",
      icon: Wallet,
      subtopics: ["Budgeting", "Savings", "Credit Score", "Tax Planning"]
    },
    {
      title: "Loans & Credit",
      description: "Understand different types of loans and how to manage credit responsibly",
      icon: BadgeDollarSign,
      subtopics: ["Personal Loans", "Home Loans", "Credit Cards", "Debt Management"]
    },
    {
      title: "Market Analysis",
      description: "Develop skills to analyze market trends and make informed decisions",
      icon: TrendingUp,
      subtopics: ["Technical Analysis", "Fundamental Analysis", "Market Research", "Risk Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex h-16 shrink-0 items-center gap-2 bg-white px-4 shadow-sm">
        <Breadcrumbs parent="Learn" child="" />
      </header>

      <div className="flex flex-1 flex-col gap-8 p-4 pt-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center py-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Master Your Financial Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides and resources to help you understand investments, 
            personal finance, and wealth management. Start your learning journey today.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="flex items-center gap-4 p-6">
              <BookOpen className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Guides</h3>
                <p>Detailed explanations with real-world examples and case studies</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="flex items-center gap-4 p-6">
              <GraduationCap className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Step-by-Step Learning</h3>
                <p>Structured content designed for beginners to advanced learners</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <topic.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{topic.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {topic.subtopics.map((subtopic, idx) => (
                    <div 
                      key={idx}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 text-center"
                    >
                      {subtopic}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;