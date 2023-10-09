# @codegenius/create-plugin

## 安装

```bash
npm i @codegenius/create-plugin -D
```

```javascript
import { defineConfig } from "code-genius";
import { createProjectInstaller } from "@codegenius/create-plugin";

export default defineConfig({
  plugins: [
    createProjectInstaller(),
  ],
});
```

## 使用

### 命令模式

```bash
codeg create
```