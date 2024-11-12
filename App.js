import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialiser l'état
    this.state = {
      person: {
        fullName: "Ablaye Ndiaye",
        bio: "Développeur passionné par les nouvelles technologies et le design.",
        imgSrc: "https://neven-skillstech.com/wp-content/uploads/2022/05/developpeur-web-et-mobile-neven-skills-tech.jpg",
        profession: "Développeur Web",
      },
      show: false,
      elapsedTime: 0,
    };
  }

  // Méthode pour basculer l'état de 'show'
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    // Initialiser un intervalle pour mettre à jour le temps écoulé
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000); // Mise à jour toutes les secondes
  }

  componentWillUnmount() {
    // Nettoyer l'intervalle lorsque le composant est démonté
    clearInterval(this.interval);
  }

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div className="App">
        <h1>Profil de la Personne</h1>
        <button onClick={this.toggleShow}>
          {show ? "Masquer le profil" : "Afficher le profil"}
        </button>
        
        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>Profession : {person.profession}</h4>
          </div>
        )}

        <p>Temps écoulé depuis le montage : {elapsedTime} secondes</p>
      </div>
    );
  }
}

export default App;
