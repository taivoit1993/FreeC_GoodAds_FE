import {Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import AlertComponent from '../../components/alert.component';
import ProcessComponent from '../../components/process.component';
import {CreateUserValidation} from './validation/login.validation';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {useMutation, useQuery} from "react-query";
import {callbackGoogleUrl, getGoogleUrl, login} from "../../ApiService/auth.api";
import {Helmet} from "react-helmet";
import React, {useEffect} from "react";
import {GoogleLogin} from "@react-oauth/google";

const LoginComponent = () => {
    const location = useLocation();
    const [url, setUrl] = React.useState("");
    let navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(CreateUserValidation)
    });



    const {isLoading} = useQuery({
        queryKey: ["getGoogleUrl"],
        queryFn: () => getGoogleUrl(location.search),
        onSuccess: (data) => {
            setUrl(data?.url);
        },
    });

    const {} = useQuery({
        queryKey: ["callbackGoogleUrl"],
        queryFn: () => callbackGoogleUrl(location.search),
        onSuccess: (data) => {
            if(data){
                navigate('/campaigns');
            }else{
                navigate('/login');
            }
        },
    });

    const {mutate} = useMutation("login", (info: any) => {
            return login(info);
        },
        {
            onSuccess: (data) => {
                navigate('/users');
            }
        }
    )
    const onSubmitHandler = (info: any) => {
        window.open(url, '_self', 'noreferrer');
    };


    return (
        <>
            <AlertComponent/>
            <ProcessComponent/>
            <div className='App login'>
                <form className="form" method="post" onSubmit={handleSubmit(onSubmitHandler)}>
                    <Typography variant="h5" component="h2" mb={3} align="center">
                        Google Authorization
                    </Typography>
                    {/*<TextField*/}
                    {/*    id="email"*/}
                    {/*    required*/}
                    {/*    sx={{paddingBottom: 2}}*/}
                    {/*    variant="outlined"*/}
                    {/*    label="Email"*/}
                    {/*    {...register('email')}*/}
                    {/*    error={!!errors.email}*/}
                    {/*    helperText={errors.email && String(errors.email?.message)}*/}
                    {/*/>*/}
                    {/*<TextField*/}
                    {/*    id="password"*/}
                    {/*    required*/}
                    {/*    type="password"*/}
                    {/*    sx={{paddingBottom: 2}}*/}
                    {/*    variant="outlined"*/}
                    {/*    label="Mật Khẩu"*/}
                    {/*    {...register('password')}*/}
                    {/*    error={!!errors.password}*/}
                    {/*    helperText={errors.password && String(errors.password?.message)}*/}
                    {/*/>*/}
                    {/*<Grid container spacing={4} pt={0.5}>*/}
                    {/*    <Grid item xs={6} sx={{display: 'flex', alignContent: 'center', alignItems: 'flex-start'}}>*/}
                    {/*        <FormControlLabel label="Remeber me" defaultChecked control={<Checkbox/>}/>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item xs={6}>*/}
                    {/*        <Typography variant="body1" component="a" mb={3} align="center" href='#'*/}
                    {/*                    sx={{*/}
                    {/*                        display: 'flex',*/}
                    {/*                        flexDirection: 'row-reverse',*/}
                    {/*                        justifyContent: 'flext-start',*/}
                    {/*                        mt: '0.5rem'*/}
                    {/*                    }}>*/}
                    {/*            Quên mật khẩu?*/}
                    {/*        </Typography>*/}

                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                    {/*<Button type="submit" color="primary" variant="contained" sx={{fontWeight: 600}}>*/}
                    {/*    ĐĂNG NHẬP*/}
                    {/*</Button>*/}
                    {/*<GoogleLogin onSuccess={responseMessage}/>*/}
                    <Button type="submit" color="primary" variant="contained" sx={{fontWeight: 600}}>
                        Login Google
                    </Button>
                </form>
            </div>
        </>
    );
};

export default LoginComponent;


