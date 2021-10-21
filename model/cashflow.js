const mongoose = require('mongoose')

const CashFlowSchema = new Schema({
    cashIn: {
        order: Number,
        date: Date,
        total: Number,
        reconciled: String,
    },
    cashOut: {
        order: Number,
        date: Date,
        total: Number,
        reconciled: String
    },
    total: Number
})

const CashFlow = mongoose.model('CashFlow', CashFlowSchema)

module.exports = CashFlow