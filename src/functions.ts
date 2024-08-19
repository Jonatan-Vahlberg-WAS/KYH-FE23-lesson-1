
console.log("Functions")

function divide(a: number, b:number): number {
    if(b === 0) {
        return NaN
    }

    return a / b
}
const list: number[] = [1,2,3]
console.log(list)
function removeListIndex(list: any[], index: number): void {
	if(list.length) {
        throw new Error()
    }
	list.splice(index,1)
	//Type 'any[]' is not assignable to type 'void'.
}

function apiCall(hasFailed: boolean): string | Error {
    if(hasFailed) {
        return new Error("All is not good");
    }
    return "All is good"
}

const response1 = apiCall(false)
const response2 = apiCall(true)
if(typeof response1 === "string"){
    console.log("Response: ", response1)
}
else {
    console.log("Response Error: ", response2)
}

if(typeof response2 === "string"){
    console.log("Response: ", response2)
}
else {
    console.log("Response Error: ", response2.message)
}