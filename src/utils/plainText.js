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
  '<h2>Welcome to Our Blog!</h2>',
  '<p>This is a <strong>great</strong> article.</p>',
  '<i>We hope you enjoy it!</i>',
]

const plainTextPreview = getPlainText(blogContent)

console.log(plainTextPreview)
