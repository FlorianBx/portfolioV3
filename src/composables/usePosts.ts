import fm from 'front-matter'
import MarkdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'
import tasklists from 'markdown-it-task-lists'
import toc from 'markdown-it-toc-done-right'

const md = new MarkdownIt({ html: true })
  .use(anchor)
  .use(tasklists)
  .use(toc)

type Post = {
  slug: string
  frontmatter: { title: string; date: string }
  html: string
}

export function usePosts(): Post[] {
  const modules = import.meta.glob('../posts/*.md', {
    eager: true,
    import: 'default',
    query: '?raw'
  })
  const posts: Post[] = []

  for (const path in modules) {
    const raw = modules[path] as string
    const { attributes, body } = fm<{ title: string; date: string }>(raw)
    const fileName = path
      .replace(/\?raw$/, '')
      .split('/')
      .pop()!
    const slug = fileName
      .replace(/\.md$/, '')
      .replace(/^\d{4}-\d{2}-\d{2}-/, '')

    posts.push({
      slug,
      frontmatter: { title: attributes.title, date: attributes.date },
      html: md.render(body)
    })
  }

  return posts.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  )
}
