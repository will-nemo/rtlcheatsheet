const vscode = require('vscode');
const webViewContent = require('./webViewContent');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const disposableCommand = vscode.commands.registerCommand('rtlcheatsheet.rtlCheatsheet', () => {
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

		const cspSource = panel.webview.cspSource;
		const stylePath = panel.webview.asWebviewUri(styleRoot);

		panel.webview.html = webViewContent.getWebViewContent(cspSource, stylePath);
	});

	context.subscriptions.push(disposableCommand);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
