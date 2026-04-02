/**
 * ======================================================
 * IMPORTAÇÃO DA FUNÇÃO DE INSCRIÇÃO
 * ======================================================
 * Importa a função responsável por salvar os dados
 * do usuário no banco Firestore.
 */
import { subscribeToHellfireClub } from "./firebase/hellfire-clube.js";


/**
 * ======================================================
 * CAPTURA DOS ELEMENTOS DO FORMULÁRIO
 * ======================================================
 * Aqui selecionamos os campos do formulário pelo ID
 * para poder acessar seus valores posteriormente.
 */
const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

/**
 * Botão responsável por enviar a inscrição
 */
const btnSubscribe = document.getElementById('btnSubscribe');


/**
 * ======================================================
 * EVENTO DE CLIQUE NO BOTÃO
 * ======================================================
 * Quando o botão for clicado:
 * 1. Captura os valores do formulário
 * 2. Cria um objeto com os dados
 * 3. Envia para o Firebase
 */
btnSubscribe.addEventListener('click', async () => {

    /**
     * Objeto contendo os dados do formulário
     */
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    
    /**
     * Chama a função que salva no Firestore
     * e aguarda o retorno do ID do documento criado
     */
    const subscriptionId = await subscribeToHellfireClub(subscription);

    /**
     * Exibe no console a confirmação da inscrição
     */
    console.log(`Inscrito com sucesso ${subscriptionId}`)
});