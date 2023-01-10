import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { useRouter } from 'next/router'

import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'

const navigationCN = [
  {
    expand: true,
    title: '开始',
    links: [
      { title: '介绍', href: '/' },
      { title: '快速开始', href: '/quick-start' }
    ],
  },
  {
    expand: true,
    title: '节点',
    links: [{ title: '运行全节点', href: '/docs/run-fullnode' }],
  },
  {
    expand: true,
    title: '参与 quorum 开发',
    links: [
      { title: '源码编译 quorum', href: '/docs/build-quorum' },
      { title: '编写 SDK', href: '/docs/build-sdk' }
    ],
  },
  {
    expand: true,
    title: '内容',
    links: [{ title: '格式说明和例子', href: '/docs/data-format-and-examples' }],
  },
];

const navigationEN = [
  {
    expand: true,
    title: '前言（en）',
    links: [{ title: '快速开始（en）', href: '/' }],
  },
  {
    expand: true,
    title: '节点（en）',
    links: [{ title: '运行全节点（en）', href: '/docs/en/run-fullnode' }],
  },
  {
    title: '参与 quorum 开发（en）',
    links: [{ title: '源码编译 quorum（en）', href: '/docs/en/build-quorum' }],
  },
];

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (/^h[23]$/.test(node.name)) {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title) || simpleHash(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

const simpleHash = (str) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash &= hash // Convert to 32bit integer
  }
  return new Uint32Array([hash])[0].toString(36)
}

export default function App({ Component, pageProps }) {
  let router = useRouter();
  const lang = router.pathname.includes('/docs/en') ? 'en' : 'cn';

  let title = pageProps.markdoc?.frontmatter.title

  let pageTitle = `${pageProps.markdoc?.frontmatter.title} - Rum Docs`

  let description = pageProps.markdoc?.frontmatter.description

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Layout
        navigation={lang === 'cn' ? navigationCN : navigationEN}
        title={title}
        tableOfContents={tableOfContents}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
