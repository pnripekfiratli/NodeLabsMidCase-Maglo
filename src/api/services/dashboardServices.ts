import axiosInstance from "../axiosInstance";
import type { IRecentTransactionResponse, ISheduledTransfers, ISummaryResponse, IWalletResponse, IWorkingCapitalResponse } from "../interfaces/IDashboardServices";

export const summary = async (): Promise<ISummaryResponse> => {
    const response = await axiosInstance.get("/financial/summary")
    return response.data
}

export const workingCapital = async (): Promise<IWorkingCapitalResponse> => {
    const response = await axiosInstance.get("/financial/working-capital")
    return response.data
}

export const wallet = async (): Promise<IWalletResponse> => {
    const response = await axiosInstance.get("/financial/wallet")
    return response.data
}

export const recentTransaction = async (limit?: number): Promise<IRecentTransactionResponse> => {
    const response = await axiosInstance.get("/financial/transactions/recent", {
        params: {
            limit: limit ?? 20
        }
    })
    return response.data
}

export const scheduledTransfers = async (): Promise<ISheduledTransfers> => {
    const response = await axiosInstance.get("/financial/transfers/scheduled")
    return response.data
}