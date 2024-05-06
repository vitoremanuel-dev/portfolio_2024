import "./Portfolio.css"

import IMG1 from "../../assets/tarefas.png"
import IMG2 from '../../assets/costs.png'
import IMG3 from '../../assets/pokedex.png'
import IMG4 from '../../assets/barbearia.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "To-do List",
    github: "https://github.com/vitoremanuel-dev/lista-de-tarefas-react",
    demo: "https://vitoremanuel-dev.github.io/lista-de-tarefas-react/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Costs",
    github: "https://github.com/vitoremanuel-dev/costs",
    demo: "https://costs-lemon.vercel.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Pokédex",
    github: "https://github.com/vitoremanuel-dev/pokedex_vue",
    demo: "https://desafio-estagio-maino.vercel.app/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Projeto barbearia",
    github: "https://github.com/vitoremanuel-dev/vikings-club-barbearia-oficial",
    demo: "https://vikings-club-barbearia-oficial.vercel.app/"
  },
  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Preview</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio