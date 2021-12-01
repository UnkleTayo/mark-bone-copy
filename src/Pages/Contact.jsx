import React, { useState } from 'react'

/** Components */

const Card = (props) => (
  <div className="card">
    {/*<div className="waves">
    </div>*/}
    {props.children}
  </div>
)

const Form = (props) => <form className="form">{props.children}</form>

const TextInput = (props) => (
  <div className="text-input">
    <label
      className={props.focus || props.value !== '' ? 'label-focus' : ''}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      className={props.focus || props.value !== '' ? 'input-focus' : ''}
      type="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </div>
)

const TextArea = (props) => (
  <div className="text-area">
    <label
      className={props.focus || props.value !== '' ? 'label-focus' : ''}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <textarea
      className={props.focus || props.value !== '' ? 'input-focus' : ''}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </div>
)

const Button = (props) => <button className="button">{props.children}</button>

// /** Root Component */
// class ContactContainer extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: {
//         name: 'name',
//         label: 'Name',
//         value: '',
//         focus: false,
//       },
//       email: {
//         name: 'email',
//         label: 'Email',
//         value: '',
//         focus: false,
//       },
//       message: {
//         name: 'message',
//         label: 'Message',
//         value: '',
//         focus: false,
//       },
//     }
//   }

//   handleFocus(e) {
//     const name = e.target.name
//     const state = Object.assign({}, this.state[name])
//     state.focus = true
//     this.setState({ [name]: state }, () => {
//       console.log(state)
//     })
//   }

//   handleBlur(e) {
//     const name = e.target.name
//     const state = Object.assign({}, this.state[name])
//     state.focus = false
//     this.setState({ [name]: state }, () => {
//       console.log(state)
//     })
//   }

//   handleChange(e) {
//     const name = e.target.name
//     const state = Object.assign({}, this.state[name])
//     state.value = e.target.value
//     this.setState({ [name]: state }, () => {
//       console.log(state)
//     })
//   }

//   render() {
//     const { name, email, message } = this.state
//     return (
//       <div className="container">
//         <Card>
//           <h1>Send Me a Message!</h1>
//           <Form>
//             <TextInput
//               {...name}
//               onFocus={this.handleFocus.bind(this)}
//               onBlur={this.handleBlur.bind(this)}
//               onChange={()=> handleChange}
//             />
//             <TextInput
//               {...email}
//               onFocus={this.handleFocus.bind(this)}
//               onBlur={this.handleBlur.bind(this)}
//               onChange={this.handleChange.bind(this)}
//             />
//             <TextArea
//               {...message}
//               onFocus={this.handleFocus.bind(this)}
//               onBlur={this.handleBlur.bind(this)}
//               onChange={this.handleChange.bind(this)}
//             />
//             <Button>Send</Button>
//           </Form>
//         </Card>
//       </div>
//     )
//   }
// }

export default function Contact(params) {
  const generalData = {
    name: {
      name: 'name',
      label: 'Name',
      value: '',
      focus: false,
    },
    email: {
      name: 'email',
      label: 'Email',
      value: '',
      focus: false,
    },
    message: {
      name: 'message',
      label: 'Message',
      value: '',
      focus: false,
    },
  }

  // eslint-disable-next-line no-unused-vars
  const [formState, setFormState] = useState(generalData)

  return (
    <div className="Contact-Me">
      <div className="container">
        <Card>
          <h1>Send Me a Message!</h1>
          <Form>
            <TextInput />
            <TextInput />
            <TextArea />
            <Button>Send</Button>
          </Form>
        </Card>
      </div>
    </div>
  )
}

// ReactDOM.render(<App />, document.getElementById('app'))
