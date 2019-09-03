'use strict';

module.exports = {
  types: [
    {
      value: 'WIP',
      name : '💪  WIP:      正在开发中'
    },
    {
      value: 'feat',
      name : '✨  feat:     新功能'
    },
    {
      value: 'fix',
      name : '🐞  fix:      修复，错误修复'
    },
    {
      value: 'refactor',
      name : '🛠  refactor: 重构，代码更改既不修复错误也不添加功能'
    },
    {
      value: 'docs',
      name : '📚  docs:     修改文档'
    },
    {
      value: 'test',
      name : '🏁  test:     添加缺失测试或更正现有测试'
    },
    {
      value: 'chore',
      name : '🗯  chore:    不修改src或测试文件的更改。比如更新构建任务，包管理器'
    },
    {
      value: 'style',
      name : '💅  style:    代码风格，不影响代码含义的更改（空格，格式，缺少分号等）'
    },
    {
      value: 'revert',
      name : '⏪  revert:   恢复为提交 '
    }
  ],
  allowBreakingChanges: ["feat", "fix"]
};