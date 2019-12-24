class Tinh {
    constructor(tenPhepTinh, soA, soB){
        this.tenPhepTinh = tenPhepTinh;
        this.soA = soA;
        this.soB = soB;
    }

    getResultstring(){
        let chuoiPhepTinh;

        const {tenPhepTinh, soA, soB} = this;

        chuoiPhepTinh =  `${soA} / ${soB}`;

        if(tenPhepTinh === "CONG") chuoiPhepTinh = `${soA} + ${soB}`;
        if(tenPhepTinh === "TRU") chuoiPhepTinh = `${soA} - ${soB}`;
        if(tenPhepTinh === "NHAN") chuoiPhepTinh = `${soA} * ${soB}`;
        const result = eval(chuoiPhepTinh);
        return `${chuoiPhepTinh} = ${result}`;
    }
}

module.exports = Tinh;