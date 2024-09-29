import { convert } from "html-to-text";

export const getPlainText = (content) => {
  if (!content) return null;
  return convert(content, { wordwrap: null });
};
