import { SelectValue } from "@radix-ui/react-select";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const orderFilterSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
});

type OrderFilterSchema = z.infer<typeof orderFilterSchema>;

interface OrderTableFilterProps {}

export function OrderTableFilter({}: OrderTableFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const customerName = searchParams.get("customerName");
  const status = searchParams.get("status");

  const { register, handleSubmit, control, reset } = useForm<OrderFilterSchema>(
    {
      resolver: zodResolver(orderFilterSchema),
      defaultValues: {
        orderId: orderId ?? "",
        customerName: customerName ?? "",
        status: status ?? "all",
      },
    },
  );

  function handleFilter({ orderId, customerName, status }: OrderFilterSchema) {
    setSearchParams((searchState) => {
      if (orderId) {
        searchState.set("orderId", orderId);
      } else {
        searchState.delete("orderId");
      }

      if (customerName) {
        searchState.set("customerName", customerName);
      } else {
        searchState.delete("customerName");
      }

      if (status) {
        searchState.set("status", status);
      } else {
        searchState.delete("status");
      }

      searchState.set("page", "1");

      return searchState;
    });
  }

  function handleRemoveFilters() {
    setSearchParams((stateUrl) => {
      stateUrl.delete("orderId");
      stateUrl.delete("customerName");
      stateUrl.delete("status");
      stateUrl.set("page", "1");

      return stateUrl;
    });

    reset({
      orderId: "",
      customerName: "",
      status: "all",
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register("orderId")}
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register("customerName")}
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => (
          <Select
            defaultValue="all"
            name={name}
            value={value}
            onValueChange={onChange}
            disabled={disabled}
          >
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="processing">Em Preparo</SelectItem>
              <SelectItem value="delivering">Em Entrega</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      <Button type="submit" variant={"secondary"} size={"xs"}>
        <Search className="2-4 mr-2 h-4" />
        Filtrar Resultados
      </Button>
      <Button
        onClick={handleRemoveFilters}
        type="button"
        variant={"outline"}
        size={"xs"}
      >
        <X className="2-4 mr-2 h-4" />
        Remover Filtros
      </Button>
    </form>
  );
}
