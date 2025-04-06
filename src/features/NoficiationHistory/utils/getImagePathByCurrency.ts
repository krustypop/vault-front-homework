import btc from '@/assets/cryptos/btc.svg'
import eth from '@/assets/cryptos/eth.svg'
import xtz from '@/assets/cryptos/xtz.svg'

export const getImagePathByCurrency = (currency: string) => {
  switch (currency.toLowerCase()) {
    case 'bitcoin':
      return btc
    case 'ethereum':
      return eth
    case 'tezos':
      return xtz
    default:
      return undefined
  }
}
