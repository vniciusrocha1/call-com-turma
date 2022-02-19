import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { style } from "./style.js";
export const Dashboard = ({ usuarios }) => {
    const history = useHistory();
    const { id } = useParams();
    const { name } = usuarios.find((user) => Number(user.id) === Number(id));
    return (
        <Container component="main" sx={style.main}>
            <Box>
                <Typography component="h2" variant="h1">
                    Bem Vindo, {name.split(" ")[0]}!
                </Typography>
            </Box>
            <Box>
                <Button variant="outlined" color="error" onClick={() => history.push("/login")}>
                    Sair
                </Button>
            </Box>
        </Container>
    );
};
