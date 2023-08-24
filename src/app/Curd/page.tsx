"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CardItem from "./CardItem";

export default function page() {
  return (
    <main className="container mx-auto p-4">
      <Table>
        <TableCaption>Total User.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </TableBody>
      </Table>
    </main>
  );
}
