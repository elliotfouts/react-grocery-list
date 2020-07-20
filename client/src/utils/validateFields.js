const validateFields = (object) => {
  let invalidField = false;
  const fields = Object.keys(object);

  // check if fields are filled out
  for (const field in fields) {
    if (!object[fields[field]]) {
      invalidField = fields[field];
      break;
    }
  }

  return invalidField;
}

export default validateFields;