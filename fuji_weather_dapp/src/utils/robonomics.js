import Robonomics, { MessageProviderIpfs } from 'robonomics-js';
import { ROBONOMICS, VERSION } from '../config';

let robonomics = null;
export const initRobonomics = (ipfs, network) => {
  robonomics = new Robonomics({
    web3,
    account: {
      address: web3.eth.accounts[0]
    },
    ens: {
      address: ROBONOMICS[Number(network)].ens,
      suffix: ROBONOMICS[Number(network)].ensSuffix,
      version: VERSION
    },
    messageProvider: new MessageProviderIpfs(ipfs),
    lighthouse: ROBONOMICS[Number(network)].lighthouse
  });
  return robonomics;
};
const getRobonomics = () => {
  if (robonomics === null) {
    throw new Error('Robonomics not init');
  }
  return robonomics;
};

export default getRobonomics;
