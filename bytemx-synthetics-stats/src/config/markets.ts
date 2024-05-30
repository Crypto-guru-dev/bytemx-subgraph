function createMarketConfig(
  marketToken: string,
  indexToken: string,
  longToken: string,
  shortToken: string
): MarketConfig {
  return new MarketConfig(marketToken, indexToken, longToken, shortToken);
}

export class MarketConfig {
  constructor(
    public marketToken: string,
    public indexToken: string,
    public longToken: string,
    public shortToken: string
  ) {}
}

export let marketConfigs = new Map<string, MarketConfig>();

marketConfigs.set(
  "0x832327b3a2b0877ad32d6b08a6dc5d277321b5a1",
  createMarketConfig(
    "0x832327b3a2b0877ad32d6b08a6dc5d277321b5a1",
    "0xC14D543c57de60241Fc180E659b28A5b63C15BA8",
    "0xC14D543c57de60241Fc180E659b28A5b63C15BA8",
    "0x44590967ffBFFb53bbd773574578cCAbA6c0082a"
  )
);

marketConfigs.set(
  "0x887b45042d9f708309bb021f87c24b89a93c8256",
  createMarketConfig(
    "0x887b45042d9f708309bb021f87c24b89a93c8256",
    "0xFAf87238FF853b8755e5b019ea99612E3fD22b6b",
    "0xFAf87238FF853b8755e5b019ea99612E3fD22b6b",
    "0x44590967ffBFFb53bbd773574578cCAbA6c0082a"
  )
);

marketConfigs.set(
  "0x11a170a5f16e4a7e61f5cfac556e30207c93d38c",
  createMarketConfig(
    "0x11a170a5f16e4a7e61f5cfac556e30207c93d38c",
    "0x967449444201A750016507Aa48D9228f008952a1",
    "0x967449444201A750016507Aa48D9228f008952a1",
    "0x44590967ffBFFb53bbd773574578cCAbA6c0082a"
  )
);

marketConfigs.set(
  "0x5821e8748e952250a57fa3a42c08b0a8adbf3bec",
  createMarketConfig(
    "0x5821e8748e952250a57fa3a42c08b0a8adbf3bec",
    "0x64E17EB34D571e71BDCDEFDBF461F89f2B5bcc88",
    "0x64E17EB34D571e71BDCDEFDBF461F89f2B5bcc88",
    "0x44590967ffBFFb53bbd773574578cCAbA6c0082a"
  )
);

marketConfigs.set(
  "0x6ba7316e64e0d17b26626bc0b8e1aca586476351",
  createMarketConfig(
    "0x6ba7316e64e0d17b26626bc0b8e1aca586476351",
    "0xcd762A490fCD489AfEEDaBe29AA476980eB0765f",
    "0xcd762A490fCD489AfEEDaBe29AA476980eB0765f",
    "0x44590967ffBFFb53bbd773574578cCAbA6c0082a"
  )
);

marketConfigs.set(
  "0xfc40fac98ed959f1539e73585810859958454bd5",
  createMarketConfig(
    "0xfc40fac98ed959f1539e73585810859958454bd5",
    "0x4F2dE8F2b942909CA388FEb0692AEA85b77EEd50",
    "0x4F2dE8F2b942909CA388FEb0692AEA85b77EEd50",
    "0x44590967ffBFFb53bbd773574578cCAbA6c0082a"
  )
);

marketConfigs.set(
  "0xde2b1623e318f14870660f70ecae31d031777a16",
  createMarketConfig(
    "0xde2b1623e318f14870660f70ecae31d031777a16",
    "0x2f7900E516e63DEeB2Ada8b1F556F38130132384",
    "0x2f7900E516e63DEeB2Ada8b1F556F38130132384",
    "0x44590967ffBFFb53bbd773574578cCAbA6c0082a"
  )
);
