//@ts-nocheck
import { LiquidityPairTargetInfo, calcMarketStartPrice, CalcStartPrice, ZERO, getMarketAssociatedPoolKeys, TestTxInputInfo, WalletTokenAccounts, BN, TOKEN_PROGRAM_ID,
spl, pushTable, Liquidity, RAYDIUM_MAINNET_PROGRAM_ID, RaydiumToken, _ENDPOINT, Currency, LOOKUP_TABLE_CACHE, RAYDIUM_MAINNET, TxVersion, Connection, Keypair,
PublicKey, SystemProgram, Transaction, TransactionMessage, TransactionMessageArgs, VersionedTransaction, LookupTableInstructionType, AddressLookupTableAccount, AddressLookupTableProgram,
ParsedAddressTableLookup, getWalletTokenAccount, derivePoolKeys, makeSwap, connection, pushTable, PROGRAMIDS, wallet, Token, makeTxVersion, DEFAULT_TOKEN} from "../config"


export const marketId = new PublicKey("String");
const baseTokenMint = new PublicKey("String");
const baseTokenDecimals = Number
const quoteTokenMint = DEFAULT_TOKEN.WSOL;
const addBaseAmount = new BN(Number);
const addQuoteAmount = new BN(Number);
const startTime = Math.floor(Date.now() / 1000);
const baseTokenSymbol = "String"
const baseTokenName = "String"
const swapAmountAfterInit = Number

async function ammCreatePool(input: TestTxInputInfo): Promise < any > {
 [REDACTED]
}

async function getWalletAccounts() {
  return await getWalletTokenAccount(connection, wallet.publicKey);
}

async function getPoolKeys() {
  return await derivePoolKeys(marketId);
}
async function getTableAddress(poolKeys) {
  var addresses = []
  for (const each in poolKeys) {
[REDACTED]
}

async function main() {
  const baseToken = new Token(TOKEN_PROGRAM_ID, baseTokenMint, baseTokenDecimals, baseTokenSymbol, baseTokenName);
  const quoteToken = quoteTokenMint;
  const walletTokenAccounts = await getWalletAccounts();

  const instructs = await ammCreatePool({
[REDACTED]
  });

  const poolKeys = await getPoolKeys();
  const lTable = await getTableAddress(poolKeys);
  const swap = await makeSwap(poolKeys, swapAmountAfterInit, 0, lTable);
  const tx = new Transaction()
  console.log(swap.keys)
  console.log(instructs[0].instructions[0])
 [REDACTED]
  const transaction = new VersionedTransaction(messageV0);
  transaction.sign([wallet]);
  const txid = await connection.sendTransaction(transaction, {
    maxRetries: 5,
    skipPreflight: false
  });
  console.log(txid)

}

main()