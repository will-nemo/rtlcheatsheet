const vscode = require("vscode");
const webViewContent = require("./webViewContent");
const path = require("path");
const Utils = require("./src/utils");

/*******************
 * Constants
 *******************/

const SUPPORTED_FILES = ["javascript", "typescript", "javascriptreact", "typescriptreact"];

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // track current webview
  let currentPanel = undefined;

  context.subscriptions.push(
    vscode.commands.registerCommand("rtlcheatsheet.rtlCheatsheet", () => {
      const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanel) {
        currentPanel.reveal(columnToShowIn);
      } else {
        const styleRoot = vscode.Uri.file(
          path.join(context.extensionPath, "style")
        );
        currentPanel = vscode.window.createWebviewPanel(
          "rtlCheatsheet",
          "React Testing Library Cheatsheet",
          vscode.ViewColumn.Beside,
          {
            localResourceRoots: [styleRoot],
          }
        );
        currentPanel.webview.html = webViewContent.getWebViewContent(
          currentPanel.webview.cspSource,
          currentPanel.webview.asWebviewUri(styleRoot)
        );

        // Reset when the current panel is closed
        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );
      }
    }),

    vscode.languages.registerHoverProvider(SUPPORTED_FILES, {
      provideHover(doc, pos) {
        const { range, link } = Utils.getPropertyRangeAtPosition(doc, pos);
        if (range === undefined) {
          return;
        }
        const markdownString = Utils.buildMarkdownString(link);
        return new vscode.Hover(markdownString, range);
      },
    })
  );
}

exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
