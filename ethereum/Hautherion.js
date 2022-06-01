import provider from "./provider";
import hautherion from "./hautherion.json";
import { ethers } from 'ethers';

const HAUTHERION_ADDRESS = '0xeED8F926787a5018e5F997FAa780a0c4A155dc88'

const instance = new ethers.Contract(
    HAUTHERION_ADDRESS,
    hautherion.abi,
    provider
);

export default instance;