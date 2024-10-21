import { SelectValue } from "@radix-ui/react-select";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";

interface OrderTableFilterProps {}

export function OrderTableFilter({}: OrderTableFilterProps) {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select defaultValue="all">
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

      <Button type="submit" variant={"secondary"} size={"xs"}>
        <Search className="2-4 mr-2 h-4" />
        Filtrar Resultados
      </Button>
      <Button type="button" variant={"outline"} size={"xs"}>
        <X className="2-4 mr-2 h-4" />
        Remover Filtros
      </Button>
    </form>
  );
}
