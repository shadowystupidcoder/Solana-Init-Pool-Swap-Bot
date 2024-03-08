//@ts-nocheck
import * as spl from "@solana/spl-token"
import { Market } from '@openbook-dex/openbook'
import { wallet, connection } from "../config"
import { Keypair, PublicKey, Connection, SystemProgram, Transaction, TransactionInstruction, sendAndConfirmTransaction } from '@solana/web3.js'
import { createAssociatedTokenAccountIdempotent, getAssociatedTokenAddress, createSyncNativeInstruction, createAssociatedTokenAccountIdempotentInstruction} from "@solana/spl-token"
[REDACTED]
export async function derivePoolKeys(marketId) {
  const marketInfo = await getMarketInfo(marketId);
  const marketDeco = await getDecodedData(marketInfo);
  const baseMint = marketDeco.baseMint;
  const baseMintData = await getMintData(baseMint);
  const baseDecimals = await getDecimals(baseMintData);
  const ownerBaseAta = await getOwnerAta(baseMint, wallet.publicKey);
  const quoteMint = marketDeco.quoteMint;
  const quoteMintData = await getMintData(quoteMint);
  const quoteDecimals = await getDecimals(quoteMintData);
  const ownerQuoteAta = await getOwnerAta(quoteMint, wallet.publicKey);
  const lpMint = PublicKey.findProgramAddressSync([rayV4.toBuffer(), marketId.toBuffer(), Buffer.from('lp_mint_associated_seed', 'utf-8')], rayV4)[0]
  const ownerLpAta = await getOwnerAta(lpMint, wallet.publicKey);
  const authority = PublicKey.findProgramAddressSync([Buffer.from([97, 109, 109, 32, 97, 117, 116, 104, 111, 114, 105, 116, 121])], rayV4)[0];
  const marketAuthority = getVaultSigner(marketId, marketDeco);
  const poolKeys = {
	keg: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
    version: 4,
    marketVersion: 3,
    programId: rayV4,
    baseMint: baseMint,
    quoteMint: quoteMint,
    ownerBaseAta: ownerBaseAta,
    ownerQuoteAta: ownerQuoteAta,
	ownerLpAta: ownerLpAta,
    baseDecimals: baseDecimals,
    quoteDecimals: quoteDecimals,
	lpDecimals: baseDecimals,
    authority: authority,
    marketAuthority: marketAuthority,
	nonce: Number(marketDeco.vaultSignerNonce.toString()),
    marketProgramId: openbookProgram,
    marketId: marketId,
    marketBids: marketDeco.bids,
 [REDACTED]
	lookupTableAccount: new PublicKey("11111111111111111111111111111111")
  };
  return poolKeys;
}[REDACTED]
  const seeds = [marketId.toBuffer()];
  const seedsWithNonce = seeds.concat(Buffer.from([Number(marketDeco.vaultSignerNonce.toString())]), Buffer.alloc(7));
  const both = PublicKey.createProgramAddressSync(seedsWithNonce, openbookProgram)
return(both)
}