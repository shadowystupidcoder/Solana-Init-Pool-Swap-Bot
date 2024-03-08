//@ts-nocheck
import { u16, blob, u8, u32, seq, struct } from "@solana/buffer-layout"
import { bool, u64, publicKey, u128 } from "@solana/buffer-layout-utils"

export const SPL_MINT_LAYOUT = struct([
  u32('mintAuthorityOption'),
  publicKey('mintAuthority'),
  u64('supply'),
  
  
[REDACTED]

  publicKey('delegate'),
  u8('state'),
  u32('isNativeOption'),
  u64('isNative'),
  u64('delegatedAmount'),
  u32('closeAuthorityOption'),
  publicKey('closeAuthority'),
])