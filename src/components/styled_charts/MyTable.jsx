import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const MyTable = () => {
  const holdings = [
    {
      type: "Stock",
      name: "Apple Inc.",
      symbol: "AAPL",
      quantity: 50,
      avgPrice: 150.25,
      currentPrice: 175.5,
      value: 8775,
      gain: 25.25,
      gainPercentage: 16.81,
    },
    {
      type: "Stock",
      name: "Microsoft",
      symbol: "MSFT",
      quantity: 30,
      avgPrice: 245.75,
      currentPrice: 285.3,
      value: 8559,
      gain: 39.55,
      gainPercentage: 16.09,
    },
    {
      type: "Mutual Fund",
      name: "Vanguard 500 Index Fund",
      symbol: "VFIAX",
      quantity: 25,
      avgPrice: 320.5,
      currentPrice: 355.2,
      value: 8880,
      gain: 34.7,
      gainPercentage: 10.83,
    },
    {
      type: "ETF",
      name: "iShares Core S&P 500",
      symbol: "IVV",
      quantity: 15,
      avgPrice: 410.25,
      currentPrice: 395.8,
      value: 5937,
      gain: -14.45,
      gainPercentage: -3.52,
    },
    {
      type: "Bond",
      name: "US Treasury 10Y",
      symbol: "T10Y",
      quantity: 100,
      avgPrice: 98.5,
      currentPrice: 99.25,
      value: 9925,
      gain: 0.75,
      gainPercentage: 0.76,
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Symbol</th>
                <th className="p-3 text-right">Quantity</th>
                <th className="p-3 text-right">Avg Price</th>
                <th className="p-3 text-right">Current Price</th>
                <th className="p-3 text-right">Value</th>
                <th className="p-3 text-right">Gain/Loss</th>
                <th className="p-3 text-right">%Change</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                      {holding.type}
                    </span>
                  </td>
                  <td className="p-3 font-medium">{holding.name}</td>
                  <td className="p-3">{holding.symbol}</td>
                  <td className="p-3 text-right">{holding.quantity}</td>
                  <td className="p-3 text-right">
                    ${holding.avgPrice.toFixed(2)}
                  </td>
                  <td className="p-3 text-right">
                    ${holding.currentPrice.toFixed(2)}
                  </td>
                  <td className="p-3 text-right">
                    ${holding.value.toLocaleString()}
                  </td>
                  <td className="p-3 text-right">
                    <div
                      className={`flex items-center justify-end ${
                        holding.gain >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {holding.gain >= 0 ? (
                        <ArrowUpRight className="mr-1 h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="mr-1 h-4 w-4" />
                      )}
                      ${Math.abs(holding.gain).toFixed(2)}
                    </div>
                  </td>
                  <td
                    className={`p-3 text-right ${
                      holding.gainPercentage >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {holding.gainPercentage >= 0 ? "+" : ""}
                    {holding.gainPercentage.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyTable;
