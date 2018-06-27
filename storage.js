class Storage{
    constructor(){
        this.city;
        this.state;
        this.defaultCity = "Glendale";
        this.defaultState = "CA";
    }

    getLocationData(){
        this.city = this.defaultCity;
        if (localStorage.getItem("city")){
            this.city = localStorage.getItem("city");
        }

        this.state = this.defaultState;
        if (localStorage.getItem("state")){
            this.state = localStorage.getItem("state");
        }

        return{
            city : this.city,
            state : this.state
        }
    }

    setLocationData(city, state){
        localStorage.setItem("city", city);
        localStorage.setItem("state", state);
    }
}