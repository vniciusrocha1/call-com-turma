import { Route, Switch } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Signin } from "../Pages/Signin";
import { Dashboard } from "../Pages/Dashboard";
export const Routes = ({ usuarios, cadastrar }) => {
    return (
        <Switch>
            <Route path="/login">
                <Login usuarios={usuarios} />
            </Route>
            <Route path="/signin">
                <Signin cadastrar={cadastrar} />
            </Route>
            <Route path="/dashboard/:id">
                <Dashboard usuarios={usuarios} />
            </Route>
        </Switch>
    );
};
