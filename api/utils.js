
module.exports = {
  findObjectOr404:  (objName, service) => {
    return (req, res, next, value) => {
      service.get(value)
      .then(obj => {
        if (obj) {
          req[objName] = obj
          next()
        } else {
          res.status(404).send(objName + ' not found')
        }
      })
      .catch(err => {
        res.status(500).send(err)
      })
    }
  }
}
