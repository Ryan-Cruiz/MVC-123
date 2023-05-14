class ORM {
    constructor() {
        this.queries = '';
        this.select_tbl = '';
    }
    select(tbl_name, arr_values) {
        this.queries += `SELECT `;
        if (arr_values[0] === '*' && arr_values.length === 1 || arr_values === '*') {
            this.queries += '* FROM ';
        } else {
            arr_values.map((values, i) => {
                if (i !== arr_values.length - 1) {
                    this.queries += `${values},`;
                } else {
                    this.queries += `${values} FROM `;
                }
            })
        }
        this.select_tbl = tbl_name;
        this.queries += tbl_name;
        return this;
    }

    /**
     * 
     * @param {*} condition_arr 
     * @returns 
     * This will take an array of condition e.g WHERE([t1, ORM.AND(t2) , ORM.OR(t3) ])
     */
    where(condition_arr) {
        this.queries += ` WHERE `
        condition_arr.map(values => {
            this.queries += values;
        })
        return this;
    }

    /**
     * 
     * @param {*} value 
     * @returns 
     * will take the value and return it to append
     * e.g  WHERE([t1, ORM.OR(t3) ])
     */
    or(value) {
        return ` AND ${value}`;
    }

    /**
     * 
     * @param {*} value 
     * @returns 
     * will take the value and return it to append
     * e.g  WHERE([t1, ORM.AND(t2)])
     */
    and(value) {
        return ` OR ${value}`;
    }

    /**
     * 
     * @param {*} tbl_name 
     * TABLE OF THE NEW TABLE THAT WANT TO JOIN
     * @param {*} tbl_columns 
     * WILL TAKE 2 VALUES IN ARRAY THE FIRST IS ON NEW SELECTED
     * TABLE AND SECOND IS ON SELECTED TABLE
     * selected table = test1
     * e.g INNER(test2,[ id,user_id ])
     */
    inner(tbl_name, tbl_columns) {
        let output = ` INNER JOIN ${tbl_name} ON ${tbl_name}.${tbl_columns[0]} = ${this.select_tbl}.${tbl_columns[1]}`;
        this.queries += output;
        return this;
    }
    destroy(tbl_name){
        let output = `DELETE FROM ${tbl_name}`;
        this.queries += output;
        return this;
    }
    exec() {
        let output = this.queries;
        this.queries = '';
        this.select_tbl = '';
        return output;
    }
}
module.exports = new ORM();