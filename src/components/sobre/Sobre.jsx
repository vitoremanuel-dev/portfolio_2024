import "./Sobre.css";
import ME2 from '../../assets/me2.jpg'

import { FiAward } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";
import { FaFileCode } from "react-icons/fa";

const Sobre = () => {
  return (
    <section id="sobre">
      <h5>Um pouco</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="Minha foto vai aqui, tenho que importar" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experiência</h5>
              <small>À procura do primeiro emprego</small>
            </article>

            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projetos</h5>
              <small>15+ completos (pessoais)</small>
            </article>

            <article className="about__card">
              <FaFileCode className="about__icon" />
              <h5>Graduação</h5>
              <small>Tecnólogo em Análise e Desenvolvimento de Sistemas</small>
            </article>
          </div>

          

          <p>
            Desenvolvedor Front-End aplicado em criar interfaces atraentes e
            intuitivas. Busco integrar uma equipe criativa para impactar
            positivamente a experiência do usuário. Atualizado com as últimas
            tecnologias. Minha dedicação e paixão garantem interfaces incríveis
            e funcionais. Procuro oportunidades de ingressar no mercado de
            trabalho. Entusiasmado em colaborar em um ambiente dinâmico e
            colaborativo.
          </p>

          <a href="#contato" className="btn btn-primary">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
