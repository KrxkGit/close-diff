import * as vscode from 'vscode';

// 运行时 i18n：读取 VSCode 当前语言对应的 NLS 文件
function getNls(): Record<string, string> {
  try {
    // VSCode 会将对应语言包注入到扩展目录下
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('../package.nls.' + vscode.env.language + '.json');
  } catch {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('../package.nls.json');
    } catch {
      return {};
    }
  }
}

function t(nls: Record<string, string>, key: string, ...args: (string | number)[]): string {
  let msg = nls[key] ?? key;
  args.forEach((arg, i) => {
    msg = msg.replace(`{${i}}`, String(arg));
  });
  return msg;
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'close-diff.closeAllDiffEditors',
    async () => {
      const nls = getNls();

      // 获取所有 tab groups 中的 tabs
      const tabGroups = vscode.window.tabGroups.all;
      const diffTabs: vscode.Tab[] = [];

      for (const group of tabGroups) {
        for (const tab of group.tabs) {
          // diff 视图的 input 类型为 TabInputTextDiff
          if (tab.input instanceof vscode.TabInputTextDiff) {
            diffTabs.push(tab);
          }
        }
      }

      if (diffTabs.length === 0) {
        vscode.window.showInformationMessage(t(nls, 'message.noDiffFound'));
        return;
      }

      // 批量关闭所有 diff tabs
      await vscode.window.tabGroups.close(diffTabs);
      vscode.window.showInformationMessage(t(nls, 'message.closed', diffTabs.length));
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
