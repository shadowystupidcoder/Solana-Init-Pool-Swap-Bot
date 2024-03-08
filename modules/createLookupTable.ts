//@ts-nocheck
import { PublicKey, AddressLookupTableProgram, VersionedTransaction, TransactionMessage} from '@solana/web3.js';
import { Connection, Keypair } from '@solana/web3.js';
import { derivePoolKeys } from "./poolKeys"
import { wallet, connection} from "../config"
import BN from "bn.js"

async function makeTx(txInst) {
let bh = await connection.getLatestBlockhash('finalized')
const messageV0 = new TransactionMessage({ payerKey: wallet.publicKey, recentBlockhash: bh.blockhash, instructions: txInst }).compileToV0Message()
const transaction = new VersionedTransaction(messageV0)
transaction.sign([wallet])
const txid = await connection.sendTransaction(transaction, { maxRetries: 2 })
[REDACTED]
const sent = await connection.sendTransaction(tx, {skipPreflight: false})

const confirm = await connection.confirmTransaction({
signature: sent,
blockhash: bh.blockhash,
lastValidBlockHeight: bh.lastValidBlockHeight }, "finalized")

if (!confirm.value.err) {
return lookupTableAddress } else { console.dir(confirm.value.err)
return null } }

export async function pushTable(addresses) {
const tableAddr = await createTable()
if (tableAddr) {
const addAddressesInstruction = AddressLookupTableProgram.extendLookupTable({
payer: wallet.publicKey,
authority: wallet.publicKey,
lookupTable: new PublicKey(tableAddr),
addresses })

await makeTx([addAddressesInstruction])
return tableAddr } else {
return null } }
