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
  "0x212BCFDb84EBC5587dA3Ea96DE5F0B2C3Ec35D3b",
  createMarketConfig(
    "0x212BCFDb84EBC5587dA3Ea96DE5F0B2C3Ec35D3b",
    "0xa48A629eA6A23a66408da57Cec9715dE01346e71",
    "0xa48A629eA6A23a66408da57Cec9715dE01346e71",
    "0xB885e96B3B2d3Fdb797a64452339dF7BdB59b416"
  )
);

marketConfigs.set(
  "0xF3671a61D28687061925bbeDA21Ad2db66f456F3",
  createMarketConfig(
    "0xF3671a61D28687061925bbeDA21Ad2db66f456F3",
    "0x7d1A77E48f1355DF605a6Ab0e6e8c981A48855dC",
    "0x7d1A77E48f1355DF605a6Ab0e6e8c981A48855dC",
    "0xB885e96B3B2d3Fdb797a64452339dF7BdB59b416"
  )
);

marketConfigs.set(
  "0x1DeB42403B39472820A9ddAF42C302C997634fbc",
  createMarketConfig(
    "0x1DeB42403B39472820A9ddAF42C302C997634fbc",
    "0x5042a42abaE878eba9756f3B37eBdD988A5791b3",
    "0x5042a42abaE878eba9756f3B37eBdD988A5791b3",
    "0xB885e96B3B2d3Fdb797a64452339dF7BdB59b416"
  )
);

marketConfigs.set(
  "0x0AfF52232CECfF3AbD4f2A3Ee3576A9aDF53EC67",
  createMarketConfig(
    "0x0AfF52232CECfF3AbD4f2A3Ee3576A9aDF53EC67",
    "0x1Fdd93D3331490428A3806C297D7fD6E145c4D41",
    "0x1Fdd93D3331490428A3806C297D7fD6E145c4D41",
    "0xB885e96B3B2d3Fdb797a64452339dF7BdB59b416"
  )
);

marketConfigs.set(
  "0x771369BDA441477B4f920f995cFc3A4451727e49",
  createMarketConfig(
    "0x771369BDA441477B4f920f995cFc3A4451727e49",
    "0xB71b5D6C3B047B3fF3C8f656e01b5a226C858ED7",
    "0xB71b5D6C3B047B3fF3C8f656e01b5a226C858ED7",
    "0xB885e96B3B2d3Fdb797a64452339dF7BdB59b416"
  )
);

marketConfigs.set(
  "0x287fFDF1284DA5CD060c2877AC29FA31B5902867",
  createMarketConfig(
    "0x287fFDF1284DA5CD060c2877AC29FA31B5902867",
    "0xdDEED8210505b387c3bf3195bD1E41e2A9EB7f17",
    "0xdDEED8210505b387c3bf3195bD1E41e2A9EB7f17",
    "0xB885e96B3B2d3Fdb797a64452339dF7BdB59b416"
  )
);

marketConfigs.set(
  "0xF4bb6FF91ADF16DAE67967ef09b18Ee902956CB2",
  createMarketConfig(
    "0xF4bb6FF91ADF16DAE67967ef09b18Ee902956CB2",
    "0x6FC0A20E0F8d5F0D0d2Cd1058e9E11Be1d0D4af7",
    "0x6FC0A20E0F8d5F0D0d2Cd1058e9E11Be1d0D4af7",
    "0xB885e96B3B2d3Fdb797a64452339dF7BdB59b416"
  )
);
