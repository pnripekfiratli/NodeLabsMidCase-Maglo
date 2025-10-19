type CurrencyCode = "TRY" | "USD" | "EUR" | "₺" | "$" | "€" | string;

interface FormatCurrencyOptions {
    currency?: CurrencyCode
    locale?: string;
    symbolPosition?: "prefix" | "suffix";
}

const SYMBOLS: Record<CurrencyCode, string> = {
    TRY: "₺",
    USD: "$",
    EUR: "€",
    "₺": "₺",
    "$": "$",
    "€": "€",
};

export function formatCurrency(
    value: number | string,
    {
        currency,
        locale = "en-US",
        symbolPosition = "prefix",
    }: FormatCurrencyOptions = {}
): string {
    const num = typeof value === "string" ? Number(value) : value;

    if (!isFinite(num)) return "";

    const isNegative = num < 0;
    const abs = Math.abs(num);

    const formatted = new Intl.NumberFormat(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true,
    }).format(abs);

    const symbol = currency ? SYMBOLS[currency] : "";

    const withSymbol =
        symbol
            ? (symbolPosition === "suffix" ? `${formatted} ${symbol}` : `${symbol}${formatted}`)
            : formatted;

    return isNegative ? `-${withSymbol}` : withSymbol;
}
