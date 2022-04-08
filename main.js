const { eagerInitializedSingleton } = require("./Singleton")

const instance = eagerInitializedSingleton.getInstance();
const instance2 = eagerInitializedSingleton.getInstance();
instance.setNumber(1)
console.log(instance.getNumber())
instance2.setNumber(2)
console.log(instance.getNumber())
instance.setNumber(instance.getNumber() + 1)
console.log(instance2.getNumber())