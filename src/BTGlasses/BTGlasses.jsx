import { useState } from 'react'
import glasses from './data.json'
const BTGlasses = () => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleGlass = (id) => {
    const selectedGlass = glasses.find((glass) => glass.id === id);    
    if (selectedGlass) {
      setUrl(selectedGlass.url);
      setName(selectedGlass.name);
      setDesc(selectedGlass.desc);
  
      document.querySelector(".glass").style.display = "block";
      document.querySelector(".glass").innerHTML = `<img src=${url} alt="glass">`;
  
      document.querySelector(".glassDetail").style.display = "block";
      document.querySelector(".glassDetail").innerHTML = `<h5>${name}</h5>
      <p>${desc}</p>`;
    }
  };
  
  return (
    <main>
      <div className="model">
        <div className="glass"></div>
        <div className="glassDetail">detail</div>
      </div>
      <div className="SelectGlasses row d-flex flex-row">
      {glasses.map((glass, index) => (
        <div className="col-2" key={index}>
          <div className="card my-3">
            <div
              className="card-body text-center btn-outline-light"
              style={{ cursor: "pointer" }}
              onClick={() => handleGlass(glass.id)}
            >
              <img src={glass.url} alt="Glass" width={100} />
            </div>
          </div>
        </div>
      ))}

    </div>
    </main>
 
    
  )
}

export default BTGlasses
