const axios = require('axios');
const { search, addConst } = require('../src/search');
const requestUrl = `http://localhost:5000/constellations`
describe('search.js', () => {
    describe('search()', () => {
        const data = [{
            name: 'Cancer',
            meaning: 'Crab',
            starsWithPlanets: 8,
            quadrant: 'NQ2',
            id: 'FzT4Bv0'
        },
        {
            name: 'Taurus',
            meaning: 'Bull',
            starsWithPlanets: 8,
            quadrant: 'NQ4',
            id: 'xDAlvit'
        }];

        beforeEach(() => {
            jest.spyOn(axios, "get");
        })

        afterEach(() => {
            jest.clearAllMocks(); //clear out any previous mock requests
        })

        it('should make a GET request to the correct URL', async () => {
            await search();
            expect(axios.get).toHaveBeenCalledWith(requestUrl);
        })

        it('should return data based on search item', async () => {
            axios.get.mockImplementation(() => Promise.resolve({ data }));
            let cancer = await search('Cancer');
            expect(cancer).toEqual(data[0]);
        })

        it('should log an error to the console', async () => {
            axios.get.mockImplementation(() => Promise.reject(new Error('Request Failed')));
            jest.spyOn(console, "error").mockImplementation();

            await search();
            expect(console.error).toHaveBeenCalledWith("Request Failed");

        })
    })
    describe('addConst()', () => {
        const data = [{
            name: 'Cancer',
            meaning: 'Crab',
            starsWithPlanets: 8,
            quadrant: 'NQ2',
            id: 'FzT4Bv0'
        },
        {
            name: 'Taurus',
            meaning: 'Bull',
            starsWithPlanets: 8,
            quadrant: 'NQ4',
            id: 'xDAlvit'
        }];

        beforeEach(() => {
            jest.spyOn(axios, "post");
        })

        afterEach(() => {
            jest.clearAllMocks(); //clear out any previous mock requests
        })

        it('should make a POST request to the correct URL', async () => {
            await addConst(data[0]);
            expect(axios.post).toHaveBeenCalledWith(requestUrl,data[0]);
        })

        it('should add data to constellation list', async () => {
            axios.post.mockImplementation(() => Promise.resolve({ data:data[0] }));
            let cancer = await addConst({
                name: 'Cancer',
                meaning: 'Crab',
                starsWithPlanets: 8,
                quadrant: 'NQ2'
            });
            expect(cancer).toEqual(data[0]);
        })

        it('should log an error to the console', async () => {
            axios.post.mockImplementation(() => Promise.reject(new Error('Request Failed')));
            jest.spyOn(console, "error").mockImplementation();

            await addConst();
            expect(console.error).toHaveBeenCalledWith("Request Failed");

        })
    })



});