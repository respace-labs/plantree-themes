import { create } from 'kubo-rpc-client'

export async function addToIpfs(value: string) {
  const client = create(new URL(process.env.NEXT_PUBLIC_IPFS_API!))
  const { cid } = await client.add(value, { pin: true })
  return cid.toString()
}
