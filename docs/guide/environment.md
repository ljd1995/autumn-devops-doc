# 环境准备

这里是前后端开发必要的环境准备

## 前端

- 本地环境

需要安装 [Pnpm](https://www.pnpm.cn/)、[Node.js](http://www.nodejs.com.cn/) 和 [Git](https://git-scm.com/)

- 工具配置

如果您使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - vue 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮
- [JSON to TS](https://marketplace.visualstudio.com/items?itemName=MariusAlchimavicius.json-to-ts) - JSON to TS

## 后端

- 本地环境

  项目基于[Python 3.10](https://www.python.org/downloads/)最新语法开发，请确保使用的 Python 版本符合要求
  项目基于[pdm](https://pdm.fming.dev/latest/)管理项目依赖，pdm 作者是国人，也是 pipenv 的开发者之一，相对于 pipenv、poetry 这类 python 依赖管理工具，pdm 支持 virtualenv、PEP582 两种模式，更加先进更好用，可用以下方式安装

  ```bash
  pip install pdm
  ```

  **以下建议安装**

  - mypy(检查 Python3 Type Hints)

  ```bash
  pip install mypy
  ```

  - flake8(检查 Python 代码风格和质量的一个 Python 工具)

  ```bash
  pip install flake8
  ```

  - black(快速不妥协的 python 代码格式化工具)

  ```bash
  pip install black
  ```

- 工具配置

如果您使用的 IDE 是[pycharm](https://www.jetbrains.com/pycharm/download/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [Git Commit Message Helper](https://plugins.jetbrains.com/plugin/13477-git-commit-message-helper) - Git 标准化提交
- [GitToolBox](https://plugins.jetbrains.com/plugin/7499-gittoolbox) - Git 扩展工具
- [Mypy](https://plugins.jetbrains.com/plugin/11086-mypy) - Python3 Type Hints 检查工具

## 数据库

- [MySQL](https://dev.mysql.com/downloads/) - MySQL 数据库
- [Redis](https://redis.io/download/) - MySQL 数据库
