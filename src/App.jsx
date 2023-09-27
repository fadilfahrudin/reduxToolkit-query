import { useState } from 'react'
import { decremented, incremented } from "./features/CounterReducer"
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useGetArticleByTitleQuery } from './services/userApi'

function App() {
  const dispatch = useDispatch()
  const { value } = useSelector(state => state.counter)

  const [keywords, setKeywords] = useState('')
  const [query, setQuery] = useState('')

  const { data, status } = useGetArticleByTitleQuery(query)


  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(keywords)
  }


  return (
    <>
      <div className="card">
        <h2>Counter Redux Toolskit :</h2>
        <button onClick={() => dispatch(incremented())}>+</button>
        {value}
        <button onClick={() => dispatch(decremented())}>-</button>

        <hr />
        <h2>Fetch with Redux Toolskit</h2>
        <button>Get data</button>

        <form onSubmit={handleQuery}>
          <input type="text" placeholder='query' value={keywords} onChange={(e) => setKeywords(e.target.value)} />
          <button type='submit'>search</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
            </tr>
          </thead>
          <tbody>
            {status === 'fulfilled' ?
              data.result.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.title}</td>
                </tr>
              )) : null}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
