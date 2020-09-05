const vscode = require("vscode");
const rtlPatterns = require("./rtlPatterns");

function getPropertyRangeAtPosition(textDocument, position) {
  for (const object of rtlPatterns.allRTLPatterns) {
    const range = textDocument.getWordRangeAtPosition(position, object.pattern);
    if (range) {
      return { range, link: object.link };
    }
  }
}

function buildMarkdownString(link) {
  let markdownString = [];
  const commandUri = vscode.Uri.parse("command:rtlcheatsheet.rtlCheatsheet");
  const apiLink = new vscode.MarkdownString(
    `Learn more about it [here](${link})`
  );
  const rtlCommand = new vscode.MarkdownString(
    `[Open React Testing Library Cheatsheet](${commandUri} "Open React Testing Library Cheatsheet")`
  );

  // To enable command URIs in Markdown content, you must set the `isTrusted` flag.
  // When creating trusted Markdown string, make sure to properly sanitize all the
  // input content so that only expected command URIs can be executed
  rtlCommand.isTrusted = true;
  apiLink.isTrusted = true;

  markdownString.push(apiLink);
  markdownString.push(rtlCommand);
  return markdownString;
}

module.exports = { getPropertyRangeAtPosition, buildMarkdownString };
