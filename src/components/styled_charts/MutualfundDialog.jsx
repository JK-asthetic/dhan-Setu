import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "react-router-dom";

export function MutualFundDialog() {
  return (
    // <DialogContent className="sm:max-w-[425px] bg-white ">
    //   <DialogHeader>
    //     <DialogTitle>Edit profile</DialogTitle>
    //     <DialogDescription>
    //       Make changes to your profile here. Click save when you're done.
    //     </DialogDescription>
    //   </DialogHeader>

    //   <div className="grid gap-4 py-4">
    //     <div className="grid grid-cols-4 items-center gap-4">
    //       <Label htmlFor="name" className="text-right">
    //         Name
    //       </Label>
    //       <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
    //     </div>
    //     <div className="grid grid-cols-4 items-center gap-4">
    //       <Label htmlFor="username" className="text-right">
    //         Username
    //       </Label>
    //       <Input id="username" defaultValue="@peduarte" className="col-span-3" />
    //     </div>
    //   </div>
    //   <DialogFooter>
    //     <Button type="submit">Save changes</Button>
    //   </DialogFooter>
    // </DialogContent>
    
      
      <div className="grid gap-4 py-4">
        {/* Basic Fund Information */}
        <div className="grid gap-4">
          <h3 className="font-medium text-lg">Basic Information</h3>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fund-name" className="text-right">
              Fund Name
            </Label>
            <Input
              id="fund-name"
              placeholder="e.g., Growth Direct Plan"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fund-category" className="text-right">
              Fund Category
            </Label>
            <select
              id="fund-category"
              className="col-span-3 p-2 border rounded-md"
            >
              <option value="">Select Category</option>
              <option value="large-cap">Large Cap</option>
              <option value="mid-cap">Mid Cap</option>
              <option value="small-cap">Small Cap</option>
              <option value="index">Index Fund</option>
            </select>
          </div>
        </div>

        {/* Investment Details */}
        <div className="grid gap-4">
          <h3 className="font-medium text-lg">Investment Details</h3>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="purchase-amount" className="text-right">
              Purchase Amount (₹)
            </Label>
            <Input
              id="purchase-amount"
              type="number"
              placeholder="Enter amount"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="purchase-date" className="text-right">
              Purchase Date
            </Label>
            <Input id="purchase-date" type="date" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="investment-type" className="text-right">
              Investment Type
            </Label>
            <select
              id="investment-type"
              className="col-span-3 p-2 border rounded-md"
            >
              <option value="">Select Type</option>
              <option value="lumpsum">Lumpsum</option>
              <option value="sip">SIP</option>
            </select>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid gap-4">
          <h3 className="font-medium text-lg">Additional Information</h3>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="folio-number" className="text-right">
              Folio Number
            </Label>
            <Input
              id="folio-number"
              placeholder="Optional"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fund-house" className="text-right">
              Fund House
            </Label>
            <select
              id="fund-house"
              className="col-span-3 p-2 border rounded-md"
            >
              <option value="">Select Fund House</option>
              <option value="sbi">SBI Mutual Fund</option>
              <option value="hdfc">HDFC Mutual Fund</option>
              <option value="icici">ICICI Prudential</option>
              <option value="axis">Axis Mutual Fund</option>
            </select>
          </div>
        </div>
      </div>
      
  );
}
