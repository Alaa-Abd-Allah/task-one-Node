const fs = require('fs')

// Read Data
const loadData = () => {
    try {
        const dataJson = fs.readFileSync('data.json').toString()
        return JSON.parse(dataJson)
    } catch {
        return []
    }
}

// Save Data
const saveData = (allData) => {
    const saveDataJson = JSON.stringify(allData)
    fs.writeFileSync('data.json', saveDataJson)
}

// Add Data to json file
const addData = (id, fname, age, city) => {
    const allData = loadData()
    const duplicatedData = allData.filter((ele) => {
        return ele.id === id
    })

    if (duplicatedData.length == 0) {
        allData.push({
            id: id,
            fname: fname,
            age: age,
            city: city,
        })
        saveData(allData)
    }
    else {
        console.log('Error, The data is duplicated!')
    }
}

// Delete Data
const deleteData = (id) => {
    const allData = loadData()
    const remainingData = allData.filter((ele) => {
        return ele.id != id
    })
    saveData(remainingData)
    console.log('Deleted Successfully')
}

// Read an item with id
const readData = (id) => {
    const allData = loadData()
    const item = allData.find((ele) => {
        return ele.id == id
    })

    if (item) {
        console.log(item)
    } else {
        console.log('Item not founded!')
    }
}

// Print data in list
const printData = () => {
    const allData = loadData()
    allData.forEach((ele) => {
        console.log(ele.fname, ele.age, ele.city)
    })
}

module.exports = {
    addData,
    deleteData,
    readData,
    printData,
}