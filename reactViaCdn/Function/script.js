function App (){
    return (
        <h2>Salut Ici, il s'agit d'une function</h2>
    )
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />)