export function useError(value) {
    return new Promise((resolve, reject) => {

        console.log(value)
        value.forEach( (val, key) => console.log(key, val) )
        resolve("asas");
        
      });
      
}