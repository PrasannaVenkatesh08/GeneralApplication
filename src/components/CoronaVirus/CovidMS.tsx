export default class CovidMS {
    static globalData : string = "https://api.covid19api.com/summary" ;

    static getURLByCountry(country : any){
        var currentDate = new Date().toISOString() ;
        var url = "/live/country/" + country + "/status/confirmed/date/2021-03-01T13:13:30Z" ;
        return url ;
    }

    static apifyCovidURI : string = "/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true" ;
    

}