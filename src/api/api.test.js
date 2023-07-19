
import { submitAPI } from './api'

const sampleData = {
    reserved_date: '2023-07-18',
    reserved_time: '19:00'
}

// const sampleData2 = {
//     reserved_date: '2023-07-19',
//     reserved_time: '19:00'
// }

test("Submit API Test", () => {
    expect(submitAPI(sampleData)).toBe(true)
})

// test("Saved to Local Storage", () => {
//     expect(submitAPI(sampleData2)).toBe(true)
//     const retrieveData = localStorage.getItem(`${sampleData2.reserved_date}-${sampleData2.reserved_time}`, sampleData2)
//     console.log(retrieveData)
//     expect(retrieveData.reserved_date).toBe(sampleData2.reserved_date)
// })