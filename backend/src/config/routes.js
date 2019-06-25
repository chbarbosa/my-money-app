const express = requeri('express')

module.exports = function (server) {
    //Define base URL
    const router = express.Router()
    server.use('/api', router)

    //cycle routes
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}