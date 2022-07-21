// const FILE_PATH = 'src/components';
import config from './config.js';

export default {
  description: '生成器的描述',
  prompts: [
    // 发出的命令行问题,input 是输入，list 是选择，confirm是否
    {
      type: 'input',
      name: 'compPath',
      message: '输入生成组件的路径',
      default: config.defaultCompPath,
    },
    {
      type: 'input',
      name: 'compName',
      message: 'component name',
      default: config.defaultCompName,
    },
    {
      type: 'confirm',
      name: 'isComp',
      message: '确定confirm',
      default: true,
    },
  ],
  actions: (data) => {
    const actions = [];
    const { compName, isComp, compPath } = data;
    if (!isComp) {
      return actions;
    }
    actions.push(
      // 问题完成后的动作
      {
        type: 'add', // 添加一个全新的文件
        path: `${compPath}/${compName}/index.module.scss`,
        templateFile: 'plop-templates/zsj/component.scss.hbs',
        data: {
          // 传递的数据给模板文件
          name: compName,
        },
      }
    );
    actions.push(
      // 问题完成后的动作
      {
        type: 'add', // 添加一个全新的文件
        path: `${compPath}/${compName}/index.tsx`,
        templateFile: 'plop-templates/zsj/component.hbs',
        data: {
          // 传递的数据给模板文件
          name: compName,
        },
      }
    );
    return actions;
  },
};
