import { useCallback, useState } from 'react'
import copy from 'copy-to-clipboard';
import { useRouter } from 'next/router';
import { MdCheck, MdContentCopy } from 'react-icons/md';
import clsx from 'clsx';

export function Seed(props) {
  const [copied, setCopied] = useState(false)
  const handleCopy = useCallback(() => {
    copy(props.seed)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }, [props.seed])

  const router = useRouter();
  const lang = router.pathname.includes('/docs/en') ? 'en' : 'cn';

  return (<>
    <button
      className="flex items-center gap-1 text-orange-500 text-sm -mt-4"
      onClick={handleCopy}
    >
      {copied ? <MdCheck /> : <MdContentCopy />}
      {lang === 'cn' && '复制'}
      {lang === 'en' && 'Copy'}
    </button>
    <pre className="overflow-hidden mt-1 py-2 px-3">
      {props.seed}
    </pre>
  </>)
}
