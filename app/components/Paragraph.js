import React, {Component} from 'react';

const style = {
    width: 'auto',
    heigt: '20px',
    background: 'tomato',
    border: 'none',
    backgroundImage:'none',
    backgroundColor: 'transparent',
    boxShadow: 'none',
};

export class Paragraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            words: []
        };

        this.handleGoClick = this.handleGoClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentWillMount() {
        this.setState({words: this.props.words});
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.words !== this.props.words) {
            
        // };
    }

    getInputValue() {
        return this.refs.pathInput.value;
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) {
            this.handleGoClick();
        }
        this.setState({ words: e.target.value });
    }

    handleGoClick() {
        const newParagraph = {...this.props.data, words: [this.state.words]};
        this.props.saveAction(newParagraph);
    }
    
    render() {
        const {
            words,
            onClickAction,
            deleteAction,
            isEditing
        } = this.props;
        return (
            <div onClick={() => {onClickAction()}}>
                <input className="current-path-input"
                    style={style}
                    defaultValue={this.state.words}
                    onKeyUp={this.handleKeyUp}
                    ref="pathInput" />
                <button onClick={this.handleGoClick}>go</button>
                <button onClick={() => {deleteAction()}}>delete</button>
                :D {JSON.stringify(isEditing)}
            </div>
        );
    }
}
