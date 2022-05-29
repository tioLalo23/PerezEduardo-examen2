import './App.css';
import {useState, useEffect} from 'react';

const axios = require('axios').default;

function App() {
  const [resultado, updResultado] = useState([]);
  const [pais, updPais] = useState("mx");
  
  const consultar = async () => {
    try {
      const url = "https://newsapi.org/v2/top-headlines?apiKey=741378697fbc413ca4be831d6ae52956&country="+pais;
      let res = await axios({
          url,
          method: 'GET',
      });
      updResultado(res.data.articles);
      console.log("API Consultada");
    } catch (error) {
      //Imprime el error en caso de haber
      console.log(error);
    }
  }

  useEffect(() => {
    consultar();
  },[pais]);

  
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-nav">
        <div class="container-fluid align-items-center align-middle">
            <div className='col-md-8'>
              <h1 className='my-auto'>Noticias Internacionales</h1>
            </div>
            <div className='col-md-2'>
              <p className='my-auto'>Selecciona un país:</p>
            </div>
            <div className='col-md-2'>
              <form>
                <select id='pais' class="form-select" onChange={e => updPais(e.target.value)}>
                  <option value='mx'>México</option>
                  <option value='us'>EE. UU.</option>
                  <option value='ar'>Argentina</option>
                  <option value='fr'>Francia</option>
                  <option value='ca'>Canadá</option>
                </select>
              </form>
            </div>
        </div>
      </nav>
      <div class='container my-2'>
        <div className='container table-scroll border border-dark border-2 bg-tab'>
          {
            resultado.map((data) => (
              <div className='row m-2 py-2 border border-dark rounded bg-row' key={data.title}>
                <div className='col-md-9'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <h3>{data.title}</h3>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-4'>
                      <b>Autor:</b> {data.author}
                    </div>
                    <div className='col-md-4'>
                      <b>Fecha:</b> {data.publishedAt}
                    </div>
                    <div className='col-md-4'>
                      <b>Enlace: </b><a href={data.url}>Ver noticia</a>
                    </div>
                  </div>
                  <div>
                    <p>{data.description}</p>
                  </div>
                </div>
                <div className='col-md-3 d-flex align-items-center'>
                  <img src={data.urlToImage} className='img-fluid rounded'></img>
                </div>
              </div>
            )
            )
          }
        </div>
      </div>
      <footer>
        <div className='container-fluid bg-nav p-2'>
          <div className='row'>
            <div className='col-md-4'>
              Examen 2
            </div>
            <div className='col-md-4'>
              Pérez Rosales Eduardo
            </div>
            <div className='col-md-4'>
              420090601
            </div>
          </div>
          <div>
            <div className='col-md-12'>
              2 de junio de 2022
            </div>
          </div>
        </div>
      </footer>
    </div>      
  );
}

export default App;
