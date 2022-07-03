import Button from '../../components/button/Button'
import  Working  from '../../images/illustration-working.svg'
import './hero.css'
function Hero() {
  return (
    <section className='hero'>
        <div className="hero__content">
        <h1>More than just shorter links</h1>
        <p>
          Build your brands recognition and get detailed insights your links are
          performing
        </p>
        <Button text='Get Started' style={{
            fontSize: 16,
        }} />
        </div>
        <div className="hero__image">
            <img src={Working} alt="working" />
        </div>
    </section>

  )
}

export default Hero