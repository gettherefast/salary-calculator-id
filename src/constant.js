export const PTKP_MAP = new Map([
    [1, 54000000],
    [2, 58500000],
    [3, 63000000],
    [4, 67500000],
    [5, 72000000],
])

export const COMMON_CONSTANT = Object.freeze({
    TAX_LAYER_1_PERCENTAGE: 0.05,
    TAX_LAYER_1_THRESHOLD: 50000000,
    TAX_LAYER_1_TAX_VALUE: 2500000,
    TAX_LAYER_2_PERCENTAGE: 0.15,
    TAX_LAYER_2_THRESHOLD: 250000000,
    TAX_LAYER_2_TAX_VALUE: 37500000,
    TAX_LAYER_3_PERCENTAGE: 0.25,
    TAX_LAYER_3_THRESHOLD: 500000000,
    TAX_LAYER_3_TAX_VALUE: 12500000,
    TAX_LAYER_4_PERCENTAGE: 0.3,
    BPJS_JHT_MULTIPLIER: 2/100,
    BPJS_JP_MULTIPLIER: 1/100,
    BPJS_KES_MULTIPLIER: 1/100,
    BPJS_JHT_GROSS_UP_MULTIPLIER: 2.1108179419525066/100,
    BPJS_JP_GROSS_UP_MULTIPLIER: 1.0554089709762533/100,
    BPJS_KES_GROSS_UP_MULTIPLIER: 1.0554089709762533/100,
    NON_NPWP: 20,
    TAX_GROSS_UP_LAYER_1_THRESHOLD: 47500000,
    TAX_GROSS_UP_LAYER_2_THRESHOLD: 217500000,
    TAX_GROSS_UP_LAYER_3_THRESHOLD: 405000000,
});