import React from "react"; 
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import Header from "../Header/Header";
import MatchListPage from "../MatchListPage/MatchListPage";
import {useState} from "react";
import styled from 'styled-components';

const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin: 30px;
  display: flex;
  flex-direction: column;
`

function Main() {
  const [selectedPage, setSelectedPage] = useState('choose-profile')

  const renderSelectedPage = () => {
    switch(selectedPage) {
      case 'choose-profile':
        return <ChooseProfilePage/>
      case 'match-list':
        return <MatchListPage/>
      default:
        return <ChooseProfilePage/>
    }
  }

  const goToChooseProfilePage = () => {
    setSelectedPage('choose-profile')
  }

  const goToMatchListPage = () => {
    setSelectedPage('match-list')
  }

  return (
    <MainContainer>
      <Header
        goToChooseProfilePage={goToChooseProfilePage} 
        goToMatchListPage={goToMatchListPage}
      />
      {renderSelectedPage()}
    </MainContainer>
  )
}

export default Main