class X {
    um():void {
        console.log("um");
    }
}
class Y extends X {
    dois():void {
        console.log("dois");
    }
    imprimir():void {
        super.um();
    }
}
class Z extends Y {
    tres():void {
        console.log("três");
    }
    imprimir():void {
        super.dois();
    }
}
const z = new Z();
z.um();
z.dois();
z.tres();
