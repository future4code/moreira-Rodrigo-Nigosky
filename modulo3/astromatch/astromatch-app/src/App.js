import React from "react"
import ChooseProfilePage from "./pages/ChooseProfilePage/ChooseProfilePage"
import MatchListPage from "./pages/MatchListPage/MatchListPage"
import Header from "./components/Header/Header"
import { createGlobalStyle } from "styled-components"


  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh
  }
  `;

export default class App extends React.Component {
  state = {
    currentPage: "astromatch"
  }
  
  changePage =(pageName) => {
    this.setState({currentPage:pageName })
  }

  selectPage = () =>{
    switch (this.state.currentPage){
      case "astromatch":
        return <ChooseProfilePage pageName ={this.changePage} />
      case "historico":
        return <MatchListPage/>
      default:
        return <ChooseProfilePage pageName ={this.changePage} />
    }
  }

  render(){
  return (
    <div>
      <GlobalStyle/>
      <Header changePage ={this.changePage}/>
      {this.selectPage()}
    </div>
    );
  }
}