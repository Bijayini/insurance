export enum ProductIds {
  devIns = 'dev_ins',
  designIns = 'design_ins',
}

export const Products = {
  [ProductIds.devIns]: {
    name: 'Developer Insurance',
    url: '/buy/insurance_developer',
  },

  [ProductIds.designIns]: {
    name: 'Designer Insurance',
    url: '/buy/insurance_design',
  },
}
