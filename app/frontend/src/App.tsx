import ".App.css";

function App() {
  const [cats, setCats] useState ([]);

  useEffect(() => {
    const fetchCats = async () => {
      const response = await fetch('http://localhost:8080/cats')
      const data = await response.json();

      setCats(data)
    }

    fetchCats();
  }, []);

  return (
    <div></div>
  )
}

export default App;