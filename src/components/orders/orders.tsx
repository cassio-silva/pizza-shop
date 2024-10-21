import { Table } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { OrderTableFilter } from "@/components/orders/order-table-filter";
import { OrderTableRow } from "@/components/orders/order-table-row";
import { Pagination } from "@/components/pagination";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <OrderTableFilter />
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <div className="roundeelsd-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 4 }).map((_, index) => (
                  <OrderTableRow key={index} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </div>
    </>
  );
}
