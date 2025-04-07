import btc from '@/assets/cryptos/btc.svg'
import eth from '@/assets/cryptos/eth.svg'
import xtz from '@/assets/cryptos/xtz.svg'
import xrp from '@/assets/cryptos/xrp.svg'

export const getImagePathByUnit = (unit: string) => {
  switch (unit.toLowerCase()) {
    case 'btc':
      return btc
    case 'eth':
      return eth
    case 'xtz':
      return xtz
    case 'xrp':
      return xrp
    default:
      return btc
  }
}
