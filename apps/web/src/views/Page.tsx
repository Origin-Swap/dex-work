import { useTranslation } from '@pancakeswap/localization'
import { Swap } from '@pancakeswap/uikit'
import { ChainId } from '@pancakeswap/sdk'
import { PageMeta } from 'components/Layout/Page'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { EXCHANGE_HELP_URLS } from 'config/constants'

const Page: React.FC<
  React.PropsWithChildren<{
    removePadding?: boolean
    hideFooterOnDesktop?: boolean
    noMinHeight?: boolean
    helpUrl?: string
  }>
> = ({
  children,
  removePadding = false,
  hideFooterOnDesktop = false,
  noMinHeight = false,
  helpUrl = EXCHANGE_HELP_URLS,
  ...props
}) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const isBSC = chainId === ChainId.MONAD_TESTNET
  // const externalText = isBSC ? t('Bridge your Asset to ONLY chain') : ''
  // const externalLinkUrl = isBSC ? 'https://app.multichain.org/#/router' : ''

  return (
    <>
      <PageMeta />
      <Swap.Page
        removePadding={removePadding}
        noMinHeight={noMinHeight}
        hideFooterOnDesktop={hideFooterOnDesktop}
        // helpUrl={helpUrl}
        // externalText={externalText}
        // externalLinkUrl={externalLinkUrl}
        {...props}
      >
        {children}
      </Swap.Page>
    </>
  )
}

export default Page
