/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


let testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1])
function createEmployeeRecord(testEmployee)
{
    return{
        firstName: testEmployee[0],
        familyName: testEmployee[1],
        title: testEmployee[2],
        payPerHour: testEmployee[3],
        timeInEvents: [],
        timeOutEvents: []

    }
}

//create function Employee records that process an Array of Arrays into an Array of employee records

function createEmployeeRecords(testEmployee){
    return testEmployee.map(employee => createEmployeeRecord(employee))
}
    

//  function adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
// function createTimeInEvent(dateStamp){
//     this.timeInEvents.push(createTimeInEvent(dateStamp,"TimeIn"))
//     return this
// }

function createTimeInEvent (dateStamp) {
    let [date, hour] = dateStamp.split(" ");

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    
    return this
}

