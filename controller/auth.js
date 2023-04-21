const axios = require('axios').default

const baseURI = process.env.KEYCLOAK_BASE_URI
const realm = process.env.REALM

exports.login = async (req, res, next) => {
  const parameters = {
    client_id: req.fields.client_id,
    client_secret: req.fields.client_secret,
    grant_type: req.fields.grant_type,
    username: req.fields.username,
    password: req.fields.password,
  }

  try {
    const response = await axios.post(
      `${baseURI}/auth/realms/${realm}/protocol/openid-connect/token`,
      parameters,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    const data = response.data

    return res.status(200).json({ success: true, data: data })
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message })
  }
}
