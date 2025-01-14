
import { useState } from "react";
import { Container, Form, Background } from "./styles";
import {FiMail, FiLock } from "react-icons/fi"

import { useAuth } from "../../hooks/auth";

import {Link} from "react-router-dom"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"






export function SingIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { singIn } = useAuth()

    function handleSingIn(){
        singIn({email, password})

    }
    
    return(
        <Container>
            <Form>
                <h1>Biblioteca de Links</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input 
            
                placeholder="E-mail" type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}/>

                <Input 
                placeholder="Senha"
                type="password" 
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}/>

                <Button title="Entrar" onClick={handleSingIn}/>

                <Link to="singup">Criar conta</Link>
                
                  

            </Form>
            
            <Background />
                
        </Container>
    )
}