function handleObject(obj, key, action) {
  if (action === 'get') {
    let keyObject = obj[key];
    return keyObject;
  }

  if (action === 'add') {
    obj[key] = '';
    return obj;
  }

  if (action === 'delete') {
    delete obj[key];
    return obj;
  }

  return obj;
}

const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
};

// const result = handleObject(student, 'programmingLanguage', 'delete');
// console.log('result', result); // { name: 'Maxim' }

const result = handleObject(student, 'age', 'add');
console.log('result', result);
