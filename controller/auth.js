const axios = require('axios').default

exports.login = async (req, res, next) => {
  const parameters = {}
  console.log(req.body)

  try {
    // const response = axios.post(
    //   'http://keycloak:8080/auth/realms/constr-sw-2023-1/protocol/openid-connect/token'
    // )

    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(400).json({ success: false })
  }
}
