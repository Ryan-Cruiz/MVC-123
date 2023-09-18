/* 
Little Reminder for myself:
You can name anything you want, however it might cause a confusion. 
NAME YOUR CLASS SAME NAME ON FILE LIKE CI 
import the model by using
model_obj = new config.model('model name/.js');
*/
const { core, profile } = require('../loaders.js');
const { model } = core;
const car = model('Car');
class Players {
    constructor() {
        this.result = []; // this is to catch the result in database errors
    }

    /* the index page file */
    async index() {
        // console.log(res);
        const res = await car.getAllCars();
        console.log(res,'response')
        profile.res.render('index'); // render the index page
        profile.res.end();  
        console.log('this is a index function');
    }

    async getCars(){
        const res = await car.getAllCars();
        profile.res.send(res)
    }

    async destroy() {
        const res = await car.deleteCar(profile.req.params.id);
        profile.res.send(`DELETE HTTP method on ${'testAPI/' + profile.req.params.id} resource`);
        // profile.res.send('delete');
    }
}

module.exports = new Players();