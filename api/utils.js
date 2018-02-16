

let utils = module.exports = {
  errorTemplate: (statusCode, message) => {
    return {
      error: {
        code: statusCode,
        message: message
      }
    }
  },
  findObjectOr404:  (objName, service) => {
    return (req, res, next, value) => {
      service.get(value)
      .then(obj => {
        if (obj) {
          req[objName] = obj
          next()
        } else {
          res
            .status(404)
            .json(utils.errorTemplate(404, objName+' not found'))
        }
      })
      .catch(err => {
        res.status(500).send(err)
      })
    }
  }
}
