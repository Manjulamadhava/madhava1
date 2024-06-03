import './index.css'

const registrationFinal = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationUpdated: 'REGISTRATIONS_CLOSED',
}

const ActiveEvent = props => {
  const {Updating} = props

  const noActive = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const renderClosed = () => {
    ;<div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are closed Now!</h1>
      <p>Stay tuned, we will reopen the registraion Soon!</p>
    </div>
  }

  const renderView = () => {
    ;<div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the count</h1>
    </div>
  }

  const renderRegister = () => {
    ;<div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much your relationship with dance.</p>
      <button>Register Here</button>
    </div>
  }

  const renderFinal = () => {
    switch (Updating) {
      case registrationFinal.yetToRegister:
        return renderRegister()
      case registrationFinal.registered:
        return renderView()
      case registrationFinal.registrationUpdated:
        return renderClosed()
      default:
        return noActive()
    }
  }

  return <div>{renderFinal()}</div>
}
export default ActiveEvent
