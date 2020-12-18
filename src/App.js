import './style/style.css'
import Book from './components/Book'

function App() {
  return (
    <div id = 'page-container'>
    <h2>
     we are bookus.
    </h2>
    <div id = 'books-container'>
      <Book className = 'new' name = 'Der Steppen Wolf' year = '1928' />
      <Book name = 'Der Steppen Wolf' year = '1928' />
      <Book name = 'Der Steppen Wolf' year = '1928' />
    </div>
    </div>
  );
}

export default App;
