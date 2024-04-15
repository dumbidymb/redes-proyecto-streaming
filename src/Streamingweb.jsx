import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './assets/style.css'; // Asegúrate de tener tu archivo de estilos CSS
import Logo from '../src/assets/site_logo.png'

const StreamingWeb = () => {
    const [videoUrls, setVideoUrls] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState('');
  
    const handleSelectMovie = (movie) => {
      setSelectedMovie(movie);
      setBackgroundImage(movie.imageUrl); // Actualizar la imagen de fondo al seleccionar una película
    };
  
    const handleAddVideo = (e) => {
      e.preventDefault();
      const url = e.target.elements.url.value;
      if (url) {
        setVideoUrls([...videoUrls, url]);
        e.target.elements.url.value = '';
      }
    };

  const movies = [
    { id: 1, title: 'Amigos Imaginarios', trailerUrl: 'https://youtu.be/suxpHwb9A3c?si=YjkvxAmpy2_xOWFT', imageUrl: 'https://th.bing.com/th/id/OIP.phSQMOIfcmQkXQt48ZTJngHaEK?rs=1&pid=ImgDetMain' },
    { id: 2, title: 'Wolverine', trailerUrl: 'https://youtu.be/kxyyKU8rgaU?si=vZURtFJYlJOIYSh3', imageUrl: 'https://th.bing.com/th/id/OIP.ChSrd30mMtaA9eGdftJBzAHaLd?rs=1&pid=ImgDetMain   ' },
    { id: 3, title: 'Boorderlands', trailerUrl: 'https://youtu.be/hdZnvMQRyCo?si=GerxGuNzcxEQPWRS', imageUrl: 'https://th.bing.com/th/id/OIP.oQFI8zU5K_J5Ms-sWSKtVwHaJ4?rs=1&pid=ImgDetMain' },
    { id: 4, title: 'Guason 2', trailerUrl: 'https://youtu.be/rLbfdpdYh-U?si=ko7JpYCicSOV6CA9', imageUrl: 'https://th.bing.com/th/id/R.c3539761fd8718cd70e969a2d656cced?rik=jvxpcFO7mgTC8g&pid=ImgRaw&r=0' },
    { id: 5, title: 'Evil', trailerUrl: 'https://youtu.be/5q7yf0OrAC8?si=I67A2SKCX21hvg9m', imageUrl: 'https://th.bing.com/th/id/OIP.e64VxVcpzhyalHrroZhAAQHaLH?rs=1&pid=ImgDetMain' },
    { id: 6, title: 'Popeye', trailerUrl: 'https://youtu.be/WgyJjAEdC-I?si=4nAu8KjPbvR7Kcps', imageUrl: 'https://th.bing.com/th/id/OIP.whhPqmb79GiBwpjs-uW35QAAAA?rs=1&pid=ImgDetMain' },
    { id: 7, title: 'La profecia', trailerUrl: 'https://youtu.be/61rrDlVwvx4?si=YZURcS4UJjQQ-VwM', imageUrl: 'https://www.bizcochito.es/Films/Movil/tt5672290.webp' },
    { id: 8, title: 'fallout', trailerUrl: 'https://youtu.be/fM17q9PcLMw?si=ju6f-sVAWw63bn2D', imageUrl: 'https://th.bing.com/th/id/OIP.jKuZMz8fdA2oJcy6Zsi1KwHaKg?rs=1&pid=ImgDetMain' },
    { id: 9, title: 'Kraven', trailerUrl: 'https://youtu.be/JoWdhvrkKjo?si=adyGMUWjl0aL8II7', imageUrl: 'https://th.bing.com/th/id/OIP.ty2mihvpHalaU6T5n_O1yAHaJK?rs=1&pid=ImgDetMain' },
    { id: 10, title: 'Juice', trailerUrl: 'https://youtu.be/_2JdV6wAngE?si=_qjxdmkjjoYlfE1w', imageUrl: 'https://th.bing.com/th/id/OIP.GTgByXY3E9IYwjyvK77UVQHaLF?rs=1&pid=ImgDetMain' },
    { id: 11, title: 'Minecrfat', trailerUrl: 'https://youtu.be/6tKs4skl9Xw?si=0dyHroEaaQn1R_UH', imageUrl: 'https://th.bing.com/th/id/OIP.Hqp7I8SBgkHBpsDmqei5TADNEw?rs=1&pid=ImgDetMain' },
    { id: 12, title: 'moahana', trailerUrl: 'https://youtu.be/fM17q9PcLMw?si=ju6f-sVAWw63bn2D', imageUrl: 'https://th.bing.com/th/id/OIP.TsUzLnPMSgOQzhbEHMHvJwHaKF?rs=1&pid=ImgDetMain' },
    { id: 13, title: 'thundercats', trailerUrl: 'https://youtu.be/mn_LzzIoGwg?si=_inCQf40YereXRF7', imageUrl: 'https://th.bing.com/th/id/OIP.1lbUYJWeTOyftIWvNIxh5AHaK3?rs=1&pid=ImgDetMain' },
    { id: 14, title: 'simios guerra', trailerUrl: 'https://youtu.be/WgyJjAEdC-I?si=4nAu8KjPbvR7Kcps', imageUrl: 'https://th.bing.com/th/id/OIP.NYVXQyvP7Q1mSNgL7AiNNQHaK8?rs=1&pid=ImgDetMain' },
    { id: 15, title: 'dragon ball z', trailerUrl: 'https://youtu.be/SoLPES_qI8A?si=XN5oah-5REETr-yB', imageUrl: 'https://th.bing.com/th/id/OIP.lHLM0O9kbO5XEBQHIaMWYQEsEE?rs=1&pid=ImgDetMain' },
    { id: 16, title: 'stell 2', trailerUrl: 'https://youtu.be/1VFd5FMbZ64?si=3u3K3Nm9ew4oRYeH', imageUrl: 'https://th.bing.com/th/id/OIP.kQSACCoAcqyrMsSyFwVvsgAAAA?rs=1&pid=ImgDetMain' },
    { id: 17, title: 'vilano favorito 4', trailerUrl: 'https://youtu.be/I0_qFoptZ4Y?si=5YSTwqrWkVF-TnnM', imageUrl: 'https://th.bing.com/th/id/OIP.ihB5d7eTyPYdv4nqRPJMswHaLH?rs=1&pid=ImgDetMain' },
    { id: 18, title: 'sonic', trailerUrl: 'https://youtu.be/vy67e4-3OIs?si=JfqivEQnpAJjFLXj', imageUrl: 'https://th.bing.com/th/id/OIP.uVomutu7iabdHOZ2NuRuyQHaEK?rs=1&pid=ImgDetMain' },
    { id: 19, title: 'constantine 2', trailerUrl: 'https://youtu.be/sBU8ejvW6fM?si=n_TM8VRM8lc_gRAK', imageUrl: 'https://th.bing.com/th/id/OIP.sNhU1qTa4ycfip304f3f7wAAAA?rs=1&pid=ImgDetMain' },
    { id: 20, title: 'gladidaor 2', trailerUrl: 'https://youtu.be/HkqVgr1CCqI?si=uwjVZ8fOO7Fwi5DP', imageUrl: 'https://th.bing.com/th/id/OIP.USLjIrYXS0Dqq4flW66yRAHaIk?rs=1&pid=ImgDetMain' },
    { id: 21, title: 'god of war 3', trailerUrl: 'https://youtu.be/5q7yf0OrAC8?si=I67A2SKCX21hvg9m', imageUrl: 'https://th.bing.com/th/id/OIP.MDUKO3EzlwRJxD-77LZetAHaEK?rs=1&pid=ImgDetMain' },
    { id: 22, title: 'Silence', trailerUrl: 'https://youtu.be/Xo1iL1cYKxQ?si=A9bgbCEZLC_7N0M2', imageUrl: 'https://th.bing.com/th/id/OIP.aAwRZ7IJQBYM8upRhDvycAHaLi?rs=1&pid=ImgDetMain' },
    { id: 23, title: 'Laprimera llamda', trailerUrl: 'https://youtu.be/61rrDlVwvx4?si=YZURcS4UJjQQ-VwM', imageUrl: 'https://mx.web.img2.acsta.net/pictures/23/03/17/21/49/4179260.jpg' },
    { id: 24, title: 'Guerra z', trailerUrl: 'https://youtu.be/uSvSet5wQlk?si=64OlBmdBoB0PrH87', imageUrl: 'https://th.bing.com/th/id/OIP.POOukhoVgqrfmqO3sb0hbQHaLk?rs=1&pid=ImgDetMain' },
    { id: 25, title: 'abibgail', trailerUrl: 'https://youtu.be/xtAL2x58hns?si=VAlLRYx5A5fs9v-u', imageUrl: 'https://th.bing.com/th/id/OIP.DEwTWFKX3exj2I2Ey9-xpAAAAA?rs=1&pid=ImgDetMain' },
    { id: 26, title: 'Chucky 3', trailerUrl: 'https://youtu.be/WgyJjAEdC-I?si=4nAu8KjPbvR7Kcps', imageUrl: 'https://th.bing.com/th/id/OIP.DMgxzE0Duvx0dYq9wkIc-gHaLH?rs=1&pid=ImgDetMain' },
    { id: 27, title: 'Glatiator 2', trailerUrl: 'https://youtu.be/61rrDlVwvx4?si=YZURcS4UJjQQ-VwM', imageUrl: 'https://th.bing.com/th/id/OIP.dfXE3w5VeeBDf_Gct7MZPQHaLG?rs=1&pid=ImgDetMain' },
    { id: 28, title: 'Wrong turn', trailerUrl: 'https://youtu.be/YngNdakEa2U?si=_VYGXkMCArAy5kJq', imageUrl: 'https://th.bing.com/th/id/OIP.oKsb0QBWL-z6HmO12v_j9QHaJ4?rs=1&pid=ImgDetMain' },
    // Agrega más películas según sea necesario
  ];



  return (
    <>
       <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <header className="header">
          <img src={Logo} alt="" />
        </header>
        <section className="catalog">
          <h2>Catálogo de Películas</h2>
          <div className="movie-cards">
            {movies.map((movie) => (
              <div
                className="movie-card"
                key={movie.id}
                onClick={() => handleSelectMovie(movie)}
              >
                <h3>{movie.title}</h3>
                <img src={movie.imageUrl} alt={movie.title} />
              </div>
            ))}
          </div>
        </section>
        <section className="video-player">
          {selectedMovie && (
            <div className="trailer">
              <h2>Trailer de {selectedMovie.title}</h2>
              <ReactPlayer url={selectedMovie.trailerUrl} controls />
            </div>
          )}
          <div className="add-video">
            <h2>Agregar Video</h2>
            <form onSubmit={handleAddVideo}>
                <div className='video-url'>

              <input className='input-video' type="text" name="url" placeholder="URL del video" />
              <button className='buton-video' type="submit">Agregar Video</button>
                </div>
            </form>
            {videoUrls.map((url, index) => (
              <div key={index}>
                <ReactPlayer url={url} controls />
              </div>
            ))}
          </div>
        </section>
        <footer className="footer">
          <p>&copy; 2024 StreamingWeb. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default StreamingWeb;
