export const getGradientByUnitOrCurrency = (unitOrCurrency: string) => {
  switch (unitOrCurrency.toLowerCase()) {
    case 'btc':
    case 'bitcoin':
      return 'bg-linear-[140deg] from-[rgba(247,147,26,0.3)] from-0% to-[rgba(247,147,26,0)] to-[20%]'
    case 'eth':
      return 'bg-linear-[140deg] from-[rgba(69,74,117,0.3)] from-0% to-[rgba(69,74,117,0)] to-[20%]'
    case 'xtz':
      return 'bg-linear-[140deg] from-[rgba(0,122,255,0.3)] from-0% to-[rgba(0,122,255,0)] to-[20%]'
    case 'xrp':
      return 'bg-linear-[140deg] from-[rgba(153,69,255,0.3)] from-0% to-[rgba(153,69,255,0)] to-[20%]'
    default:
      return ''
  }
}
