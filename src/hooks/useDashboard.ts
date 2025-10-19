import { useQuery } from "@tanstack/react-query";
import {
    summary,
    workingCapital,
    wallet,
    recentTransaction,
    scheduledTransfers,
} from "../api/services/dashboardServices";

import type {
    IRecentTransactionResponse,
    ISheduledTransfers,
    ISummaryResponse,
    IWalletResponse,
    IWorkingCapitalResponse,
} from "../api/interfaces/IDashboardServices";

export function useSummary() {
    return useQuery<ISummaryResponse>({
        queryKey: ["summary"],
        queryFn: summary,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
    });
}

export function useWorkingCapital() {
    return useQuery<IWorkingCapitalResponse>({
        queryKey: ["workingCapital"],
        queryFn: workingCapital,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
    });
}

export function useWallet() {
    return useQuery<IWalletResponse>({
        queryKey: ["wallet"],
        queryFn: wallet,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
    });
}

export function useRecentTransactions(limit?: number) {
    return useQuery<IRecentTransactionResponse>({
        queryKey: ["recentTransactions", limit],
        queryFn: () => recentTransaction(limit),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
    });
}

export function useScheduledTransfers() {
    return useQuery<ISheduledTransfers>({
        queryKey: ["scheduledTransfers"],
        queryFn: scheduledTransfers,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
    });
}
