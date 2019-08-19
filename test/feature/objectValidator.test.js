// Packages
const expect = require("expect");
const request = require('supertest');

// Custom modules
const { app } = require('../../app');

describe ('Object validation', () => {
    it('should return a 200 status code if validation is successful', (done) => {
        const data = {
            data: {
                type: 'durban',
                crux: 'Indices',
                color: 'green',
                title: 'Indict the idiot'
            },
            rules: ['type', 'crux', 'color', 'title']
        };

        request(app)
                .post('/api/validate')
                .send(data)
                .expect(200)
                .expect(res => {
                    expect(res.body.statusMsg).toBe("valid")                    
                })
                .end(done);
    });

    it('should return a 400 status code if there are missing fields', (done) => {
        const data = {
            data: {
                type: 'durban',
                crux: 'Indices',
                color: 'green'
            },
            rules: ['type', 'crux', 'color', 'title']
        };

        request(app)
                .post('/api/validate')
                .send(data)
                .expect(400)
                .expect(res => {
                    expect(res.body.statusMsg).toBe("missing fields")                    
                    expect(res.body.data).toContain("title")                    
                })
                .end(done);
    });

    it('should return a 422 status code if wrong data type is provided', (done) => {
        const data = {
            data: "",
            rules: ""
        };

        request(app)
                .post('/api/validate')
                .send(data)
                .expect(422)
                .end(done);
    });
});