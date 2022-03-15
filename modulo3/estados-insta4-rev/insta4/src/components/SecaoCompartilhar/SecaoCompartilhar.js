import React, {Component} from 'react'
import styled from 'styled-components'

const ShareContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
	background-color: lightpink
`

const InputCompartilhar = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoCompartilhar extends Component {
	state = {
		valorCompartilhar:""

	}

	onChangeCompartilhar=(event)=> {
		console.log(event.target.value)
		this.setState({valorCompartilhar: event.target.value})
	}

	render() {
		return <ShareContainer>
			<InputCompartilhar
				placeholder={'Compartilhar'}
				value={this.state.valorCompartilhar}
				onChange={this.onChangeCompartilhar}
			/>
            <button onClick={this.props.aoEnviar}>Facebook</button>
            <button onClick={this.props.aoEnviar}>Instagram</button>
			<button onClick={this.props.aoEnviar}>Twitter</button>            
		</ShareContainer>
	}
}