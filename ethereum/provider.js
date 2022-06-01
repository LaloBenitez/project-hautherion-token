import { ethers } from 'ethers';

let provider;
let accounts;

// Because in the Node.js world, window is not defined, window is only available in browsers.
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and metamask is running.
    // accounts = window.ethereum.request({ method: "eth_requestAccounts" }).then({

    // });
    provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask

} else {
    // We are on the server *OR* the user is not running metamask
    const INFURA_API_URL = 'https://rinkeby.infura.io/v3/04b4666f7ee04b3bb284ad738207ea7a'
    provider = new ethers.providers.JsonRpcProvider(INFURA_API_URL);
}

export default provider;