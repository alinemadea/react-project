import Titre from './Titre'
import { toursData } from '../data'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Titre title="featured" subtitle="tours" />
      <div className="section-center featured-center">
        {toursData.map((data) => {
          return (
            <article id={data.id} className="tour-card">
              <div className="tour-img-container">
                <img src={data.img} className="tour-img" alt="" />
                <p className="tour-date">{data.text}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{data.h4}</h4>
                </div>
                <p>{data.p}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {data.text1}
                  </p>
                  <p>{data.text2}</p>
                  <p>{data.text3}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
