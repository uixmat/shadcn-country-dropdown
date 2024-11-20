/**
 * New currencies data ISO-4217 from https://en.wikipedia.org/wiki/ISO_4217
 * Used in new <CurrencyDropdown /> component (Oct 2024)
 * adheres to package country-data-list
 */

// Currencies to exclude from the dropdown
export const allCurrencies = [
  "AXG", // Anguilla
  "BAM", // Bosnia and Herzegovina convertible mark
  "BMD", // Bermudian dollar
  "BOV", // Bolivian Mvdol (funds code)
  "CHE", // WIR Euro (complementary currency)
  "CHW", // WIR Franc (complementary currency)
  "CLF", // Chilean Unidad de Fomento (funds code)
  "COU", // Colombian Unidad de Valor Real (funds code)
  "CUC", // Cuban convertible peso
  "KID", // Kiribati dollar
  "KPW", // North Korean won
  "LAK", // Lao kip
  "MGA", // Malagasy ariary
  "MRO", // Mauritanian ouguiya (pre-2018)
  "MXV", // Mexican Unidad de Inversion (funds code)
  "OMR", // Omani rial
  "PRB", // Transnistrian ruble
  "SSP", // South Sudanese pound
  "STD", // São Tomé and Príncipe dobra (pre-2018)
  "SVC", // Salvadoran colón
  "TJS", // Tajikistani somoni
  "TMT", // Turkmenistan manat
  "TVD", // Tuvaluan dollar
  "USN", // United States dollar (next day) (funds code)
  "UYI", // Uruguay Peso en Unidades Indexadas (funds code)
  "VED", // Venezuelan bolívar digital
  "VES", // Venezuelan bolívar soberano
  "VND", // Vietnamese đồng
  "XAF", // Central African CFA franc
  "XAG", // Silver (troy ounce)
  "XAU", // Gold (troy ounce)
  "XBA", // European Composite Unit (EURCO) (bond market unit)
  "XBB", // European Monetary Unit (E.M.U.-6) (bond market unit)
  "XBC", // European Unit of Account 9 (E.U.A.-9) (bond market unit)
  "XBD", // European Unit of Account 17 (E.U.A.-17) (bond market unit)
  "XDR", // Special Drawing Rights
  "XOF", // West African CFA franc
  "XPD", // Palladium (troy ounce)
  "XPF", // CFP franc
  "XPT", // Platinum (troy ounce)
  "XSU", // Sucre (ALBA regional currency)
  "XTS", // Code reserved for testing purposes
  "XUA", // ADB Unit of Account
  "XUG", // Uganda shilling (pre-1987)
  "XXX", // No currency
  "ZWL", // Zimbabwean dollar (no longer in active use)
];

// Currencies to include in the dropdown
export const invoicingCurrencies = [
  "DKK",
  "SEK",
  "NOK",
  "EUR",
  "USD",
  "CAD",
  "GBP",
  "AUD",
  "NZD",
];

// Currencies to include in the dropdown
export const withdrawalCurrencies = [
  "USD",
  "AED",
  "AUD",
  "BGN",
  "BRL",
  "CAD",
  "CHF",
  "CZK",
  "COP",
  "DKK",
  "EUR",
  "GBP",
  "HKD",
  "HUF",
  // "ISK",
  "JPY",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PLN",
  "RON",
  "SEK",
  "SGD",
  "THB",
];
