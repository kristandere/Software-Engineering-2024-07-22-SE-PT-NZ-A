const request = require('supertest');
const express = require('express');
const calculatorRouter = require('./calculator');

const app = express();
app.use('/calculator', calculatorRouter);

describe('Calculator Routes', () => {
    test('GET /calculator/add should return sum of numbers', () => {
        return request(app)
            .get('/calculator/add?num1=10&num2=5')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({ res: 15 });
            });
    });

    test('GET /calculator/subtract should return difference of numbers', () => {
        return request(app)
            .get('/calculator/subtract?num1=10&num2=5')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({ res: 5 });
            });
    });

    test('GET /calculator/multiply should return product of numbers', () => {
        return request(app)
            .get('/calculator/multiply?num1=10&num2=5')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({ res: 50 });
            });
    });

    test('GET /calculator/divide should return quotient of numbers', () => {
        return request(app)
            .get('/calculator/divide?num1=10&num2=5')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({ res: 2 });
            });
    });

    test('GET /calculator/divide should return error for division by zero', () => {
        return request(app)
            .get('/calculator/divide?num1=10&num2=0')
            .expect('Content-Type', /json/)
            .expect(400)
            .then((response) => {
                expect(response.body).toEqual({ error: 'Division by zero' });
            });
    });

    test('GET /calculator/add should return error for invalid input', () => {
        return request(app)
            .get('/calculator/add?num1=abc&num2=5')
            .expect('Content-Type', /json/)
            .expect(400)
            .then((response) => {
                expect(response.body).toEqual({ error: 'Invalid input' });
            });
    });
});
