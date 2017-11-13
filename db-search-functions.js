/* global firebase */

function getVersion(handleVersion) {
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/version');
  databaseVersionReference.once('value').then(function(snapshot) {
    
    // You found me! Great job!
    // TODO: Uncomment the code below. It gets the current version value from
    // the database snapshot and passes it as an argument to the 'handleVersion'
    // callback.
    
    var version = snapshot.val();
    handleVersion(version);
  });
}

function getHelloWorldValue(handleType) {
  // TODO: Your code goes here. Hint: use 'getVersion' as a template.
  
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/hello-world');
  
  databaseVersionReference.once('value').then(function(snapshot) {
    
    var value = snapshot.val();
    handleType(value);
  });
}

function applyDiscount(handleNewPrice) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseReference = database.ref('/db-search/discount');
  
  databaseReference.once('value').then(function(snapshot) {
    
    var discount = snapshot.val();
    
    handleNewPrice(discount * 100);
  });
  
}

function getArrayLength(handleLength) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseReference = database.ref('/db-search/array');
  
  databaseReference.once('value').then(function(snapshot) {
    
    var array = snapshot.val();
    handleLength(array.length);
  });
}

function getLastArrayElement(handleElement) {
  // TODO: Your code goes here.
  
  var database = firebase.database();
  var databaseReference = database.ref('/db-search/array');
  
  databaseReference.once('value').then(function(snapshot) {
    
    var array = snapshot.val();
    handleElement(array[array.length - 1]);
  });
}

function getArrayJoin(handleJoin) {
  // TODO: Your code goes here.
  
  var database = firebase.database();
  var databaseReference = database.ref('/db-search/array');
  
  databaseReference.once('value').then(function(snapshot) {
    
    var array = snapshot.val();
    handleJoin(array.join(' '));
  });
}

function getNumberOrStringType(handleType) {
  // TODO: Your code goes here.
  
  var database = firebase.database();
  var databaseReference = database.ref('/db-search/number-or-string');
  
  databaseReference.once('value').then(function(snapshot) {
    
    var value = snapshot.val();
    handleType(typeof(value));
  });
}

function getObjectValue(handleValue) {
  // TODO: Your code goes here.
  
  var database = firebase.database();
  var databaseReference = database.ref('/db-search/object');
  
  databaseReference.once('value').then(function(snapshot) {
    
    var object = snapshot.val();
    handleValue(object.donkey);
  });
}

function getObjectKeyCount(handleKeyCount) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseReference = database.ref('/db-search/object');
  
  databaseReference.once('value').then(function(snapshot) {
    
    var object = snapshot.val();
    handleKeyCount(Object.keys(object).length);
  });
}