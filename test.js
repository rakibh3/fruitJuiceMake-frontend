import { compile } from 'html-to-text'

const options = {
  wordwrap: null,
}

const compileConvert = compile(options)

export const getPlainText = (content) => {
  if (!content) return null
  return content.map(compileConvert).join('\n')
}

const blogContent = [
  '<p>Hello</p><h1>My name is Rakib</h1><p>Test</p><p>Test</p><p>TesYEWWWWWWWWWWWWWWWWWWWWWWWWW</br>WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWKKKKKKKKKKKKKKKKKbbbbbbbbbbbbhhhhhhhhhhhhhfffffffffffffffffffffffffffffWWWWWWWWWWWWWt</p>',
]

const plainTextPreview = getPlainText(blogContent)

console.log(plainTextPreview)
