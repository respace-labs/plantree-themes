'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { useAddress } from '@/hooks/useAddress'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { cn } from '@/lib/utils'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'
import { UserAvatar } from '../UserAvatar'

interface Props extends HTMLAttributes<any> {
  className?: string
  showEnsName?: boolean
  showAddress?: boolean
  showFullAddress?: boolean
  showCopy?: boolean
}

export const ProfileAvatar = forwardRef<HTMLDivElement, Props>(
  function ProfileAvatar(
    {
      className = '',
      showEnsName,
      showAddress,
      showFullAddress,
      showCopy,
      ...rest
    },
    ref,
  ) {
    const address = useAddress()
    const shortAddress = address.slice(0, 6) + '...' + address.slice(-4)
    const { copy } = useCopyToClipboard()

    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...rest}
      >
        <UserAvatar address={address} />
        {(showEnsName || showAddress) && (
          <div>
            {showAddress && (
              <div className="flex gap-2 items-center">
                <div className={cn('text-sm')}>{shortAddress}</div>
                {showCopy && (
                  <Copy
                    size={14}
                    className="text-neutral-500 cursor-pointer hover:text-neutral-800"
                    onClick={() => {
                      copy(address)
                      toast.success('Address copied to clipboard')
                    }}
                  ></Copy>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    )
  },
)
