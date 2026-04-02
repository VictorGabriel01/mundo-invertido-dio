/**
 * ======================================================
 * IMPORTAÇÃO DO FIREBASE
 * ======================================================
 * Importa a função responsável por inicializar o Firebase
 * diretamente da CDN do Google.
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

/**
 * ======================================================
 * CONFIGURAÇÃO DO FIREBASE
 * ======================================================
 * Objeto contendo as credenciais do projeto Firebase.
 * Essas informações conectam o site com o backend do Firebase.
 */
const firebaseConfig = {
  apiKey: "SUA_API_KEY",

  authDomain: "projeto-mundo-invertido-bbad2.firebaseapp.com",
  projectId: "projeto-mundo-invertido-bbad2",
  storageBucket: "projeto-mundo-invertido-bbad2.firebasestorage.app",
  messagingSenderId: "807671592249",
  appId: "1:807671592249:web:9bf5dd27f7e7444081e4e8"
};

/**
 * ======================================================
 * INICIALIZAÇÃO DO FIREBASE
 * ======================================================
 * Cria a instância da aplicação Firebase utilizando
 * as configurações definidas acima.
 */
const app = initializeApp(firebaseConfig);

/**
 * Exporta a instância do Firebase para ser utilizada
 * em outros arquivos do projeto.
 */
export default app;