import './feature.css'
function Feature({data}) {
  return (
    <div className='feature margins'>
        <div className="feature__logo">
            <img src={data.img} alt='logo' />
        </div>
        <h3>{data.heading}</h3>
        <p>{data.text}</p>
    </div>
  )
}

export default Feature