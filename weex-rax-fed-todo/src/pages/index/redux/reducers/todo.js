import { INIT_LIST, DELETE_ITEM, ADD_ITEM, MODIFY_ITEM,GET_USER_INFO } from '../actions/todo.js'

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
const initState = {
  toDoList: [
    {
      content: '拜访好友',
      id: '1111',
    }, {
      content: '圣诞夜准备',
      id: '2222',
    }, {
      content: '读一本书',
      id: '333',
    }, {
      content: '逛超市',
      id: '45454534',
    }, {
      content: 'Image组件，我设置了 resizeMode=\'center\'， 在 ios里面是ok的，但是在安卓上没有生效',
      id: '32423f',
    }, {
      content: '写一封邮件',
      id: '123123',
    },
  ],
  doneList: [],
  userInfo:{}
};
export default function todoMVC(state = initState, action) {
  switch (action.type) {
    case INIT_LIST:
      return state;
    case DELETE_ITEM:
      return {
        ...state,
        toDoList: [
          ...state.toDoList.slice(0, action.id),
          ...state.toDoList.slice(action.id + 1),
        ],
      };
    case ADD_ITEM:
      state.toDoList.splice(0, 0, {
        content: action.obj.content,
        id: guid(),
      });
      return {
        ...state,
        toDoList: state.toDoList,
      };
    case MODIFY_ITEM: {
      let deleteIndex;
      for (let i = 0; i < state.toDoList.length; i++) {
        if (state.toDoList[i].id === action.obj.id) {
          deleteIndex = i;
          break;
        }
      }
      const item = state.toDoList[deleteIndex];
      state.doneList.push(item);
      state.toDoList.splice(deleteIndex, 1);
      return {
        ...state,
        toDoList: state.toDoList,
        doneList: state.doneList,
      };
    }
    case GET_USER_INFO:
      return {...state, userInfo: action.payload.data}
    default:
      return state;
  }
}
