import type { CAC } from "cac";
import {
  ACTIVATION,
  execCommand,
  loggerInfo,
  ProjectSource,
  projectSources,
} from "code-genius";
import enquirer from "enquirer";

interface PromptResult {
  command: string;
}

const createProject = async (sources: ProjectSource[]) => {
  if (ACTIVATION) {
    loggerInfo(`createProject 参数信息: \n ${JSON.stringify(sources)}`);
  }

  const sourceChoices = sources.map(({ name, display, description }) => {
    const formatDisplay = `${display}:`.padEnd(20);
    return {
      name: name,
      message: `${formatDisplay}${description}`,
    };
  });

  const result = await enquirer.prompt<PromptResult>([
    {
      name: "command",
      type: "select",
      message: "请选择提交类型",
      choices: sourceChoices,
    },
  ]);
  const commands = result.command.split(" ");

  await execCommand(commands[0], [...commands.slice(1)], {
    stdio: "inherit",
  });
};

const createProjectInstaller = () => {
  return {
    name: "createProjectInstaller",
    setup: (cli: CAC) => {
      cli
        .command("create", "运行 npm create 快速创建基础项目")
        .action(async () => {
          await createProject(projectSources);
        });
    },
  };
};

export { createProject, createProjectInstaller };
