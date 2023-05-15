import { useEffect, useState } from 'react'
// import './App.css'

function App() {
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const search = () => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${inputValue}&app_id=2865996b&app_key=beaceb757b7158dac76ae87fda011cf1`,
    )
      .then((response) => response.json())
      .then((data) => setData(data))
  }

  console.log(data)

  return (
    <>
      {JSON.stringify(inputValue)}

      <div>
        <input
          type="search"
          name="value"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={search}>Search</button>
        <h1>
          {data.hits?.map((item, index) => (
            <>
              <p>{item.recipe['url']}</p>
              <p>{item.recipe.calories}</p>
              <p>{item.recipe.cuisineType}</p>
              <p>{item.recipe.dietLabels}</p>
              <p>{item.recipe.healthLabels}</p>
              <p>
                {item.recipe?.digest.map((item, index) => (
                  <span>{item.label}</span>
                ))}
              </p>
              <img
                src={item.recipe.image}
                style={{ width: 50, height: 50 }}
                alt=""
              />
            </>
          ))}
        </h1>
      </div>
    </>
  )
}

export default App
