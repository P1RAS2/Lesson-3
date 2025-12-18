const pinCodes = ["1111", "5678", "1234","9999"];
const myPin = "1234";

for(let i = 0; i < pinCodes.length; i++) {
    if (pinCodes[i] === myPin){
        console.log("Пин-код найден");
        break 
    }    else {
        console.log("Неверный пин-код");
    }
}
