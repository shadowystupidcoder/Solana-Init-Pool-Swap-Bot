//@ts-nocheck

import {
  buildSimpleTransaction,
  findProgramAddress,
  InnerSimpleV0Transaction,
  SPL_ACCOUNT_LAYOUT,
  TOKEN_PROGRAM_ID,
  TokenAccount,
} from '@raydium-io/raydium-sdk';
import {
  Connection,
  Keypair,
  PublicKey,
  SendOptions,
  Signer,
  Transaction,
  VersionedTransaction,
} from '@solana/web3.js';

import {
  addLookupTableInfo,
  connection,
  makeTxVersion,
  wallet,
} from '../config';

[REDACTED]
  return await sendTx(connection, wallet, willSendTx, options)
}

export function getATAAddress(programId: PublicKey, owner: PublicKey, mint: PublicKey) {
  const { publicKey, nonce } = findProgramAddress(
    [owner.toBuffer(), programId.toBuffer(), mint.toBuffer()],
    new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")
  );
  return { publicKey, nonce };
}

export async function sleepTime(ms: number) {
  console.log((new Date()).toLocaleString(), 'sleepTime', ms)
  return new Promise(resolve => setTimeout(resolve, ms))
}
