const validateFields = (object) => {
  let invalidField = false;
  const fields = Object.keys(object);

  for (const field in fields) {
    if (!object[fields[field]]) {
      invalidField = fields[field];
      break;
    }
  }

  return invalidField;
}

export default validateFields;