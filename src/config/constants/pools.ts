import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'LOLI',
    tokenAddress: '0xcC263EAeBB192a35CB14747c353C769462463B70',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xcC263EAeBB192a35CB14747c353C769462463B70',  // token address
    contractAddress: {
      97: '',
      56: '0x323fde4c12fBb6bc87580EB76505F760DE46f76f',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
