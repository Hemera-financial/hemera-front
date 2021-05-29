import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'LOLI',
    lpAddresses: {
      97: '',
      56: '0xcC263EAeBB192a35CB14747c353C769462463B70',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0xcC263EAeBB192a35CB14747c353C769462463B70',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'LOLI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5D4D09245cb79464DeCFAbD6eD991409feEe5851',   // lp address token-bnb
    },
    tokenSymbol: 'LOLI',
    tokenAddresses: {
      97: '',
      56: '0xcC263EAeBB192a35CB14747c353C769462463B70', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
