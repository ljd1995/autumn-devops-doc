# 安装

这里将带你安装 Autumn

## 前端

建议使用 `pnpm` 管理依赖

相关命令如下

```bash
# 全局安装pnpm
npm i -g pnpm
# 验证
pnpm -v # 出现对应版本号即代表安装成功
# 安装依赖
pnpm install
# 启动开发环境
pnpm dev
# 编译部署
pnpm build
```

## 后端

建议使用 `pdm` 管理依赖

- 依赖安装

```bash
# 安装依赖
pdm install
```

- 修改配置

后端启动前请修改[配置](./settings.md), 必要的配置修改如下

```python
# config/setting.py

# 数据库地址
DB_ADDRESS: str = "mysql://root:123456@127.0.0.1:3306/autumn"

# Redis Host
REDIS_HOST: str = "127.0.0.1"
# Redis Port
REDIS_PORT: int = 6379
# Redis database
REDIS_DB: int = 0
```

- 执行数据库迁移

```bash
pdm run aerich init -t config.db.TORTOISE_ORM
pdm run aerich init-db
```

- 执行预 SQL

```sql
INSERT INTO `autumn`.`t_wiki_category` (`id`, `name`, `remark`, `parent_id`, `zone_id`) VALUES (1, '根', '', NULL, NULL);
INSERT INTO `autumn`.`t_script` (`id`, `name`, `content`, `exec_command`, `remark`, `node_type`, `create_user`,`update_user`, `parent_id`) VALUES (1, '根', '', 'shell', '', 'group', '', '', NULL);
INSERT INTO `autumn`.`t_host_group` (`id`, `name`, `remark`, `parent_id`) VALUES (1, '根', '', NULL);
```

- 启动命令

```bash
# 启动开发环境
pdm run uvicorn main:app
# 生产环境建议使用gunicorn管理
# 安装
pip install "uvicorn[standard]" gunicorn
# 启动生产环境
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```
