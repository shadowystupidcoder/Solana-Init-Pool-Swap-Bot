//@ts-nocheck
import { PublicKey, TransactionInstruction, Transaction, ComputeBudgetProgram, SystemProgram, AddressLookupTableAccount, AddressLookupTableProgram, AddressLookupTableInstruction} from '@solana/web3.js';
import { BN } from "bn.js"
import { wallet, connection} from '../config';
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))


const rayV4 = new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8')
export async function makeSwap(poolKeys, inn, out, lTable) {
console.log("waiting for lookup table to activate")
await wait(3000)
[REDACTED]
        addrs.push(address.toBase58())
}
}
if (addrs.length > 0) {
for (const each of addrs){
console.log(each, "LOOKUP")
}
const lookups = lookupTableAccount.value.state.addresses;
console.log(lookupTableAccount)
  const programId = rayV4
  [REDACTED]
    const accountMetas = [
	{pubkey: account1, isSigner: false, isWritable: false},
	{pubkey: account2, isSigner: false, isWritable: true},
	{pubkey: account3, isSigner: false, isWritable: false},
	{pubkey: account4, isSigner: false, isWritable: true},
	{pubkey: account5, isSigner: false, isWritable: true},
	{pubkey: account6, isSigner: false, isWritable: true},
	{pubkey: account7, isSigner: false, isWritable: true},
	{pubkey: account8, isSigner: false, isWritable: false},
	{pubkey: account9, isSigner: false, isWritable: true},
	{pubkey: account10, isSigner: false, isWritable: true},
	{pubkey: account11, isSigner: false, isWritable: true},
	{pubkey: account12, isSigner: false, isWritable: true},
	{pubkey: account13, isSigner: false, isWritable: true},
	{pubkey: account14, isSigner: false, isWritable: true},
	{pubkey: account15, isSigner: false, isWritable: false},
	{pubkey: account16, isSigner: false, isWritable: true},
	{pubkey: account17, isSigner: false, isWritable: true},
	{pubkey: account18, isSigner: true, isWritable: true}]
    const swap = new TransactionInstruction({ keys: accountMetas, programId, data: instructionData });
	return(swap)
}
}