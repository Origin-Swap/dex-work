import { useTranslation } from '@pancakeswap/localization'
import { ChainId } from '@pancakeswap/sdk'
import { SubMenuItems } from '@pancakeswap/uikit'
import { useAccount } from 'wagmi'
import { useEffect } from 'react'
import { useGetChainName } from 'state/info/hooks'
import { useRouter } from 'next/router'
import { useActiveChainId } from 'hooks/useActiveChainId'
import InfoNav from './components/InfoNav'

export const InfoPageLayout = ({ children }) => {
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()
  const router = useRouter()
  const chainName = useGetChainName()
  const { t } = useTranslation()

  useEffect(() => {
    if (account && chainId === ChainId.MONAD_TESTNET && router.query.chainName === 'eth')
      router.replace('/info', undefined, { shallow: true })
    if (account && chainId === ChainId.ETHEREUM && router.query.chainName !== 'eth')
      router.replace('/info/eth', undefined, { shallow: true })
  }, [chainId, account, chainName, router])

  const isStableSwap = router.query.type === 'stableSwap'
  return (
    <>
      {chainName === 'BSC' && (
        <SubMenuItems
          items={[
            {
              label: t('Swap'),
              href: '/info',
            },
            {
              label: t('StableSwap'),
              href: '/info?type=stableSwap',
            },
          ]}
          activeItem={isStableSwap ? '/info?type=stableSwap' : '/info'}
        />
      )}

      <InfoNav isStableSwap={isStableSwap} />
      {children}
    </>
  )
}
