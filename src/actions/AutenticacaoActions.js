import firebase from 'firebase';

export const modificaEmail = (texto) => {
    return {
        type: "modifica_email",
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: "modifica_senha",
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: "modifica_nome",
        payload: texto
    }
}

export const cadastrarUsuario = ({ nome, email, senha }) => {

    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => console.log(user))
        .catch(erro => console.log(erro));

    return {
        type: "cadastrar_usuario",
    }
}