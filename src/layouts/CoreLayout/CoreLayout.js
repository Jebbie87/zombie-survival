import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

// export default class Main extends Component {
//   cloneChildren() {
//     let path = this.props.location.pathname
//     console.log(path)
//   }

//   render() {
//     return (
//       <div>
//         <h1>Zombie Title</h1>
//         <table>
//           <tbody>
//             <tr className='zombie-links'>
//               <td><Link to='/'><h4 className='zombie-title'>Zombie Survival</h4></Link></td>
//               <td><Link to='/weapons'><h4 className='weapons-title'>Weapons</h4></Link></td>
//               <td><Link to='/armour'><h4 className='armour-title'>Armour</h4></Link></td>
//               <td><Link to='/misc'><h4 className='misc-title'>Misc</h4></Link></td>
//             </tr>
//           </tbody>
//         </table>
//         {this.clonechildren()}
//         {/*React.cloneElement(this.props.children, this.props)*/}
//         {this.props.children}
//       </div>
//     )
//   }
// }

export default class CoreLayout extends Component {

  cloneChildren() {
    let path = this.props.location.pathname

    if (this.props.children) {
      return React.cloneElement(this.props.children, {key: path.split('/')[1], ref: 'child'})
    }
  }

  render() {
    // const isPop = this.props.location ? this.props.location.action === 'POP' : false;

    return (
      <div className='container text-center'>
        <h1>Zombie Title</h1>
        <table>
          <tbody>
            <tr className='zombie-links'>
              <td><IndexLink to='/'><h4 className='zombie-title'>Zombie Survival</h4></IndexLink></td>
              <td><Link to='/weapons'><h4 className='weapons-title'>Weapons</h4></Link></td>
              <td><Link to='/armour'><h4 className='armour-title'>Armour</h4></Link></td>
              <td><Link to='/misc'><h4 className='misc-title'>Misc</h4></Link></td>
            </tr>
          </tbody>
        </table>
          <div className='core-layout__viewport'>
            {this.cloneChildren()}
          </div>
      </div>
    )
  }
}