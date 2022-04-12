class Calculatrice {
    public static additionSimple (nb1: number, nb2: number){
        return nb1 + nb2;
    }

    public static addition(...nombres: number[]): number{
        return nombres.reduce((precedent: number, actuel1: number) =>{
            return precedent + actuel1; 
        });
    }

    public static division(nb1: number, nb2: number){
        return nb1/nb2;
    }
}