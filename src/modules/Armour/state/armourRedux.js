import { connect } from 'react-redux'

import Armour from './armour'

const mapActionCreators = {

}

const mapStateToProps = (state) => {
  console.log(state)
}

export default connect(mapActionCreators, mapStateToProps)(Armour)