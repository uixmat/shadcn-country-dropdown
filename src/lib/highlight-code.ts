import { codeToHtml } from "shiki"

export async function highlightCode(code: string, lang: string = "jsx") {
  const html = await codeToHtml(code, {
    lang: lang,
    theme: "github-dark",
    transformers: [
      {
        code(node) {
          node.properties["data-line-numbers"] = ""
        },
      },
    ],
  })

  return html
}