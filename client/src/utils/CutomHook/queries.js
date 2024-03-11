import { useQuery } from "@tanstack/react-query"
import { getProductList } from "../../api/product"
import { getCustomerList } from "../../api/customer"
import { getInvoiceList } from "../../api/invoice"

export function useGetProductList() {
    return useQuery({
        queryKey: ["product"],
        queryFn: () => getProductList(),
        enabled: true,
        cacheTime: 60 * 1000 * 60,
        staleTime: 60 * 1000 * 60,
    })
}

export function useGetCustomerList() {
    return useQuery({
        queryKey: ["customerList"],
        queryFn: () => getCustomerList(),
        enabled: true,
        cacheTime: 60 * 1000,
        staleTime: 60 * 1000,
    })
}
export function useGetInvoiceList() {
    return useQuery({
        queryKey: ["invoice"],
        queryFn: () => getInvoiceList(),
        enabled: true,
        cacheTime: 60 * 1000,
        staleTime: 60 * 1000,
    })
}
