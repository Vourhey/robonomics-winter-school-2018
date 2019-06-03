export const VERSION = 5;
export const ROBONOMICS = {
  1: {
    ens: '',
    ensSuffix: '',
    lighthouse: 'airalab.lighthouse.5.robonomics.eth'
  },
  4451: {
    ens: '0xaC4Ac4801b50b74aa3222B5Ba282FF54407B3941',
    ensSuffix: 'sid',
    lighthouse: 'airalab.lighthouse.5.robonomics.sid'
  }
};
export const MODEL_TRADE = 'Qmd6bn2JGW26hSx7g5gVCmfgB7uigRPrhAukJn77ee3bMM';
export const OBJECTIVE_TRADE = 'QmVAFgUxBitKqtV2sjaYcHkKfcAPVy3GswhaE5n5bcgLkf';
export const OFFERS_API = 'https://devjs-01.corp.aira.life:3024/';

export const TOKEN = null;
export const TOKEN_SYMBOL = 'XRT';
export const TOKEN_DECIMALS = 9;
export const PRICE = 0;

export const RUN = {
  model: 'QmPVr7k4N2jNiCYjbvQWPcmxzm5jwY3ZHEuJMgbQLmPKvY',
  objectives: {
    '1h': {
      objective: 'QmPtwRTjPmvBweSmG4zVGtUc9KWxLsPp76xERvjUXFJWEz',
      label: '1h'
    },
    '24h': {
      objective: 'QmbYXWWhNtnjhhBTvs2UfHiFLTUsXSZsoLoKSufiZHPxvR',
      label: '24h'
    },
    '60s': {
      objective: 'QmYijVc27M27WyS1UiAB72GmeDBKVo2Nyvh1EYXUBZUNJb',
      label: '60s'
    }
  }
};
export const ACTION = {
  model: 'QmNeMoBUiYjk4VzLtsBe9XAXfpyFawsUd9wEYTQy4tZpEj',
  objectives: {
    clockwise: {
      objective: 'QmRmj9VnRBbgmQwZMVU3oCinaYG8oh1UAvQJbtPUmEWSq1',
      label: 'clockwise'
    },
    counterclockwise: {
      objective: 'Qmd1YREP5MMLzoxT2kmvEocPxFMGFiCrLK6zQRmp5ebBqU',
      label: 'counterclockwise'
    }
  }
};

export const IPFS_CONFIG = {
  repo: 'ipfs/robonomics',
  relay: {
    enabled: true,
    hop: {
      enabled: true
    }
  },
  EXPERIMENTAL: {
    pubsub: true
  },
  config: {
    Addresses: {
      Swarm: [
        '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
        '/dns4/1.wsstar.aira.life/tcp/443/wss/p2p-websocket-star/',
        '/dns4/2.wsstar.aira.life/tcp/443/wss/p2p-websocket-star/'
      ]
    },
    Bootstrap: [
      '/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd',
      '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3',
      // '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM',
      // '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu',
      '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm',
      '/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64',
      '/dns4/node0.preload.ipfs.io/tcp/443/wss/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic',
      '/dns4/node1.preload.ipfs.io/tcp/443/wss/ipfs/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6',
      '/dns4/1.pubsub.aira.life/tcp/443/wss/ipfs/QmdfQmbmXt6sqjZyowxPUsmvBsgSGQjm4VXrV7WGy62dv8',
      '/dns4/2.pubsub.aira.life/tcp/443/wss/ipfs/QmPTFt7GJ2MfDuVYwJJTULr6EnsQtGVp8ahYn9NSyoxmd9'
    ]
  }
};
