export const contractAddress = "0x7f1484A621AA96c49c91e707e92849a80fA8C77D";

export const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fileId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fileHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fileSize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fileType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fileName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "uploadTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "uploader",
        type: "address",
      },
    ],
    name: "FileUploaded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_fileHash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_fileSize",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_fileType",
        type: "string",
      },
      {
        internalType: "string",
        name: "_fileName",
        type: "string",
      },
    ],
    name: "uploadFile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fileCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "files",
    outputs: [
      {
        internalType: "uint256",
        name: "fileId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "fileHash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "fileSize",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "fileType",
        type: "string",
      },
      {
        internalType: "string",
        name: "fileName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "uploadTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "uploader",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
