// Untuk Test Git
// recursive function

function Pangkat(x,y){
        if (y == 1) {
            return x;     
        }     
        else {
            return x=x*Pangkat(x,y-1);     
        } 
    } 

console.log(Pangkat(7,2))

// urutannya untuk ngegit masukin ke staging area, terus commit
// recursive
// return x ** y
// return math.pow(x,y)