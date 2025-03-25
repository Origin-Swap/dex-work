import { ChainId, WBNB, ERC20Token } from '@pancakeswap/sdk'
import { USDT_MONAD, TEKTIAS_TESTNET } from './common'

export const testnetTokens = {
  weth: WBNB[ChainId.MONAD_TESTNET],
  line: TEKTIAS_TESTNET,
  syrup: new ERC20Token(
    ChainId.MONAD_TESTNET,
    '0xbDda3DC688cF63C3cA7C76d2432A3b6B636c9ca0',
    18,
    'Syrup',
    'SyrupBar Token',
    'https://onlyfi.org',
  ),
  usdt: USDT_MONAD,
}
