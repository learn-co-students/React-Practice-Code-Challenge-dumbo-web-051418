import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">

        { props.sushis.slice(props.start, props.end).map((sushi) => {
          return <Sushi key={sushi.id} onClickSushi={props.onClickSushi} sushi={sushi} />
          }) }

        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
