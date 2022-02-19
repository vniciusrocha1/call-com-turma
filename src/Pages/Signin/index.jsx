import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { style } from "./style.js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export const Signin = ({ cadastrar }) => {
    const validate = yup.object().shape({
        name: yup.string().required("Campo Obrigatorio!"),
        user: yup.string().required("Campo Obrigatorio!"),
        email: yup.string().email("Email invalido").required("Campo Obrigatorio!"),
        pass: yup
            .string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Mínimo 8 digitos, Necessário maiúscula, minúscula, Número e Caracter especial:")
            .required("Campo Obrigatorio!"),
        re_pass: yup
            .string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Mínimo 8 digitos, Necessário maiúscula, minúscula, Número e Caracter especial:")
            .oneOf([yup.ref("pass")], "As senha nao correspondem")
            .required(),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validate),
    });
    return (
        <Container component="main" sx={style.main}>
            <FormControl onSubmit={handleSubmit(cadastrar)} component="form" sx={style.form}>
                <Box sx={style.box}>
                    <TextField {...register("name")} error={errors.name?.message} helperText={errors.name?.message} fullWidth label="Nome" />
                    <TextField {...register("user")} error={errors.user?.message} helperText={errors.user?.message} fullWidth label="Usuario" />
                    <TextField {...register("email")} error={errors.email?.message} helperText={errors.email?.message} fullWidth label="Email" />
                    <TextField {...register("pass")} error={errors.pass?.message} helperText={errors.pass?.message} fullWidth type="password" label="Senha" />
                    <TextField {...register("re_pass")} error={errors.re_pass?.message} helperText={errors.re_pass?.message} fullWidth type="password" label="Confirme a Senha" />
                </Box>
                <Box>
                    <Button type="submit" variant="outlined" color="success">
                        Cadastrar
                    </Button>
                </Box>
            </FormControl>
        </Container>
    );
};
