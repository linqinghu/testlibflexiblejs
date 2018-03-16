

import actions from './actions';
import mutations from './mutations';
//引入action和mutations

export default {
  state:{ //这里面是要读取或者写入数据的地方
    title:'',
    top_right:false
  },
  actions: actions,
  mutations: mutations,
}
