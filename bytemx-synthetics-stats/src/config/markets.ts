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
  "0xF41C48DD34Dc87A5660f52a33D74BDB5cE1F9315",
  createMarketConfig(
    "0xF41C48DD34Dc87A5660f52a33D74BDB5cE1F9315",
    "0x2F3AD0cdC8AD20337eb02bD6411b808EE30c7896",
    "0x2F3AD0cdC8AD20337eb02bD6411b808EE30c7896",
    "0x21667417ce7875cd82A3f802023a218416DCD37b"
  )
);

marketConfigs.set(
  "0x08A5F89FdD9ce33292585a7E3DAe044Af19Ed14D",
  createMarketConfig(
    "0x08A5F89FdD9ce33292585a7E3DAe044Af19Ed14D",
    "0x2E218dC7873B52170D797cd34077D72D68EFDCF0",
    "0x2E218dC7873B52170D797cd34077D72D68EFDCF0",
    "0x21667417ce7875cd82A3f802023a218416DCD37b"
  )
);

marketConfigs.set(
  "0x142A39d70DF17556A269CfbFc4fdB15F9dc75357",
  createMarketConfig(
    "0x142A39d70DF17556A269CfbFc4fdB15F9dc75357",
    "0xC2F349eC4277D427Abc3F41EBE7475B829eebAfD",
    "0xC2F349eC4277D427Abc3F41EBE7475B829eebAfD",
    "0x21667417ce7875cd82A3f802023a218416DCD37b"
  )
);
