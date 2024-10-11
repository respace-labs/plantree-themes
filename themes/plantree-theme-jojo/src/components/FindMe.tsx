import SocialIcon from './social-icons'

interface Props {
  siteMetadata: any
}

const socialPlatforms = [
  { kind: 'mail', key: 'email', separator: ',' },
  { kind: 'github', key: 'github', separator: ',' },
  { kind: 'facebook', key: 'facebook', separator: ',' },
  { kind: 'youtube', key: 'youtube', separator: ',' },
  { kind: 'linkedin', key: 'linkedin', separator: ',' },
  { kind: 'twitter', key: 'twitter', separator: ',' },
  { kind: 'x', key: 'x', separator: ',' },
  { kind: 'instagram', key: 'instagram', separator: ',' },
  { kind: 'threads', key: 'threads', separator: '' },
]

export default function FindMe({ siteMetadata }: Props) {
  return (
    <div className="flex items-center">
      <span>Find me on </span>
      <div className="flex space-x-1 justify-center items-center">
        {socialPlatforms.map((platform, index) => (
          <div key={platform.kind} className="flex justify-center items-center">
            <SocialIcon
              kind={
                platform.kind as
                  | 'mail'
                  | 'github'
                  | 'facebook'
                  | 'youtube'
                  | 'linkedin'
                  | 'twitter'
                  | 'x'
                  | 'instagram'
                  | 'threads'
              }
              href={siteMetadata[platform.key]}
            />
            {index < socialPlatforms.length - 1 && (
              <span className="mx-1">{platform.separator}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
