export class eagerInitializedSingleton {

    private sum :number;
    private static instance: eagerInitializedSingleton;
 
    private constructor(){}
 
    public static getInstance(){
        return this.instance || (this.instance = new this());
    }
    public setNumber(sum){
        this.sum = sum;
    }
    public getNumber(sum){
        return this.sum;
    }
}