import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
	background-color: lightgreen
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

export const SecaoComentario = (props) => {
	const [inputValue, setInputValue] = useState("");

	const onChangeComentario = (event) => {
		setInputValue(event.target.value);
	}

	return (
		<CommentContainer>
			<InputComment
				placeholder={"Comentário"}
				value={inputValue}
				onChange={onChangeComentario}
			/>
			<button 
				onClick={() => { 
					props.enviarComentario(this.state.inputValue); 
				}} 
			>
				Enviar
			</button>
		</CommentContainer>
	)
}

export default SecaoComentario