import bybitLogo from '../assets/exchanges/bybit.svg';
import bitgetLogo from '../assets/exchanges/bitget.svg';
import binanceLogo from '../assets/exchanges/binance.svg';
import okxLogo from '../assets/exchanges/okx.svg';
import mexcLogo from '../assets/exchanges/mexc.svg';
import kucoinLogo from '../assets/exchanges/kucoin.svg';
import { SITE } from '../lib/constants';

export const partners = [
  {
    id: 'bybit',
    name: 'Bybit',
    label: 'Partner Exchange',
    logo: bybitLogo,
    href: SITE.telegramTradeUrl,
  },
  {
    id: 'bitget',
    name: 'Bitget',
    label: 'Partner Exchange',
    logo: bitgetLogo,
    href: SITE.telegramTradeUrl,
  },
  {
    id: 'binance',
    name: 'Binance',
    label: 'Partner Exchange',
    logo: binanceLogo,
    href: SITE.telegramTradeUrl,
  },
  {
    id: 'okx',
    name: 'OKX',
    label: 'Partner Exchange',
    logo: okxLogo,
    href: SITE.telegramTradeUrl,
  },
  {
    id: 'mexc',
    name: 'MEXC',
    label: 'Partner Exchange',
    logo: mexcLogo,
    href: SITE.telegramTradeUrl,
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    label: 'Partner Exchange',
    logo: kucoinLogo,
    href: SITE.telegramTradeUrl,
  },
];
