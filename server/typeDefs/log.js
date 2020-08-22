module.exports = `
  type Log {
    user: ID,
    message: String,
    date: String
  }

  input addLogInput {
    user: ID,
    message: String, 
    date: String,
  }
`;