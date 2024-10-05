// import {
//     ActionPostResponse,
//     ACTIONS_CORS_HEADERS,
//     createPostResponse,
//     ActionGetResponse,
//     ActionPostRequest,
//   } from "@solana/actions";
//   import {
//     clusterApiUrl,
//     Connection,
//     PublicKey,
//     Transaction,
//   } from "@solana/web3.js";
//   import * as splToken from "@solana/spl-token";
//   import { DEFAULT_SOL_ADDRESS, DEFAULT_SOL_AMOUNT } from "./const";
  
//   class SolanaDonationService {
//     private SOLANA_MAINNET_USDC_PUBKEY = "HgbrurVvvFNjyGZr21b6v7jRD3r1LR8ZTsTB3b5kv7MW";
//     private connection: Connection;
  
//     constructor() {
//       this.connection = new Connection(clusterApiUrl("mainnet-beta"));
//     }
  
//     // Method to handle GET requests
//     public async handleGetRequest(req: Request): Promise<Response> {
//       try {
//         const requestUrl = new URL(req.url);
//         const { toPubkey } = this.validatedQueryParams(requestUrl);
  
//         const baseHref = new URL(
//           `/api/actions/transfer-spl?to=${toPubkey.toBase58()}`,
//           requestUrl.origin
//         ).toString();
  
//         const payload: ActionGetResponse = {
//             title: "Donate USDC to Solana Swap",
//             icon: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1720977255/Solana_logo_natqeg.png",
//             description: `Help our platform expand more easily by donating to ${DEFAULT_SOL_ADDRESS.toBase58()}`,
//             links: {
//                 actions: [
//                     { label: "Send 10 USDC", href: `${baseHref}&amount=10`, type: "external-link" },
//                     { label: "Send 50 USDC", href: `${baseHref}&amount=50`, type: "external-link" },
//                     { label: "Send 100 USDC", href: `${baseHref}&amount=100`, type: "external-link" },
//                     { label: "Send Custom Amount", href: `${baseHref}&amount={amount}`, type: "external-link", parameters: [{ name: "amount", label: "Enter the amount of USDC to send", required: true }] },
//                 ],
//             },
//             label: ""
//         };
  
//         return new Response(JSON.stringify(payload), { headers: ACTIONS_CORS_HEADERS });
//       } catch (err) {
//         console.error(err);
//         return new Response("An error occurred", { status: 400, headers: ACTIONS_CORS_HEADERS });
//       }
//     }
  
//     // Method to handle POST requests
//     public async handlePostRequest(req: Request): Promise<Response> {
//       try {
//         const requestUrl = new URL(req.url);
//         const { amount, toPubkey } = this.validatedQueryParams(requestUrl);
//         const body: ActionPostRequest = await req.json();
  
//         const account = new PublicKey(body.account);
//         const mintAddress = new PublicKey(this.SOLANA_MAINNET_USDC_PUBKEY);
//         const decimals = 6;
  
//         let transferAmount = parseFloat(amount.toString()) * Math.pow(10, decimals);
  
//         const fromTokenAccount = await splToken.getAssociatedTokenAddress(mintAddress, account, false);
//         let toTokenAccount = await splToken.getAssociatedTokenAddress(mintAddress, toPubkey, true);
  
//         const recipientAccountInfo = await this.connection.getAccountInfo(toTokenAccount);
  
//         let instructions: any[] = [];
//         if (!recipientAccountInfo) {
//           instructions.push(splToken.createAssociatedTokenAccountInstruction(account, toTokenAccount, toPubkey, mintAddress));
//         }
  
//         instructions.push(splToken.createTransferInstruction(fromTokenAccount, toTokenAccount, account, transferAmount));
  
//         const transaction = new Transaction().add(...instructions);
//         transaction.feePayer = account;
//         transaction.recentBlockhash = (await this.connection.getLatestBlockhash()).blockhash;
  
//         const payload: ActionPostResponse = await createPostResponse({
//           fields: {
//             transaction,
//             message: `Donated ${amount} USDC to ${toPubkey.toBase58()}`,
//             type: "transaction",
//           },
//         });
  
//         return new Response(JSON.stringify(payload), { headers: ACTIONS_CORS_HEADERS });
//       } catch (err) {
//         console.error(err);
//         return new Response("An error occurred", { status: 400, headers: ACTIONS_CORS_HEADERS });
//       }
//     }
  
//     // Validating query parameters
//     private validatedQueryParams(requestUrl: URL) {
//       let toPubkey: PublicKey = DEFAULT_SOL_ADDRESS;
//       let amount: number = DEFAULT_SOL_AMOUNT;
  
//       if (requestUrl.searchParams.get("to")) {
//         toPubkey = new PublicKey(requestUrl.searchParams.get("to")!);
//       }
  
//       if (requestUrl.searchParams.get("amount")) {
//         amount = parseFloat(requestUrl.searchParams.get("amount")!);
//         if (amount <= 0) throw "Invalid amount";
//       }
  
//       return { amount, toPubkey };
//     }
//   }
  
//   export default SolanaDonationService;
  