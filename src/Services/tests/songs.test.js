import {searchSongsApi} from '../songs'
describe('Services Tests', () => {
    it('it should return promise',()=>{
        const searchSongsPromise = searchSongsApi();
        console.log(searchSongsPromise);
    })

})
