function drawTriangle(size) {
    var y, star = "*";

    do{
        console.log(star);   
        for (y = 1; y < size; y++)
        {
           star += ("*"); 
           console.log(star)     
        }
    
    }while(y < size)
}