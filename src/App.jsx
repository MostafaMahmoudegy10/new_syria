import Header from './components/Header';
import NewsContextProvider from './store/NewsContextProvider';

function App() {
  return (
      <div className="bg-[linear-gradient(to_bottom,rgba(0,64,37,1),rgba(255,255,255,0.8),rgba(0,64,37,0.5))] h-[100vh] w-full">
        <NewsContextProvider> 
          <Header />
        </NewsContextProvider>
      </div>
  )
}

export default App
