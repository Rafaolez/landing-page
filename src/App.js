import "./components/css/global.css"
import Rodape from "./components/Rodape";
import Img from "./components/img/logo estrela.png"
import Imagem from "./components/img/foto tipo carocel mas sem carocel.webp"
import Fotinha from "./components/Foto";
import Conteudo from "./components/Conteudo";
import Fot from "./components/img/Banco.jpg"
import Conteudoivertido from "./components/Conteudoivertido";
import CaixabaixoDeTudo from "./components/CaixaembaixoDeTudo";
import CaraaCara from "./components/img/cara a cara.jpg"
import Detetive from "./components/img/Detetive.jpg"
import Rodape2 from "./components/Rodape2";

function App(props) {
  return (
    <>
      <Rodape Foto={Img}/>
      <Fotinha IMG={Imagem}/>
      <Conteudo Fotos={Fot} Texto="O Banco Imobiliário é um tradicional jogo de tabuleiro, um dos mais populares desde o século passado. O brinquedo foi lançado nos Estados Unidos pela empresa Harsbro, em 1935, com o nome Monopoly, e recebeu o nome Banco Imobiliário quando foi lançada a sua primeira versão no Brasil, em 1944, pela empresa Estrela."/>
      <Conteudoivertido Imagem={CaraaCara} Texto="O Banco Imobiliário é um tradicional jogo de tabuleiro, um dos mais populares desde o século passado. O brinquedo foi lançado nos Estados Unidos pela empresa Harsbro, em 1935, com o nome Monopoly, e recebeu o nome Banco Imobiliário quando foi lançada a sua primeira versão no Brasil, em 1944, pela empresa Estrela."/>
      <Conteudo Fotos={Detetive} Texto="O Banco Imobiliário é um tradicional jogo de tabuleiro, um dos mais populares desde o século passado. O brinquedo foi lançado nos Estados Unidos pela empresa Harsbro, em 1935, com o nome Monopoly, e recebeu o nome Banco Imobiliário quando foi lançada a sua primeira versão no Brasil, em 1944, pela empresa Estrela."/>
      <CaixabaixoDeTudo TextoPORutimp="Site da estrela para compra:" Link="https://www.estrela.com.br/" info="Insira seu email para receber mais novidades:"/>
      <Rodape2 Foto={Img}/>
    </>
  );
}

export default App