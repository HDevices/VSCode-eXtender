import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('🎉 VSCode-eXtender extension activated');

  const disposable = vscode.commands.registerCommand('vscode-extender.shareWindow', async () => {
    const editors = vscode.window.visibleTextEditors;
    if (editors.length === 0) {
      vscode.window.showInformationMessage('No hay ventanas de editor abiertas para compartir');
      return;
    }

    const options = editors.map((editor) => {
      return {
        label: editor.document.fileName.split('/').pop() || 'Archivo desconocido',
        description: editor.document.languageId,
        editor: editor
      };
    });

    const selected = await vscode.window.showQuickPick(options, {
      placeHolder: 'Seleccione la ventana a compartir',
      canPickMany: false
    });

    if (selected) {
      const text = selected.editor.document.getText();
      vscode.window.showInformationMessage(`Compartiendo ventana: ${selected.label}`);
      // Aquí llamar a función para enviar datos al servidor WebSocket
      // Por ahora solo muestra en consola:
      console.log(`Contenido para compartir:\n${text.substring(0, 200)}...`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log('VSCode-eXtender extension desactivada');
}
