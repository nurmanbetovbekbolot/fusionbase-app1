import React from 'react'

export default class Cell extends React.Component {
    state = {
        isEditable: false,
    };

    render() {
        const {isEditable} = this.state;
        return isEditable ?
            <input onSubmit={() => this.setState({isEditable: false})} value={this.props.value} onChange={this.props.onChange}/>
            : <span onClick={() => this.setState({isEditable: !isEditable})}>{this.props.value}</span>
    }

}
