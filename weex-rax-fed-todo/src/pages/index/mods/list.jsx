'use strict';

import { createElement, Component, findDOMNode } from 'rax';
import { View, Text, ListView, Checkbox, Transition, Cell, Touchable } from 'weex-nuke';
import styles from './list.less';

class List extends Component {
  constructor(props) {
    super(props);
    const doneCount = 0;
    this.state = {
      doneCount,
      showDone: false,
    };
    this.showDone = this.showDone.bind(this);
  }

  changeItemStatus(item) {
    const animationStyle = { opacity: '0.5' };
    const box = findDOMNode('cell_' + item.id);
    Transition(box, animationStyle, {
      timingFunction: 'ease-in',
      delay: 0,
      duration: 200,
    }, () => {
        console.log(this);
      this.props.modifyItem(item);
    });
  }
  showDone() {
    this.setState({
      showDone: !this.state.showDone,
    });
  }
  render() {
    const { style, dataSource } = this.props;
    return (
      <ListView _autoWrapCell={false} style={[styles.listContainer, style]}>
        {
          dataSource.toDoList.map((item) => {
            return (
              <Cell key={`cell_${item.id}`} id={`cell_${item.id}`}>
                <View id={`cell_item_${item.id}`} style={styles.cellItem} className="nuke-border-fix-1">
                  <Checkbox key={`cell_checkbox_${item.id}`} defaultChecked={false} size="small" style={styles.checkbox} onChange={this.changeItemStatus.bind(this, item)} />
                  <Text style={styles.content}>{item.content}</Text>
                </View>
              </Cell>
            );
          })
        }
        {
          dataSource.doneList.length ?
            <Cell>
              <View style={styles.viewDone}>
                <Touchable style={styles.viewDoneBtn} onPress={this.showDone}>
                  <Text style={styles.viewDoneText}>查看 {dataSource.doneList.length} 个已完成任务</Text>
                </Touchable>
              </View>
            </Cell>
            : null
        }
        {
          this.state.showDone && dataSource.doneList.map((item) => {
            return (
              <Cell key={`cell_${item.id}`} id={`cell_${item.id}`}>
                <Touchable id={`cell_item_${item.id}`} style={[styles.cellItem, styles.done]} className="nuke-border-fix-1">
                  <Checkbox key={`cell_checkbox_${item.id}`} checked={true} size="small" style={styles.checkbox} checkedStyle={styles.checkbox_checked} />
                  <Text style={[styles.content, styles.doneText]}>{item.content}</Text>
                </Touchable>
              </Cell>
            );
          })
        }
      </ListView>
    );
  }
}


export default List;
