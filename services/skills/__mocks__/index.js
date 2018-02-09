
const skillService = jest.genMockFromModule('..')

let mockSkills = Object.create(null)
function __setMockSkills (skills) {
  mockSkills = skills
}

function getAll () {
  return Promise.resolve(mockSkills)
}

function get (id) {
  let skill = mockSkills.find(skill => skill.id === id)
  return Promise.resolve(skill)
}

skillService.getAll = getAll
skillService.get = get
skillService.__setMockSkills = __setMockSkills

module.exports = skillService
