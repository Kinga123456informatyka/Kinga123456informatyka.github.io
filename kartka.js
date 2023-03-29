

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","kartka.bmp")
loadSprite("renifer2","renifer2.png")
loadSound("muzyka","muzyka.mp3")

add([
    sprite("kartka")
])


const renifer2 = add([
    sprite("renifer2"),
    pos(500,200)
])


let wlewo = true

 renifer2.onUpdate(() => {

    if(wlewo && renifer2.pos.x < 510)
    renifer2.pos.x +=1

    else if(!wlewo && renifer2.pos.x > 50)
    renifer2.pos.x -= 1

    else wlewo ^= true 
 })

 onMouseRelease(()=>play("muzyka"))