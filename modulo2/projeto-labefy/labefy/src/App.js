import React from "react";
import axios from "axios";

const urlPlaylists =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "rodrigo-nigosky-moreira"
  }
};

export default class App extends React.Component {
  state = {
    playlists: [],
    playlistInput: ""
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(urlPlaylists, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert("Algo deu errado, tente novamente");
      });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.playlistInput
    };

    axios
      .post(urlPlaylists, body, headers)
      .then((res) => {
        alert(`A playlist ${this.state.playlistInput} foi criada com sucesso!`);
        this.setState({ playlistInput: "" });
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert(err.response.data.message);
        this.setState({ playlistInput: "" });
      });
  };

  onPlaylistTextChange = (event) => {
    this.setState({ playlistInput: event.target.value });
  };

  render() {
    const playlistComponents = this.state.playlists.map((play) => {
      return <li key={play.id}>{play.name}</li>;
    });

    return (
      <div>
        <h1>Labefy</h1>
        <input
          value={this.state.playlistInput}
          onChange={this.onPlaylistTextChange}
          placeholder="Playlist"
        />
        <button onClick={this.createPlaylist}>Enviar</button>
        {playlistComponents}
      </div>
    );
  }
}
