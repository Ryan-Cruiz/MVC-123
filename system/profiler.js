module.exports = {
        query_string : '',
        response : [],
        request : [],
        query_result : [],
        time: 0,
    queries(string,result){
        this.query_string = string;
        this.query_result = result;
    },
    time_exec(){
        for(let i = 0; i < 100000; i++){}
          let end = Date.now();
          return new_time = end - this.time;
    }
}