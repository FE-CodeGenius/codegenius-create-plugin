export const projectSources: Array<ProjectSource> = [
  {
    name: "npm create vite@latest",
    display: "vite@latest",
    description: "创建由 Vite 驱动的新的项目",
  },
  {
    name: "npm create vue@latest",
    display: "vue@latest",
    description: "创建由 Vite 驱动的 Vue3 项目",
  },
  {
    name: "npm create vue@legacy",
    display: "vue@legacy",
    description: "创建由 Vite 驱动的 Vue2 项目(支持 IE11)",
  },
];

export interface ProjectSource {
  name: string;
  display: string;
  description: string;
}
