require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "DATING ALIEN CLUB";
const description = "Aliens have landed on Earth and are ready to mingle.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 11,
    layersOrder: [
      { name: "Background" },
      { name: "Men Skin" },
      { name: "Men Eyes" },
      { name: "Men Mouth" },
      { name: "Men Nose" },
      { name: "Men Builder Clothes" },
      { name: "Men Facial Hair" },
    ],
  },
  {
    growEditionSizeTo: 22,
    layersOrder: [
      { name: "Background" },
      { name: "Women Skin" },
      { name: "Women Eyes" },
      { name: "Women Mouth" },
      { name: "Women Nose" },
      { name: "Women Builder Clothes" },
    ],
  },
  {
    growEditionSizeTo: 33,
    layersOrder: [
      { name: "Background" },
      { name: "Men Skin" },
      { name: "Men Eyes" },
      { name: "Men Mouth" },
      { name: "Men Nose" },
      { name: "Men Fire Clothes" },
      { name: "Men Facial Hair" },
    ],
  },
  {
    growEditionSizeTo: 44,
    layersOrder: [
      { name: "Background" },
      { name: "Women Skin" },
      { name: "Women Eyes" },
      { name: "Women Mouth" },
      { name: "Women Nose" },
      { name: "Women Fire Clothes" },
    ],
  },  
  {
    growEditionSizeTo: 55,
    layersOrder: [
      { name: "Background" },
      { name: "Men Skin" },
      { name: "Men Eyes" },
      { name: "Men Mouth" },
      { name: "Men Nose" },
      { name: "Men Police Clothes" },
      { name: "Men Facial Hair" },
    ],
  },
  {
    growEditionSizeTo: 66,
    layersOrder: [
      { name: "Background" },
      { name: "Women Skin" },
      { name: "Women Eyes" },
      { name: "Women Mouth" },
      { name: "Women Nose" },
      { name: "Women Police Clothes" },
    ],
  },  
  {
    growEditionSizeTo: 77,
    layersOrder: [
      { name: "Background" },
      { name: "Men Skin" },
      { name: "Men Eyes" },
      { name: "Men Mouth" },
      { name: "Men Nose" },
      { name: "Men Pilot Clothes" },
      { name: "Men Facial Hair" },
    ],
  },
  {
    growEditionSizeTo: 88,
    layersOrder: [
      { name: "Background" },
      { name: "Women Skin" },
      { name: "Women Eyes" },
      { name: "Women Mouth" },
      { name: "Women Nose" },
      { name: "Women Pilot Clothes" },
    ],
  },  
  {
    growEditionSizeTo: 99,
    layersOrder: [
      { name: "Background" },
      { name: "Men Skin" },
      { name: "Men Eyes" },
      { name: "Men Mouth" },
      { name: "Men Nose" },
      { name: "Men Health Clothes" },
    ],
  },
  {
    growEditionSizeTo: 110,
    layersOrder: [
      { name: "Background" },
      { name: "Women Skin" },
      { name: "Women Eyes" },
      { name: "Women Mouth" },
      { name: "Women Nose" },
      { name: "Women Health Clothes" },
    ],
  },
  {
    growEditionSizeTo: 121,
    layersOrder: [
      { name: "Background" },
      { name: "Men Skin" },
      { name: "Men Eyes" },
      { name: "Men Mouth" },
      { name: "Men Nose" },
      { name: "Men Wedding Clothes" },
    ],
  },
  {
    growEditionSizeTo: 132,
    layersOrder: [
      { name: "Background" },
      { name: "Women Skin" },
      { name: "Women Eyes" },
      { name: "Women Mouth" },
      { name: "Women Nose" },
      { name: "Women Wedding Clothes" },
    ],
  },
  {
    growEditionSizeTo: 632,
    layersOrder: [
      { name: "Background" },
      { name: "Men Skin" },
      { name: "Men Eyes" },
      { name: "Men Mouth" },
      { name: "Men Nose" },
      { name: "Men Hair" },
      { name: "Men Tattoo" },
      { name: "Men Jewellery" },
      { name: "Men Clothes" },
      { name: "Men Hats" },
      { name: "Men Glasses" },
      { name: "Men Facial Hair" },
    ],
  },
  {
    growEditionSizeTo: 1132,
    layersOrder: [
      { name: "Background" },
      { name: "Women Skin" },
      { name: "Women Mouth" },
      { name: "Women Nose" },
      { name: "Women Hair" },
      { name: "Women Tattoo" },
      { name: "Women Jewellery" },
      { name: "Women Clothes" },
      { name: "Women Eyes" },
      { name: "Women Glasses" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://datingalienclub.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 3; // Your API key rate limit
const CHAIN = 'ethereum'; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'DATING ALIEN CLUB';
const CONTRACT_SYMBOL = 'DAC';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x58ABD652A8260ddbDBbeca8D56870d7D4DD02906';
const TREASURY_ADDRESS = '0x58ABD652A8260ddbDBbeca8D56870d7D4DD02906';
const MAX_SUPPLY = 1111; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.05; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-10-04T15:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-10-03T15:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 700; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x58ABD652A8260ddbDBbeca8D56870d7D4DD02906"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0xe4ec96C627e160e588d5799f7Ba67237fAB4CcE4","0x58ABD652A8260ddbDBbeca8D56870d7D4DD02906"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0xFF2f2165f17243D54e8d5F77c78607a67F2ccF0E"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which Alien will you get????"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeiexr4khno7pirdwkiipntsrnjhaf3m46t7ywuu6dohrk2k3vkuura"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
