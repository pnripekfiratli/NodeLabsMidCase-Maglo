export interface ISummaryResponse {
    success: boolean,
    message: string,
    data: {
        totalBalance: {
            amount: number,
            currency: string,
            change: {
                percentage: number,
                trend: string
            }
        },
        totalExpense: {
            amount: number,
            currency: string,
            change: {
                percentage: number,
                trend: string
            }
        },
        totalSavings: {
            amount: number,
            currency: string,
            change: {
                percentage: number,
                trend: string
            }
        },
        lastUpdated: string
    }
}

export interface IWorkingCapitalResponse {
    success: boolean,
    message: string,
    data: {
        period: string,
        currency: string,
        data: Array<{
            month: string,
            income: number,
            expense: number,
            net: number
        }>,
        summary: {
            totalIncome: number,
            totalExpense: number,
            netBalance: number
        }
    },
}

export interface IWalletResponse {
    success: boolean,
    message: string,
    data: {
        cards: Array<
            {
                id: string,
                name: string,
                type: string,
                cardNumber: string,
                bank: string,
                network: string,
                expiryMonth: number,
                expiryYear: number,
                color: string,
                isDefault: boolean
            }
        >
    }
}


export interface IRecentTransactionResponse {
    success: boolean,
    message: string,
    data: {
        transactions: Array<
            {
                id: string,
                name: string,
                business: string,
                image: string,
                type: string,
                amount: number,
                currency: string,
                date: string,
                status: string
            }>,
        summary: {
            totalIncome: number,
            totalExpense: number,
            netBalance: number
        }
    }
}

export interface ISheduledTransfers {
    success: boolean,
    message: string,
    data: {
        transfers: Array<
            {
                id: string,
                name: string,
                image: string,
                date: string,
                amount: number,
                currency: string,
                status: string
            }>,
        summary: {
            totalScheduledAmount: number,
            count: number,
        }

    }
}