const radio = require('rf-nrf24')
const logger = require('winston');

const spiDev = '/dev/spidev0.0';
const cePin = 9;
const irqPin = 8;

radio.channel(0x76)
    .transmitPower('PA_MAX')
    .dataRate('250kbps')
    .crcBytes(2)
    .autoRetransmit({count:15, delay:4000})
    .use(spiDev, cePin, irqPin);
 
radio.on('ready', function () {
    logger.info('Radio module is ready!!!');
    var rx = radio.openPipe('rx', 0xF0F0F0F0E1),
        tx = radio.openPipe('tx', 0xF0F0F0F0D2);
    rx.pipe(tx); // echo back everything

    rx.on('data', (data) => {
        logger.info(`Got data -------------->>>${data}`);
    });        
});

module.exports = radio;