import * as helper from '../utilities'

describe('helper', () => {
    describe('fetchBusinesses', () => {
        beforeEach(() => {      
            window.fetch = jest.fn(() => Promise.resolve({
              ok: true,
              json: () => Promise.resolve()
            }))
          })
        
          it('should call fetch with the correct url if locationType is breweries', async () => {
              const expected = 'https://truck-trackr-api.herokuapp.com/api/v1/breweries'

              await helper.fetchBusinesses('breweries')

              expect(window.fetch).toHaveBeenCalledWith(expected)
          })

          it('should call fetch with the correct url if locationType is food_trucks', async () => {
            const expected = 'https://truck-trackr-api.herokuapp.com/api/v1/food_trucks'

            await helper.fetchBusinesses('food_trucks')

            expect(window.fetch).toHaveBeenCalledWith(expected)
        })          
    })
})