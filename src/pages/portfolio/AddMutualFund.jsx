import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const AddMutualFund = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Register New Mutual Fund</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Basic Fund Information */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Basic Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Fund Name</label>
                  <input 
                    type="text"
                    placeholder="e.g., Growth Direct Plan"
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Fund Category</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select Category</option>
                    <option value="large-cap">Large Cap</option>
                    <option value="mid-cap">Mid Cap</option>
                    <option value="small-cap">Small Cap</option>
                    <option value="index">Index Fund</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Purchase Amount (₹)</label>
                  <input 
                    type="number"
                    placeholder="Enter amount"
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Purchase Date</label>
                  <input 
                    type="date"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Investment Details</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">NAV at Purchase (₹)</label>
                  <input 
                    type="number"
                    step="0.01"
                    placeholder="e.g., 245.67"
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Units Allocated</label>
                  <input 
                    type="number"
                    step="0.001"
                    placeholder="Units will be calculated"
                    className="w-full p-2 border rounded-md bg-gray-50"
                    readOnly
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Investment Type</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select Type</option>
                    <option value="lumpsum">Lumpsum</option>
                    <option value="sip">SIP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Risk Level</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select Risk Level</option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Additional Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Folio Number</label>
                  <input 
                    type="text"
                    placeholder="Optional"
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Fund House</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select Fund House</option>
                    <option value="sbi">SBI Mutual Fund</option>
                    <option value="hdfc">HDFC Mutual Fund</option>
                    <option value="icici">ICICI Prudential</option>
                    <option value="axis">Axis Mutual Fund</option>
                  </select>
                </div>
              </div>

              {/* SIP Specific Fields - Show only if SIP is selected */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">SIP Frequency</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select Frequency</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">SIP Date</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select Date</option>
                    {[...Array(28)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Notes and Alert */}
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Units will be automatically calculated based on the purchase amount and NAV.
                The actual unit allocation might vary slightly due to applicable charges.
              </AlertDescription>
            </Alert>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Register Fund
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddMutualFund;