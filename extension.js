const vscode = require('vscode');
const webViewContent = require('./webViewContent');
const path = require('path');
const Utils = require('./src/utils');

/*******************
 * Constants
 *******************/

 const SUPPORTED_FILES = ['javascript', 'typescript'];
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('rtlcheatsheet.rtlCheatsheet', () => {
			const styleRoot = vscode.Uri.file(path.join(context.extensionPath, 'style'));
			const panel = vscode.window.createWebviewPanel(
				'rtlCheatsheet',
				'React Testing Library Cheatsheet',
				vscode.ViewColumn.Beside, {
					localResourceRoots: [
						styleRoot,
					]
				}
			);
			panel.webview.html = webViewContent.getWebViewContent(panel.webview.cspSource, panel.webview.asWebviewUri(styleRoot));
		}),

		vscode.languages.registerHoverProvider(
			SUPPORTED_FILES, {
				provideHover(doc, pos) {
					const range = Utils.getPropertyRangeAtPosition(doc, pos);
					if (range === undefined) {
						return;
					}
					const markdownString = Utils.buildMarkdownString();
					return new vscode.Hover(markdownString, range);
				}
			})
  );
}

exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
