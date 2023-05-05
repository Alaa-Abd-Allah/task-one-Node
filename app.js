const yargs = require('yargs')
const data = require('./data')

// Add Data
yargs.command({
    command: 'add',
    describe: 'To add an item',
    builder: {
        id: {
            describe: 'item id',
            demandOption: true,
            type: 'number'
        },
        fname: {
            describe: 'first name in command',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (x) => {
        data.addData(x.id, x.fname, x.age, x.city)
    }
})

// Delete an Item with id
yargs.command({
    command: 'delete',
    describe: 'to delete an item with id',
    handler: (x) => {
        data.deleteData(x.id)
    }
})

// Read an Item
yargs.command({
    command: 'read',
    describe: 'read an item with its id',
    builder: {
        id: {
            describe: 'write the item id',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (x) => {
        data.readData(x.id)
    }
})

// Print Data
yargs.command({
    command: 'print',
    describe: 'print data in a list',
    handler: (x) => {
        data.printData()
    }
})
console.log(yargs.argv)