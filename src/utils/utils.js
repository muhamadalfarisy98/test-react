
// TruncateString - truncate desc
export const TruncateString = (str, maxLength=40) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    } 
    return str;
}

export const ConvertRupiah = (angka)=>{
    if (angka <=0) {
        return 'Free'
    }
    let numberString = angka.toString();
    let split = numberString.split('.');
    let rupiah = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    if (split.length > 1) {
        return `Rp. ${rupiah},${split[1]},-`;
    }  
    return `Rp. ${rupiah},-`;
}

export const AppPlatform = (ios, andro) => {
    let val = ""
    let isAndro = false

    if (andro) {
        val = "Android"
        isAndro = true 
    } 

    if (ios) {
        if (isAndro) {
            val += " & IOS"
        } else {
            val = "IOS"
        }
    }
    return val
}

export const ConvertionGB = (size) => {
    return size/1000
}