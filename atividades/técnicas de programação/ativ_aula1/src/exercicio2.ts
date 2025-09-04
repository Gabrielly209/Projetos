function converter(vet: any) {
    const res = [];
    for (let i = 0; i < vet.lenght; i++) {
        res[i] = "" + vet[i];
    }
    return res;
}
const vetor = [5, 3, 1, 8, 2];
console.log("Resultado:", converter(vetor));
