import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { style } from "./style.js";
export const Login = ({ usuarios }) => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const logar = ({ user, pass }) => {
        let usuLogin = usuarios.find((usu) => usu.user === user && usu.pass === pass);
        usuLogin?.id ? history.push(`/dashboard/${usuLogin.id}`) : toast.error("Usuario ou senha invalidos!");
    };
    return (
        <Container component="main" sx={style.container}>
            <FormControl component="form" onSubmit={handleSubmit(logar)}>
                <Box component="section" sx={style.box}>
                    <TextField {...register("user")} fullWidth label="Usuario" variant="filled"></TextField>
                    <TextField {...register("pass")} fullWidth label="Senha" variant="filled"></TextField>
                </Box>
                <Box component="section" sx={{ width: "500px" }}>
                    <Button type="submit" fullWidth variant="outlined">
                        Entrar
                    </Button>
                </Box>
            </FormControl>
            <Link to="/signin">Não tem cadastro?</Link>
        </Container>
    );
};
