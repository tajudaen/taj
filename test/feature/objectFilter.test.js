// Packages
const expect = require("expect");
const request = require('supertest');

// Custom modules
const { app } = require('../../app');

describe ('Object validation', () => {
    it('should return a 200 status code if the filtering is successful', (done) => {
        const data = {
            data: {
                type: 'durban',
                crux: 'Indices',
                color: 'green',
                title: 'Indict the idiot'
            },
            item: 'title'
        };

        request(app)
                .post('/api/filter')
                .send(data)
                .expect(200)
                .expect(res => {
                    expect(res.body.data).toEqual({type: 'durban', crux: 'Indices', color: 'green'})                    
                })
                .end(done);
    });

    it('should return a 200 status code if the item is not found in the object', (done) => {
        const data = {
            data: {
                type: 'durban',
                crux: 'Indices',
                color: 'green',
                title: 'Indict the idiot'
            },
            item: 'test'
        };

        request(app)
                .post('/api/filter')
                .send(data)
                .expect(200)
                .expect(res => {
                    expect(res.body.statusMsg).toBe("attribute not found")                    
                })
                .end(done);
    });

    it('should return a 422 status code if wrong data type is provided', (done) => {
        const data = {
            data: "",
            item: []
        };

        request(app)
                .post('/api/filter')
                .send(data)
                .expect(422)
                .end(done);
    });
});