// syntax
try {
    // code that may throw an error
  } catch (err) {
    // code to be executed if an error occurs
  } finally {
    // code to be executed regardless of an error occurs or not
  }

  try{
  let firstName = 'cp'
  let fullName  = firstName + ' ' +lastName
  } catch (err){
    console.log(err);
  } finally {
    console.log('i am always executed');
  }

try {
    let nickName = 'cp'
    let commonName = nickName + homeName
} catch( err){
    console.log('Name of the error: ', err.name);
    console.log('Error message: ', err.message);
} finally {
    console.log('Nice try');
}



