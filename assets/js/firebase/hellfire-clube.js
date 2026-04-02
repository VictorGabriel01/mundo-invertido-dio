/**
 * ======================================================
 * IMPORTAÇÕES
 * ======================================================
 */

/**
 * Importa a instância do Firebase inicializada no arquivo app.js
 */
import app from "./app.js";

/**
 * Importa funções do Firestore:
 * - getFirestore → conecta com o banco
 * - collection → acessa uma coleção do banco
 * - addDoc → adiciona um documento dentro da coleção
 */
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js'


/**
 * ======================================================
 * FUNÇÃO PARA INSCREVER USUÁRIO NO HELLFIRE CLUB
 * ======================================================
 * Essa função recebe um objeto com os dados do usuário
 * e salva no banco de dados Firestore.
 * 
 * param {Object} subscription - Dados da inscrição do usuário
 * returns {String} id do documento criado no Firestore
 */
export async function subscribeToHellfireClub(subscription) {

    /**
     * Cria conexão com o banco Firestore usando o app Firebase
     */
    const db = getFirestore(app);

    /**
     * Acessa a coleção chamada "hellfire-clube"
     * Se ela não existir, o Firestore cria automaticamente
     */
    const hellfireClubCollection =  collection(db, 'hellfire-clube');

    /**
     * Adiciona um novo documento com os dados da inscrição
     */
    const docRef = await addDoc(hellfireClubCollection, subscription);

    /**
     * Retorna o ID do documento criado
     */
    return docRef.id;
}