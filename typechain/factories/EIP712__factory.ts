/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { EIP712 } from "../EIP712";

export class EIP712__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<EIP712> {
    return super.deploy(overrides || {}) as Promise<EIP712>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EIP712 {
    return super.attach(address) as EIP712;
  }
  connect(signer: Signer): EIP712__factory {
    return super.connect(signer) as EIP712__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): EIP712 {
    return new Contract(address, _abi, signerOrProvider) as EIP712;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
];

const _bytecode =
  "0x60c0346100b9574660a052602081017f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681527f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a60408301524660608301523060808301526080825260a082019180831060018060401b038411176100a3578260405251902060805261019890816100bf8239608051816085015260a05181605b0152f35b634e487b7160e01b600052604160045260246000fd5b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c633644e5151461002a57600080fd5b3461015e57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261015e57467f0000000000000000000000000000000000000000000000000000000000000000036100ad57505060207f00000000000000000000000000000000000000000000000000000000000000005b604051908152f35b60208101907f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86682527f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a60408201524660608201523060808201526080815260a0810181811067ffffffffffffffff82111761013157602093506040525190206100a5565b6024847f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b5080fdfea2646970667358221220576781cc7ea677762e545bd0923cde721b3b865805ede94f927139683040977f64736f6c63430008110033";