import './features.css'
import Brand from "../../images/icon-brand-recognition.svg";
import Detail from "../../images/icon-detailed-records.svg";
import Fully from "../../images/icon-fully-customizable.svg";


import Feature from '../feature/Feature'

function Features() {

    const content = [
        {
            img: Brand,
            heading: 'Brand Recognition',
            text: `Boost your brand recognition with each click. Generic links
            don’t mean a thing. Branded links help instil confidence in your
            content.`
        },
        {
            img: Detail,
            heading: 'Detailed Records',
            text: `Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better
            decisions.`
        },
        {
            img: Fully,
            heading: 'Fully Customizable',
            text: ` Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.`
        }
    ]
  return (
    <div className='features margins paddings'>
        <div className="features__content">
        <h3>Advanced Statistics</h3>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="features__content--individual">
            {
                content.map((c, index) => (
                    <Feature key={index} data={c} />
                ) )
            }
        </div>
        <span></span>
    </div>
  )
}

export default Features