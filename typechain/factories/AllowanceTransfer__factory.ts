/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AllowanceTransfer } from "../AllowanceTransfer";

export class AllowanceTransfer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AllowanceTransfer> {
    return super.deploy(overrides || {}) as Promise<AllowanceTransfer>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AllowanceTransfer {
    return super.attach(address) as AllowanceTransfer;
  }
  connect(signer: Signer): AllowanceTransfer__factory {
    return super.connect(signer) as AllowanceTransfer__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AllowanceTransfer {
    return new Contract(address, _abi, signerOrProvider) as AllowanceTransfer;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "AllowanceExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "ExcessiveInvalidation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidContractSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "signatureDeadline",
        type: "uint256",
      },
    ],
    name: "SignatureExpired",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "amount",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "expiration",
        type: "uint48",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "Lockdown",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "newNonce",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "oldNonce",
        type: "uint48",
      },
    ],
    name: "NonceInvalidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "amount",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "expiration",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "nonce",
        type: "uint48",
      },
    ],
    name: "Permit",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint160",
        name: "amount",
        type: "uint160",
      },
      {
        internalType: "uint48",
        name: "expiration",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "nonce",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "amount",
        type: "uint160",
      },
      {
        internalType: "uint48",
        name: "expiration",
        type: "uint48",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "newNonce",
        type: "uint48",
      },
    ],
    name: "invalidateNonces",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        internalType: "struct IAllowanceTransfer.TokenSpenderPair[]",
        name: "approvals",
        type: "tuple[]",
      },
    ],
    name: "lockdown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint160",
                name: "amount",
                type: "uint160",
              },
              {
                internalType: "uint48",
                name: "expiration",
                type: "uint48",
              },
              {
                internalType: "uint48",
                name: "nonce",
                type: "uint48",
              },
            ],
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            name: "details",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "sigDeadline",
            type: "uint256",
          },
        ],
        internalType: "struct IAllowanceTransfer.PermitBatch",
        name: "permitBatch",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint160",
                name: "amount",
                type: "uint160",
              },
              {
                internalType: "uint48",
                name: "expiration",
                type: "uint48",
              },
              {
                internalType: "uint48",
                name: "nonce",
                type: "uint48",
              },
            ],
            internalType: "struct IAllowanceTransfer.PermitDetails",
            name: "details",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "sigDeadline",
            type: "uint256",
          },
        ],
        internalType: "struct IAllowanceTransfer.PermitSingle",
        name: "permitSingle",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint160",
            name: "amount",
            type: "uint160",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]",
        name: "transferDetails",
        type: "tuple[]",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "amount",
        type: "uint160",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0346100bb574660a052602081017f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681527f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a60408301524660608301523060808301526080825260a082019180831060018060401b038411176100a557826040525190206080526116b890816100c18239608051816111ee015260a051816111c80152f35b634e487b7160e01b600052604160045260246000fd5b600080fdfe6080604052600436101561001257600080fd5b60003560e01c80630d58b1db14610b7d5780632a2d80d11461081a5780632b67b570146106035780633644e515146105c257806336c785161461054f57806365d9723c146103ac57806387517c4514610272578063927da105146101c65763cc53287f1461007f57600080fd5b346101c1576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c15767ffffffffffffffff906004358281116101c157366023820112156101c15780600401359283116101c1576024810190602436918560061b0101116101c15760005b8381106100fa57005b8061011061010b6001938786611014565b611024565b6101258561011f848988611014565b01611024565b336000526000865260406000209173ffffffffffffffffffffffffffffffffffffffff80911692836000528752604060002091169081600052865260406000207fffffffffffffffffffffffff00000000000000000000000000000000000000008154169055604051918252858201527f89b1add15eff56b3dfe299ad94e01f2b52fbcb80ae1a3baea6ae8c04cb2b98a460403392a2016100f1565b600080fd5b346101c15760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c1576101fd610ca9565b610205610ccc565b61020d610cef565b73ffffffffffffffffffffffffffffffffffffffff92831660009081526020818152604080832094861683529381528382209285168252918252829020548251938116845265ffffffffffff60a082901c169184019190915260d01c90820152606090f35b346101c15760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c1576102a9610ca9565b6102b1610ccc565b906102ba610cef565b65ffffffffffff91606435838116918282036101c15779ffffffffffff0000000000000000000000000000000000000000933360005260006020527fffffffffffff000000000000000000000000000000000000000000000000000060406000209673ffffffffffffffffffffffffffffffffffffffff80941697886000526020528360406000209916988960005260205260406000209486156000146103a457504216925b8454921695869360a01b1691161717905560405191825260208201527fda9fa7c1b00402c17d0161b249b1ab8bbec047c5a52207b9c112deffd817036b60403392a4005b905092610360565b346101c15760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c1576103e3610ca9565b6103eb610ccc565b9060443565ffffffffffff808216918281036101c157336000526020906000825260406000209473ffffffffffffffffffffffffffffffffffffffff80911695866000528352604060002096169586600052825260406000205460d01c92838511156105255761ffff9084830316116104fb5733600052600082526040600020856000528252604060002086600052825260406000209079ffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffff000000000000000000000000000000000000000000000000000083549260d01b1691161790556040519283528201527f55eb90d810e1700b35a8e7e25395ff7f2b2259abd7415ca2284dfb1c246418f360403392a4005b60046040517f24d35a26000000000000000000000000000000000000000000000000000000008152fd5b60046040517f756688fe000000000000000000000000000000000000000000000000000000008152fd5b346101c15760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c157610586610ca9565b61058e610ccc565b610596610cef565b6064359173ffffffffffffffffffffffffffffffffffffffff831683036101c1576105c093610e48565b005b346101c15760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c15760206105fb6111c5565b604051908152f35b346101c1576101007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c15761063b610ca9565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc36019060c082126101c157604051906060820167ffffffffffffffff93838210858311176107eb5760809082604052126101c15761069981610d33565b73ffffffffffffffffffffffffffffffffffffffff9060243582811681036101c157815260443582811681036101c157608085015265ffffffffffff60643581811681036101c15760a086015260843590811681036101c15760c0850152835260a4359281841684036101c1576020810193845260c43594604082019086825260e4359081116101c157610731903690600401610dd7565b9190968042116107ba57506105c0966107b0926107aa879361075387516112e3565b90888b511690516040519160208301937ff3841cd1ff0085026a6327b620b67997ce40f282c88a8e905a7a5626e310f3d08552604084015260608301526080820152608081526107a281610d4f565b519020611280565b9161138f565b5192511691611045565b602490604051907fcd21db4f0000000000000000000000000000000000000000000000000000000082526004820152fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b346101c1577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6060813601126101c157610852610ca9565b906024359067ffffffffffffffff908183116101c15760609083360301126101c1576040519160608301838110838211176107eb5760405280600401358281116101c1578101366023820112156101c15760048101356108b181610dac565b916108bf6040519384610d6b565b8183526024602084019260071b820101903682116101c157602401915b818310610b1b5750505083526044906108f760248201610d12565b60208501520135908160408401526044359081116101c15761091d903690600401610dd7565b918042116107ba5750838351519161093483610dac565b926109426040519485610d6b565b8084527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061096f82610dac565b0136602086013760005b818110610a94575050604051602081019081602086519196019060005b818110610a7b575050506109d481610a4596037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610d6b565b519020936107aa73ffffffffffffffffffffffffffffffffffffffff958660208901511660408901516040519160208301937faf1b0d30d2cab0380e68f0689007e3254993c596f2fdd0aaa7f4d04f794408638552604084015260608301526080820152608081526107a281610d4f565b602082015116908051519160005b838110610a5c57005b80610a758387610a6f6001958851610e05565b51611045565b01610a53565b825188526020978801978b975090920191600101610996565b9091939250610aad610aa7828851610e05565b516112e3565b610ab78285610e05565b527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610aec576001019086929391610979565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6080833603126101c1576020608091604051610b3681610d33565b610b3f86610d12565b8152610b4c838701610d12565b83820152610b5c60408701610dc4565b6040820152610b6d60608701610dc4565b60608201528152019201916108dc565b346101c1576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c15767ffffffffffffffff6004358181116101c157366023820112156101c15780600401359182116101c1576024906007368385831b840101116101c15760005b848110610bf557005b80821b83019060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc83360301126101c157610ca3600192604051610c3981610d33565b610c44888301610d12565b8082526060610c5560448501610d12565b92838d820152610c796084610c6c60648801610d12565b9687604085015201610d12565b918291015273ffffffffffffffffffffffffffffffffffffffff8080809316951693169116610e48565b01610bec565b6004359073ffffffffffffffffffffffffffffffffffffffff821682036101c157565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036101c157565b6044359073ffffffffffffffffffffffffffffffffffffffff821682036101c157565b359073ffffffffffffffffffffffffffffffffffffffff821682036101c157565b6080810190811067ffffffffffffffff8211176107eb57604052565b60a0810190811067ffffffffffffffff8211176107eb57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176107eb57604052565b67ffffffffffffffff81116107eb5760051b60200190565b359065ffffffffffff821682036101c157565b9181601f840112156101c15782359167ffffffffffffffff83116101c157602083818601950101116101c157565b8051821015610e195760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b909273ffffffffffffffffffffffffffffffffffffffff8092169060009282845283602052604094818686209316928386526020528585203386526020528585209687549765ffffffffffff8960a01c16804211610fe4575083891698848a03610f6c575b505086975092828697928796946064966020999551967f23b872dd00000000000000000000000000000000000000000000000000000000885260048801521660248601521660448401525af19051600114601f3d11163d15171615610f0f5750565b606490517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152fd5b8985851611600014610fa85760248a8a51907ff96fb0710000000000000000000000000000000000000000000000000000000082526004820152fd5b7fffffffffffffffffffffffff000000000000000000000000000000000000000016988390038416989098179097559495869590826020610ead565b6024908951907fd81b2f2e0000000000000000000000000000000000000000000000000000000082526004820152fd5b9190811015610e195760061b0190565b3573ffffffffffffffffffffffffffffffffffffffff811681036101c15790565b9065ffffffffffff908160608401511673ffffffffffffffffffffffffffffffffffffffff9081855116948260208201511692808660408094015116951695600091878352826020528383208984526020528383209916988983526020528282209184835460d01c0361119c57918561117594927fc6a377bfc4eb120024a8ac08eef205be16b817020812c73223e81d1bdb9708ec9897969450871560001461117a5779ffffffffffff00000000000000000000000000000000000000009042165b60a01b167fffffffffffff00000000000000000000000000000000000000000000000000006001860160d01b1617179055519384938491604091949373ffffffffffffffffffffffffffffffffffffffff606085019616845265ffffffffffff809216602085015216910152565b0390a4565b5079ffffffffffff000000000000000000000000000000000000000087611107565b600484517f756688fe000000000000000000000000000000000000000000000000000000008152fd5b467f000000000000000000000000000000000000000000000000000000000000000003611210577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86682527f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a60408201524660608201523060808201526080815261127a81610d4f565b51902090565b6112886111c5565b906040519060208201927f1901000000000000000000000000000000000000000000000000000000000000845260228301526042820152604281526080810181811067ffffffffffffffff8211176107eb5760405251902090565b60405160208101917f65626cad6cb96493bf6f5ebea28756c966f023ab9e8a83a7101849d5573b3678835273ffffffffffffffffffffffffffffffffffffffff8082511660408401526020820151166060830152606065ffffffffffff9182604082015116608085015201511660a082015260a0815260c0810181811067ffffffffffffffff8211176107eb5760405251902090565b91908260409103126101c1576020823592013590565b6000843b6114f6575060418203611474576113ac82820182611379565b93909260401015610e195760209360009360ff6040608095013560f81c5b60405194855216868401526040830152606082015282805260015afa156114685773ffffffffffffffffffffffffffffffffffffffff806000511691821561143e57160361141457565b60046040517f815e1d64000000000000000000000000000000000000000000000000000000008152fd5b60046040517f8baa579f000000000000000000000000000000000000000000000000000000008152fd5b6040513d6000823e3d90fd5b604082036114cc5761148891810190611379565b91601b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84169360ff1c019060ff8211610aec5760209360009360ff6080946113ca565b60046040517f4be6321b000000000000000000000000000000000000000000000000000000008152fd5b929391601f928173ffffffffffffffffffffffffffffffffffffffff60646020957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0604051988997889687947f1626ba7e000000000000000000000000000000000000000000000000000000009e8f8752600487015260406024870152816044870152868601378b85828601015201168101030192165afa9081156116775782916115f2575b507fffffffff00000000000000000000000000000000000000000000000000000000915016036115c857565b60046040517fb0669cbc000000000000000000000000000000000000000000000000000000008152fd5b90506020813d821161166f575b8161160c60209383610d6b565b8101031261166b5751907fffffffff000000000000000000000000000000000000000000000000000000008216820361166857507fffffffff00000000000000000000000000000000000000000000000000000000903861159c565b80fd5b5080fd5b3d91506115ff565b6040513d84823e3d90fdfea2646970667358221220c6d964ac140fe6a77a17b361a05866b99d0cb3ec7608d26bc3900039f1ce165764736f6c63430008110033";
