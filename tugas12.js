function buah(){
    var namaBuah = ["Pisang", "Jeruk", "Apel", "Mangga"];
    console.log(namaBuah);

    namaBuah.pop()
    console.log(namaBuah)
    
    namaBuah.shift()
    
    return namaBuah;
}

console.log(buah())