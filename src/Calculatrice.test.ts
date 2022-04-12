import Calculatrice from "./Calculatrice"
//fonction test
// test ('description de ce qui est testé', ()=>),
test ('addition de 7 et 15 soit 22', () => {
    //je m'attend a ce que x valle un certain résultat 
    expect(Calculatrice.additionSimple(7, 15))
        .toBe(22);
});

test('addition deplusieur nombre ', () =>{
    expect(Calculatrice.addition(15,5,3,20))
    .toBe(38);
});

test('Division de 5 par 2 = 2.5', () =>{
    expect(Calculatrice.division(5,2))
    .toBe(2.5);
});

test('division de 5 par 0', ()=>{
    expect(Calculatrice.division(5,0))
    .toBe(Infinity)
}) 