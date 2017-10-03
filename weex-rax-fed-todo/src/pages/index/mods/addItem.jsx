'use strict';
import { createElement, Component } from 'rax';
import { View, Text, Modal, Button, Env, Input } from 'weex-nuke';
import styles from './addItem.less';
const { isWeb } = Env;

class AddItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};
	}
	changeInput = (e) => {
		this.setState({
			text: e.value || e.target.value,
		})

	}
	/**
	 * hack onReturn event for web
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	keyUp = (e) => {

		if (isWeb && e.keyCode === 13) {
			this.addItem();
		}
	}
	clearInput() {
		// this.setState({
		//     input:''
		// })
	}
	addItem() {

		this.setState({
			input: this.state.text,

		})
		if (this.state.text.length == 0) {
			Modal.toast('哎~空的看不到吗');
		} else {

			this.props.addItem({
				content: this.state.text,
			});
			this.setState({
				text: '',
				input: ''
			})
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<Input autoFocus style={styles.input} value={this.state.input} returnKeyType="next" onKeyUp={this.keyUp.bind(this)} placeholder="添加一个任务" onFocus={this.clearInput.bind(this)} onReturn={this.addItem.bind(this)} onInput={this.changeInput} placeholderColor="#eeeeee" />
			</View>
		);
	}
}


export default AddItem;
