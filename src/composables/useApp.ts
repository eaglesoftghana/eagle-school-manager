export const formatCurrency = (
	amount: number,
	currencyCode: string = "GHS"
): string => {
	return new Intl.NumberFormat("en-GH", {
		style: "currency",
		currency: currencyCode,
    currencySign: 'accounting',
    currencyDisplay: 'symbol'
	}).format(amount);
};