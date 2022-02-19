import { useState, useEffect } from "react";
import { Routes } from "./Routes";
import "./App.css";
import { useHistory } from "react-router-dom";

function App() {
    const [id, setId] = useState(0);
    const [usuarios, setUsuarios] = useState([]);
    const cadastrar = (novoUsuario) => {
        delete novoUsuario.re_pass;
        setUsuarios([...usuarios, { id, ...novoUsuario }]);
    };
    const history = useHistory();
    useEffect(() => {
        setId(id + 1);
        history.push("/login");
    }, [usuarios]);
    return (
        <div className="App">
            <Routes usuarios={usuarios} cadastrar={cadastrar} />
        </div>
    );
}
export default App;
