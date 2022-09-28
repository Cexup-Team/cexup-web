export function useError(value) {
    return new Promise((resolve, reject) => {

        value.forEach( (val, key) => console.log(key, val) )
        resolve("asas");
        
      });
      
}