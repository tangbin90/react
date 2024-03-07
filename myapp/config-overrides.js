//配置具体修改规则
// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     return config;
//   };
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: { 
      javascriptEnabled: true,
      modifyVars: { '@primary-color': 'orange' }, // 修改主题颜色
    },
  }),
);