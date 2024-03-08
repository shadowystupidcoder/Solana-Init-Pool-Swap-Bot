//@ts-nocheck
import { Liquidity, MAINNET_PROGRAM_ID as MAINNET_PROGRAM_ID, Token as RaydiumToken, ENDPOINT as _ENDPOINT, Currency, LOOKUP_TABLE_CACHE, Token,
RAYDIUM_MAINNET, TxVersion } from '@raydium-io/raydium-sdk';
import { Connection, Keypair, PublicKey, SystemProgram, Transaction, TransactionMessage, TransactionMessageArgs, VersionedTransaction,
LookupTableInstructionType, AddressLookupTableAccount, AddressLookupTableProgram, ParsedAddressTableLookup } from '@solana/web3.js';
import { BN } from 'bn.js';
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import * as spl from "@solana/spl-token";
import { pushTable } from "./src/createLookupTable";
import { getWalletTokenAccount } from './src/util';
import { derivePoolKeys } from "./src/poolKeys";
import { makeSwap } from "./src/swap";
import * as id from "./src/main"
import { getWalletTokenAccount } from './util';
import { derivePoolKeys } from "./poolKeys";
import { makeSwap } from "./swap";


// user settings
export const rpcUrl = ""
export const rpcToken = ""
export const swapWallet = Keypair.fromSecretKey(Uint8Array.from([]))
export const wallet = Keypair.fromSecretKey(Uint8Array.from([]))
export const connection = new Connection(rpcUrl)

// misc
export const PROGRAMIDS = MAINNET_PROGRAM_ID;
export const ENDPOINT = _ENDPOINT;
export const RAYDIUM_MAINNET_API = RAYDIUM_MAINNET;
export const makeTxVersion = TxVersion.V0;
export const addLookupTableInfo = LOOKUP_TABLE_CACHE
export const DEFAULT_TOKEN = {
  'SOL': new Currency(9, 'USDC', 'USDC'),
  'WSOL': new Token(TOKEN_PROGRAM_ID, new PublicKey('So11111111111111111111111111111111111111112'), 9, 'WSOL', 'WSOL'),
  'USDC': new Token(TOKEN_PROGRAM_ID, new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'), 6, 'USDC', 'USDC'),
  'RAY': new Token(TOKEN_PROGRAM_ID, new PublicKey('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'), 6, 'RAY', 'RAY'),
  'RAY_USDC-LP': new Token(TOKEN_PROGRAM_ID, new PublicKey('FGYXP4vBkMEtKhxrmEBcWN8VNmXX8qNgEJpENKDETZ4Y'), 6, 'RAY-USDC', 'RAY-USDC') }


export const ZERO = new BN(0)
export type BN = typeof ZERO

export type CalcStartPrice = {
  addBaseAmount: BN
  addQuoteAmount: BN
}
export function calcMarketStartPrice(input: CalcStartPrice) {
  return input.addBaseAmount.toNumber() / 10 ** 6 / (input.addQuoteAmount.toNumber() / 10 ** 6)
}

export type LiquidityPairTargetInfo = {
  baseToken: Token
  quoteToken: Token
  targetMargetId: PublicKey
}
export function getMarketAssociatedPoolKeys(input: LiquidityPairTargetInfo) {
  return Liquidity.getAssociatedPoolKeys({
    version: 4,
[REDACTED]
    programId: PROGRAMIDS.AmmV4,
    marketProgramId: MAINNET_PROGRAM_ID.OPENBOOK_MARKET,
  })
}

export type WalletTokenAccounts = Awaited < ReturnType < typeof getWalletTokenAccount >>
  export type TestTxInputInfo = LiquidityPairTargetInfo &
  CalcStartPrice & {
    startTime: number // seconds
    walletTokenAccounts: WalletTokenAccounts
    wallet: Keypair
  }

export {
  wallet,
  LiquidityPairTargetInfo,
  calcMarketStartPrice,
  CalcStartPrice,
  ZERO,
  getMarketAssociatedPoolKeys,
  TestTxInputInfo,
  WalletTokenAccounts,
  BN,
  TOKEN_PROGRAM_ID,
  spl,
  pushTable,
  Liquidity,
  RAYDIUM_MAINNET_PROGRAM_ID,
  RaydiumToken,
  _ENDPOINT,
  Currency,
  LOOKUP_TABLE_CACHE,
  RAYDIUM_MAINNET,
  TxVersion,
  Connection,
  Keypair,
  Token,
  DEFAULT_TOKEN,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionMessage,
  TransactionMessageArgs,
  VersionedTransaction,
  LookupTableInstructionType,
  AddressLookupTableAccount,
  AddressLookupTableProgram,
  ParsedAddressTableLookup,
  getWalletTokenAccount,
  derivePoolKeys,
  makeSwap
};
