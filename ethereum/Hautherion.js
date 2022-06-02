import provider from "./provider";
import hautherion from "./hautherion.json";
import { ethers } from 'ethers';

const HAUTHERION_ADDRESS = '0x9362b59726664D2Dd847140CADa14A8A92d45fdf'

const instance = new ethers.Contract(
    HAUTHERION_ADDRESS,
    hautherion.abi,
    provider
);

export default instance;